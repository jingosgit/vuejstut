

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import UploadComponent from './components/UploadComponent.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'create',
        path: '/create',
        component:  CreateComponent
    },
    {
        name: 'posts',
        path: '/posts',
        component:  IndexComponent
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component:  EditComponent
    },
    {
        name: 'upload',
        path: '/upload',
        component: UploadComponent
    },
];

const router = new VueRouter({ 
    mode:'history', 
    routes:routes 
});

const app = new Vue(Vue.util.extend(
    {
        router
    },
        App)).$mount('#app');
