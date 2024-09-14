import { useQuasar } from "quasar";

export default function useDialog() {
    const $q = useQuasar();

    function alert(title: string, message: string, okFn: () => void) {
        $q.dialog({
            title,
            message,
        }).onOk(() => {
            okFn();
        });
    }

    function confirm(title: string, message: string, okFn: () => void) {
        $q.dialog({
            title,
            message,
            cancel: true,
            persistent: true,
        }).onOk(() => {
            okFn();
        });
    }

    return {
        alert,
        confirm,
    };
}
