<template>
    <q-layout
        view="lHh Lpr lff"
        container
        style="height: 100vh"
        class="shadow-2 rounded-borders"
    >
        <q-header elevated class="bg-cyan-8">
            <q-toolbar>
                <q-toolbar-title>Header</q-toolbar-title>
                <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
            </q-toolbar>
        </q-header>

        <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
            <q-scroll-area
                style="
                    height: calc(100% - 150px);
                    margin-top: 150px;
                    border-right: 1px solid #ddd;
                "
            >
                <q-list padding>
                    <Link
                        v-for="(menu, index) in menus"
                        :key="index"
                        :href="route(menu.route)"
                        :method="menu.method"
                    >
                        <q-item
                            clickable
                            v-ripple
                            :active="activeMenu === menu.name"
                            @click="activeMenu = menu.name"
                        >
                            <q-item-section avatar>
                                <q-icon :name="menu.icon" />
                            </q-item-section>

                            <q-item-section> {{ menu.name }} </q-item-section>
                        </q-item>
                    </Link>
                </q-list>
            </q-scroll-area>

            <q-img
                class="absolute-top"
                src="https://cdn.quasar.dev/img/material.png"
                style="height: 150px"
            >
                <div class="absolute-bottom bg-transparent">
                    <q-avatar size="56px" class="q-mb-sm">
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                    </q-avatar>
                    <div class="text-weight-bold">
                        {{ $page.props.auth.user.name }}
                    </div>
                    <div>{{ $page.props.auth.user.email }}</div>
                </div>
            </q-img>
        </q-drawer>

        <q-page-container>
            <slot />
        </q-page-container>
    </q-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";

const drawer = ref(false);
const menus = [
    {
        name: "Dashboard",
        route: "dashboard",
        icon: "dashboard",
        method: "get",
    },
    {
        name: "Profile",
        route: "profile.edit",
        icon: "person",
        method: "get",
    },
    {
        name: "Logout",
        route: "logout",
        icon: "logout",
        method: "post",
    },
];

const activeMenu = ref(menus[0].name);
</script>
