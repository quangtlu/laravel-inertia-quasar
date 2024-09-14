import useLoading from "./useLoading";
import useNotify from "./useNotify";

export default function useFormRouter() {
    const { success, error } = useNotify();
    const { showLoading, hideLoading } = useLoading();
    function getDefaultRouterConfig(
        message: string = "Success",
        successCallback?: () => void,
        isShowLoading: boolean = true,
        isShowNotify: boolean = true
    ) {
        return {
            preserveScroll: true,
            preserveState: true,
            onStart: () => (isShowLoading ? showLoading() : null),
            onFinish: () => (isShowLoading ? hideLoading() : null),
            onSuccess: (res) => {
                if (isShowNotify) success(message);
                if (successCallback) successCallback();
            },
            onError: (err) => {
                error(Object.values(err)[0] as string);
            },
        };
    }

    return {
        getDefaultRouterConfig,
    };
}
