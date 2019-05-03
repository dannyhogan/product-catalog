const snowboardsApi = {
    storage: localStorage,
    // Saves snowboard object to localstorage
    save(snowboard) {
        const snowboards = snowboardsApi.getAll();
        snowboards.push(snowboard);
        const json = JSON.stringify(snowboards);
        snowboardsApi.storage.setItem('snowboards', json);
    },
    // Returns snowboard object from localstorage
    get() {
        const json = snowboardsApi.storage.getItem('snowboards');
        const snowboards = JSON.parse(json);
        return snowboards[0];
    },
    getAll() {
        const json = snowboardsApi.storage.getItem('snowboards');

        let snowboards = JSON.parse(json);
        
        if(!snowboards) {
            snowboards = [];
        }

        return snowboards;
    }
};

export default snowboardsApi;