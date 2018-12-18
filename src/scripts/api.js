//
// const data = {
//     userName: 'Коля'
// };
//
// export const api = {
//     getUser() {
//         return new Promise((res) => {
//             // fetch...
//             setTimeout(() => {
//                 res(data);
//             }, 500);
//         });
//     }
// };
export const api = {
    getUser(spiceId) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `https://iqos.interaxions.ru/rest/ny_info/${spiceId}/`);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }
};
