<template>
    <q-select dense outlined hide-bottom-space>
        <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </q-select>
</template>
