export function formatMoney(amount: number): string {
    return amount
        ? Number(amount).toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
          })
        : "₦0";
}
