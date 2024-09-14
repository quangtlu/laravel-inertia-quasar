import { useQuasar } from "quasar";
import { computed } from "vue";

export default function () {
    const $q = useQuasar();

    return {
        isMobileScreen: computed(() => {
            return $q.screen.lt.md;
        }),
        isSmallThanLargeScreen: computed(() => {
            return $q.screen.lt.lg;
        }),
        isSmScreen: computed(() => {
            return $q.screen.lt.sm;
        }),
        isXXSScreen: computed(() => {
            return $q.screen.width < 435;
        }),
        isIos: computed(() => {
            return $q.platform.is.ios;
        }),
        isDesktop: computed(() => {
            return $q.platform.is.desktop;
        }),
    };
}
