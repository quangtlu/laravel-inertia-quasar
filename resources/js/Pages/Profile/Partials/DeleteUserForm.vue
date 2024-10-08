<script setup lang="ts">
import { useForm } from "@inertiajs/vue3";
import { nextTick, ref } from "vue";
import BaseButton from "@/Components/common/BaseButton.vue";
import BaseInput from "@/Components/common/BaseInput.vue";

const confirmingUserDeletion = ref(false);
const passwordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    password: "",
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value?.focus());
};

const deleteUser = () => {
    form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value?.focus(),
        onFinish: () => {
            form.reset();
        },
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.clearErrors();
    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <header>
            <h2 class="text-lg font-medium text-gray-900">Delete Account</h2>

            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Before deleting your account, please
                download any data or information that you wish to retain.
            </p>
        </header>

        <BaseButton color="negative" @click="confirmUserDeletion"
            >Delete Account</BaseButton
        >

        <q-dialog v-model="confirmingUserDeletion" @close="closeModal">
            <q-card class="my-card">
                <q-card-section>
                    <div class="p-6">
                        <h2 class="text-lg font-medium text-gray-900">
                            Are you sure you want to delete your account?
                        </h2>

                        <p
                            class="mt-1 text-sm text-gray-600 dark:text-gray-400"
                        >
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </p>

                        <div class="mt-6">
                            <BaseInput
                                id="password"
                                ref="passwordInput"
                                v-model="form.password"
                                :error="form.errors.password"
                                type="password"
                                label="Password"
                                placeholder="Password"
                                @keyup.enter="deleteUser"
                            />
                        </div>

                        <div class="mt-6 flex justify-end">
                            <BaseButton color="secondary" @click="closeModal">
                                Cancel
                            </BaseButton>

                            <BaseButton
                                class="ms-3"
                                color="negative"
                                :disabled="form.processing"
                                @click="deleteUser"
                            >
                                Delete Account
                            </BaseButton>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </section>
</template>
