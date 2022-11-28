<template>
    <section class="c-layout">
        <router-view v-slot="{ Component, route }">
            <template v-if="Component">
                <transition>
                    <keep-alive>
                        <component :is="Component" :key="route.meta?.keepUsePath ? route.path : route.fullPath" />
                    </keep-alive>
                </transition>
            </template>
        </router-view>
    </section>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss" scoped></style>
