<template>
  <div class="app-container">
    <header>
      <app-header></app-header>
      <message-component></message-component>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="navbar-dark bg-primary text-white">
      <div class="container">
        <p class="text-center mb-0">
          Explore our latest collection of notebooks at
          <a href="https://github.com/ittus/vuejs-firebase-shopping-cart" target="_blank" class="text-light">
            Vue Notebook Shop
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header.vue';
import MessageComponent from './components/common/MessageComponent.vue';

export default {
  components: {
    appHeader: Header,
    MessageComponent
  },
  methods: {
    ...mapActions(['getShoppingCart', 'listenToProductList'])
  },
  created() {
    let uid = this.$store.getters.currentUser.uid;
    this.listenToProductList();
    this.getShoppingCart({ uid, currentCart: this.$store.getters.cartItemList });
  }
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header {
  flex: 0 0 auto;
}

main {
  flex: 1 1 auto;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://catherineasquithgallery.com/uploads/posts/2023-01/1674279693_catherineasquithgallery-com-p-serii-fon-s-geometricheskim-risunkom-foto-22.png') center center no-repeat;
  background-size: cover;
}

footer {
  flex: 0 0 auto;
  padding: 10px 0;
  color: #666;
  font-size: 85%;
}

footer a {
  color: #999;
  transition: color 0.3s ease-in-out;
}

footer a:hover {
  color: #efefef;
}

body {
  font-family: 'Open Sans', sans-serif;
}
</style>
