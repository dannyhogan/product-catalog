const snowboardsApi = {
    key: 'snowboards',
    // Saves snowboard object to localstorage
    save(snowboard) {
        const snowboards = snowboardsApi.getAll();
        snowboards.push(snowboard);
        const json = JSON.stringify(snowboards);
        localStorage.setItem(snowboardsApi.key, json);
    },
    // Returns snowboard object from localstorage based of brand
    get(brand) {
        const snowboards = snowboardsApi.getAll();

        for(let i = 0; i < snowboards.length; i++) {
            const snowboard = snowboards[i];
            if(snowboard.boardBrand === brand) {
                return snowboard;
            }
        }
    },
    getAll() {
        const json = localStorage.getItem(snowboardsApi.key);

        let snowboards = JSON.parse(json);
        
        if(!snowboards) {
            snowboards = [];
        }

        return snowboards;
    }
};

export default snowboardsApi;