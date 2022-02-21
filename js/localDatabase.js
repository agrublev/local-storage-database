class Collection {
    constructor(name = "localStorageDB") {
        this.name = name;
        this.storage = typeof window.localStorage === "undefined" ? undefined : window.localStorage;
        this.supported = typeof this.storage !== "undefined";
    }

    parseValue(res) {
        let val;
        try {
            val = JSON.parse(res);
            if (typeof val === "undefined") {
                val = res;
            }
            if (val === "true") {
                val = true;
            }
            if (val === "false") {
                val = false;
            }
            if (window.parseFloat(val) === val && typeof val !== "object") {
                val = window.parseFloat(val);
            }
        } catch (e) {
            val = res;
        }
        return val;
    }

    /**
     * Set - let's you set a new localStorage key pair set
     * @param key - a string that will be used as the accessor for the pair
     * @param value - the value of the localStorage item
     * @returns {*} - will return whatever it is you've stored in the local storage
     */
    set(value) {
        let vaa = this.get();
        let extended = vaa ? Object.assign(vaa, value) : value;
        let saver = JSON.stringify(extended);
        this.storage.setItem(this.name, saver);
        return this.parseValue(saver);
    }

    /**
     * Get - let's you get the value of any pair you've stored
     * @param key - the string that you set as accessor for the pair
     * @returns {*} - Object,String,Float,Boolean depending on what you stored
     */
    get(key) {
        let db = this.storage.getItem(this.name);
        db = this.parseValue(db);
        if (key) {
            return db ? db[key] : null;
        } else {
            return db;
        }
    }

    /**
     * Remove - let's you nuke a value from localStorage
     * @param key - the accessor value
     * @returns {boolean} - if everything went as planned
     */
    remove(key) {
        let db = this.storage.getItem(this.name);
        db = this.parseValue(db);
        if (key) {
            if (db && db[key]) {
                delete db[key];
                let saver = JSON.stringify(db);
                this.storage.setItem(this.name, saver);
            }
        } else {
            this.storage.removeItem(this.name);
        }

        return true;
    }
    /**
     * Clear All - let's you clear out ALL localStorage variables, use this carefully!
     */
    clearAll() {
        this.storage.removeItem(this.name);
    }
}

export default Collection;
