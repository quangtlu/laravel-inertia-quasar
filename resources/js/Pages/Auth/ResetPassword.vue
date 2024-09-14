<script setup lang="ts">
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import BaseInput from "@/Components/common/BaseInput.vue";
import BaseButton from "@/Components/common/BaseButton.vue";

const props = defineProps<{
    email: string;
    token: string;
}>();

defineOptions({ layout: GuestLayout });

const form = useForm({
    token: props.token,
    email: props.email,
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("password.store"), {
        onFinish: () => {
            form.reset("password", "password_confirmation");
        },
    });
};
</script>

<template>
    <Head title="Reset Password" />

    <q-form @submit.prevent="submit">
        <div class="flex flex-col gap-4">
            <BaseInput
                id="email"
                type="email"
                v-model="form.email"
                :error="form.errors.email"
                label="Email"
            />
            <BaseInput
                id="password"
                type="password"
                v-model="form.password"
                :error="form.errors.password"
                label="Password"
            />
            <BaseInput
                id="password_confirmation"
                type="password"
                v-model="form.password_confirmation"
                :error="form.errors.password_confirmation"
                label="Confirm Password"
            />
        </div>

        <div class="flex items-center justify-end mt-4">
            <BaseButton :disabled="form.processing">
                Reset Password
            </BaseButton>
        </div>
    </q-form>
</template>
