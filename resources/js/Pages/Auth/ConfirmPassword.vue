<script setup lang="ts">
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import BaseInput from "@/Components/common/BaseInput.vue";
import BaseButton from "@/Components/common/BaseButton.vue";

const form = useForm({
    password: "",
});

defineOptions({ layout: GuestLayout });

const submit = () => {
    form.post(route("password.confirm"), {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <Head title="Confirm Password" />

    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
        This is a secure area of the application. Please confirm your password
        before continuing.
    </div>

    <form @submit.prevent="submit">
        <div>
            <BaseInput
                id="password"
                type="password"
                class="mt-1 block w-full"
                label="Password"
                :error="form.errors.password"
                v-model="form.password"
            />
        </div>

        <div class="flex justify-end mt-4">
            <BaseButton class="ms-4" :disabled="form.processing">
                Confirm
            </BaseButton>
        </div>
    </form>
</template>
