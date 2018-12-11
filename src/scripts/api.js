
const data = {
    userName: 'userName'
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
