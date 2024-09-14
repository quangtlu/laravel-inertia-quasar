<script setup lang="ts">
import GuestLayout from "@/Layouts/GuestLayout.vue";
import BaseButton from "@/Components/common/BaseButton.vue";
import BaseInput from "@/Components/common/BaseInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

defineOptions({ layout: GuestLayout });

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => {
            form.reset("password", "password_confirmation");
        },
    });
};
</script>

<template>
    <Head title="Register" />

    <q-form @submit.prevent="submit">
        <div class="flex flex-col gap-4">
            <BaseInput
                type="text"
                label="Name"
                v-model="form.name"
                :error="form.errors.name"
            />
            <BaseInput
                type="email"
                label="Email"
                v-model="form.email"
                :error="form.errors.email"
            />
            <BaseInput
                type="password"
                label="Password"
                v-model="form.password"
                :error="form.errors.password"
            />
            <BaseInput
                type="password"
                label="Password Confirmation"
                v-model="form.password_confirmation"
                :error="form.errors.password_confirmation"
            />
        </div>

        <div class="flex items-center justify-end mt-4">
            <Link
                :href="route('login')"
                tag="a"
                class="underline text-blue-600"
            >
                Already registered?
            </Link>

            <BaseButton
                class="ms-4"
                :loading="form.processing"
                :disabled="form.processing"
                color="primary"
                type="submit"
            >
                Register
            </BaseButton>
        </div>
    </q-form>
</template>
