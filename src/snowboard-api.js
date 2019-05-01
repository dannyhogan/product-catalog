const snowboardsApi = {
    save(snowboardDetails) {
        const json = JSON.stringify(snowboardDetails);
        localStorage.setItem('snowboard', json);
    },
    get() {
        const json = localStorage.getItem('snowboard');
        const snowboard = JSON.parse(json);
        return snowboard;
    }
};

export default snowboardsApi;