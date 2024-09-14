<template>
    <q-avatar color="primary">
        <img v-if="src" :src="getImageUrl(src)" />
        <div v-else class="text-dark">
            {{ alt }}
        </div>
    </q-avatar>
</template>

<script setup lang="ts">
import { getImageUrl } from "@/utils/common";
defineProps(["src", "alt"]);
</script>

<style></style>
