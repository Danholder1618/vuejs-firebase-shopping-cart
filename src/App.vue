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
          Explore our latest collection of laptops at
          <a href="https://github.com/ittus/vuejs-firebase-shopping-cart" target="_blank" class="text-light">
            Vue Laptop Store
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
}

footer {
  flex: 0 0 auto;
  padding: 10px 0;
  color: #666;
  font-size: 85%;
  background-color: #343a40;
  background: linear-gradient(to bottom, #343a40, #1a1e21);
}

footer a {
  color: #999;
  transition: color 0.3s ease-in-out;
}

footer a:hover {
  color: #efefef;
}

body {
  font-family: 'Open Sans', sans-serif; /* ваш текущий шрифт */
}

</style>
