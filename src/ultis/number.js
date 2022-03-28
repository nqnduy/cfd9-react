export const currency = (num) => {
    return new Intl.NumberFormat("vn").format(num);
};
