import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { routes } from './routes';
import store from './stores/store';
import { firebaseListener } from './config/firebaseConfig';

import './assets/styles/app.scss';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

firebaseListener(authStatusChange);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

function authStatusChange(loggedIn, user) {
	if (store) {
		store.commit('AUTH_STATUS_CHANGE');
		if (user) {
			store.dispatch('getShoppingCart', { uid: user.uid, currentCart: store.getters.cartItemList });
		}
	}
}
