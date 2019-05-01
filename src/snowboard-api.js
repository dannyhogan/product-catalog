const snowboardsApi = {
    // Saves snowboard object to localstorage
    save(snowboardDetails) {
        const json = JSON.stringify(snowboardDetails);
        localStorage.setItem('snowboard', json);
    },
    // Returns snowboard object from localstorage
    get() {
        const json = localStorage.getItem('snowboard');
        const snowboard = JSON.parse(json);
        return snowboard;
    }
};

export default snowboardsApi;