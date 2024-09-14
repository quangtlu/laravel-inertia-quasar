<script setup lang="ts">
import GuestLayout from "@/Layouts/GuestLayout.vue";
import BaseInput from "@/Components/common/BaseInput.vue";
import BaseButton from "@/Components/common/BaseButton.vue";
import { Head, useForm } from "@inertiajs/vue3";

defineProps<{
    status?: string;
}>();
defineOptions({ layout: GuestLayout });

const form = useForm({
    email: "",
});

const submit = () => {
    form.post(route("password.email"));
};
</script>

<template>
    <Head title="Forgot Password" />

    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
    </div>

    <div
        v-if="status"
        class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"
    >
        {{ status }}
    </div>

    <q-form @submit.prevent="submit">
        <BaseInput
            id="email"
            type="email"
            v-model="form.email"
            :error="form.errors.email"
        />

        <BaseButton
            :disabled="form.processing"
            color="primary"
            type="submit"
            size="sm"
            class="q-mt-md"
            label="Email Password Reset Link"
        />
    </q-form>
</template>
