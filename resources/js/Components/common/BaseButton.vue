<template>
    <q-btn @click="onClick" type="submit" color="primary" size="sm">
        <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </q-btn>
</template>

<script setup lang="ts">
import { Link, router } from "@inertiajs/vue3";
const props = defineProps(["href"]);
const emits = defineEmits(["click"]);
const onClick = () => {
    if (props.href) {
        router.visit(props.href);
    } else {
        emits("click");
    }
};
</script>
