import { copyToClipboard, Notify } from "quasar";
import { router } from "@inertiajs/core";
import useRoute from "../composables/useRoute";

const { route } = useRoute();
export const copy = (text: string) =>
    copyToClipboard(text)
        .then(() => {
            Notify.create({
                message: "Copied successfully",
                color: "green",
                icon: "task_alt",
                position: "top-right",
                progress: true,
                timeout: 3000,
            });
        })
        .catch(() => {
            Notify.create({
                message: "Copied Failed",
                color: "negative",
                icon: "error",
                position: "top-right",
                progress: true,
                timeout: 3000,
            });
        });

export const goToPage = (name: string, params: any | undefined = undefined) => {
    router.visit(route(name, params));
};

export const openURL = (url: string) => {
    window.open(url, "_self");
};

export const syncParamsUrl = (searchParams) => {
    if (!location.search) return;

    var search = location.search.substring(1);
    const params = JSON.parse(
        '{"' +
            decodeURI(search)
                .replace(/"/g, '\\"')
                .replace(/&/g, '","')
                .replace(/=/g, '":"') +
            '"}'
    );
    if (params.page && params.per_page) {
        delete params.page;
        delete params.per_page;
    }
    Object.assign(searchParams, params);
};

export const getImageUrl = (url: string, isExternal = false) =>
    isExternal ? url : "/storage/" + url;
