<template>
    <Head title="Log in" />

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
        {{ status }}
    </div>

    <q-form @submit.prevent="submit">
        <div class="flex flex-col gap-4">
            <BaseInput
                type="email"
                label="Email"
                v-model="form.email"
                :error="form.errors.email"
            />
            <BaseInput
                v-model="form.password"
                type="password"
                label="Password"
                :error="form.errors.password"
            />
            <BaseCheckbox label="Remember me" v-model="form.remember" />
        </div>

        <div class="flex items-center justify-between mt-4">
            <Link v-if="canResetPassword" :href="route('password.request')">
                Forgot your password?
            </Link>
            <div class="flex gap-2 items-center">
                <Link
                    tag="a"
                    class="underline text-blue-600"
                    :href="route('register')"
                >
                    Register
                </Link>

                <BaseButton class="ms-4" type="submit" color="primary">
                    Log in
                </BaseButton>
            </div>
        </div>
    </q-form>
</template>

<script setup lang="ts">
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import BaseButton from "@/Components/common/BaseButton.vue";
import BaseInput from "@/Components/common/BaseInput.vue";
import BaseCheckbox from "@/Components/common/BaseCheckbox.vue";

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

defineOptions({ layout: GuestLayout });

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => {
            form.reset("password");
        },
    });
};
</script>
