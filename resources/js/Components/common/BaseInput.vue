<template>
    <q-input
        dense
        outlined
        hide-bottom-space
        :error="!!error"
        :error-message="error"
    >
        <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </q-input>
</template>
<script lang="ts" setup>
defineProps(["error"]);
</script>
