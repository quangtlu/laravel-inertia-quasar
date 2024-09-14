<template>
    <BaseSelect
        v-model="model"
        :options="filterOptions"
        v-bind="$attrs"
        use-input
        fill-input
        input-debounce="0"
        @filter="filterFn"
    >
        <template v-slot:no-option>
            <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
        </template>
    </BaseSelect>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseSelect from "./BaseSelect.vue";

const model = defineModel({ required: true });
const props = defineProps(["options"]);

const filterOptions = ref(props.options);
const filterFn = (val, update, abort) => {
    if (val === "") {
        update(() => {
            filterOptions.value = props.options;
        });
        return;
    }

    update(() => {
        const needle = val.toLowerCase();
        filterOptions.value = props.options.filter(
            (option) => option.label.toLowerCase().indexOf(needle) > -1
        );
    });
};
</script>
