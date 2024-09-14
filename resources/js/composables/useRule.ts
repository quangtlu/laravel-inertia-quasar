export default function useRule() {
    return {
        isRequired: (val: string) => !!val || "Required",
        isEmail: (val: string) => /.+@.+\..+/.test(val) || "Email is not valid",
        isValidPassword: (val: string) =>
            val.length >= 8 || "Password must be at least 8 characters",
    };
}
