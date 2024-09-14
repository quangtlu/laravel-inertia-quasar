import { usePage } from "@inertiajs/vue3";
import { useQuasar, type QNotifyCreateOptions } from "quasar";
export type NotifyType = "success" | "error" | "warn" | "info";
export type NotifyOptions = QNotifyCreateOptions;

export default function () {
    const $q = useQuasar();
    const page = usePage();
    const { route } = useRoute();
    const showNotify = (message: string, options?: NotifyOptions) => {
        $q.notify({
            message,
            type: "notify",
            position: "top-right",
            progress: true,
            timeout: 3000,
            ...options,
        });
    };

    const notifyError = (message: string, options?: NotifyOptions) => {
        showNotify(message, {
            ...options,
            color: "negative",
            icon: "error",
        });
        page.props.errors = {};
    };

    return {
        success: (message: string, options?: NotifyOptions) => {
            showNotify(message, {
                ...options,
                color: "green",
                icon: "task_alt",
            });
        },
        info: (message: string, options?: NotifyOptions) => {
            showNotify(message, {
                ...options,
                color: "info",
                icon: "info",
            });
        },
        warn: (message: string, options?: NotifyOptions) => {
            showNotify(message, {
                ...options,
                color: "warning",
                icon: "warning",
            });
        },
        error: notifyError,
        soundSuccess: () => {
            const audio = new Audio("/assets/audio/success.mp3");
            audio.play();
        },
    };
}
