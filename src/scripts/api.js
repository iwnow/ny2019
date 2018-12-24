const mock = {
    accessories: null,
    call_center: 1,
    call_center_text: "1 раз",
    emails: 5,
    emails_text: "5 посланий",
    first_iqos_order_date: "2018-11-06",
    first_iqos_order_date_text: "47 дней",
    first_name: "Андрей",
    id: 10037977,
    loyalty_level: "Silver",
    number_of_pts: 373,
    pts_to_next_level: 627,
    vouchers: 0,
    vouchers_text: null,
};

export const api = {
    getUser(spiceId) {
        return new Promise((resolve, reject) => {
            // resolve(mock);
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `https://iqos.interaxions.ru/rest/ny_info/${spiceId}/`);
            xhr.onload = () => resolve(JSON.parse(xhr.responseText));
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }
};
