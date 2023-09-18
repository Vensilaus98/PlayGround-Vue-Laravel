/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp({});

//import components
import ExampleComponent from "./components/ExampleComponent.vue";
app.component("example-component", ExampleComponent);

import UserComponent from "./components/UserComponent.vue";
app.component("user-component", UserComponent);

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: ExampleComponent,
        },
        {
            path: "/users",
            name: "users",
            component: UserComponent,
        },
    ],
});

app.use(router).mount("#app");
