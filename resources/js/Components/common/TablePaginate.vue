<template>
    <q-table
        v-model:pagination="pagination"
        :rows="tableData.data"
        row-key="id"
        @request="onRequest"
        :loading="loading"
        :rows-per-page-options="[10, 20, 50, 100]"
    >
        <template
            v-for="(_, slot) in <Readonly<QTableSlots>>$slots"
            v-slot:[slot]="scope"
        >
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </q-table>
</template>

<script setup lang="ts">
import { router } from "@inertiajs/vue3";
import { onMounted, ref, watch, watchEffect } from "vue";

interface IPagination {
    page: number;
    rowsPerPage: number;
    rowsNumber: number;
}

interface ITableData {
    current_page: number;
    per_page: number;
    total: number;
    data: Array<any>;
}

const props = defineProps({
    tableData: {
        type: Object as () => ITableData,
        required: true,
    },
    onlyKeys: {
        type: Array as () => Array<string>,
        required: true,
    },
});

const fetchOptions = defineModel<any>("fetchOptions", { default: {} });
const emits = defineEmits(["changePage"]);
const loading = ref(false);
const pagination = ref<IPagination>();

function onRequest(params) {
    const { page, rowsPerPage } = params.pagination;
    pagination.value.page = page;
    pagination.value.rowsPerPage = rowsPerPage;
    fetchData();
}

onMounted(() => {
    syncPaginate();
});

const syncPaginate = () => {
    const { current_page, per_page, total } = props.tableData.meta;
    pagination.value = {
        page: current_page,
        rowsPerPage: per_page,
        rowsNumber: total,
    };
};

const fetchData = () => {
    router.reload({
        data: {
            page: pagination.value?.page,
            per_page: pagination.value?.rowsPerPage,
            ...fetchOptions.value,
        },
        only: props.onlyKeys || [],
        onStart: () => (loading.value = true),
        onFinish: () => {
            syncPaginate();
            loading.value = false;
        },
    });
};

watch(
    fetchOptions,
    (val) => {
        if (Object.values(val).length > 0) fetchData();
    },
    {
        deep: true,
        immediate: true,
    }
);

defineExpose({
    fetchData,
});
</script>

<style></style>
