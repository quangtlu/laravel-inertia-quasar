import { useQuasar } from "quasar";

export default function () {
    const $q = useQuasar();

    return {
        showLoading: () => $q.loading.show(),
        hideLoading: () => $q.loading.hide(),
    };
}
