
const data = {
    userName: 'Коля'
};

export const api = {
    getUser() {
        return new Promise((res) => {
            // fetch...
            setTimeout(() => {
                res(data);
            }, 500);
        });
    }
};
