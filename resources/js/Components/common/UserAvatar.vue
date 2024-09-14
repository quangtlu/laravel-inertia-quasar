<template>
    <div class="flex gap-1 items-center">
        <BaseAvatar :src="user.avatar" :alt="user.user_name[0]" />
        <div class="truncate w-[100px] md:w-fit">
            {{ user.user_name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { getImageUrl } from "@/utils/common";
import BaseAvatar from "@/components/common/BaseAvatar.vue";
defineProps(["user"]);
</script>

<style></style>
