app.factory('$localStorage', function () {
    return {
        set: function (name, data) {
            localStorage.setItem(name, data);
        },
        get: function (name) {
            return localStorage.getItem(name);
        },
        setObject: function (name, data) {
            localStorage.setItem(name, JSON.stringify(data));
        },
        getObject: function (name) {
            if (localStorage.getItem(name))
                return JSON.parse(localStorage.getItem(name));
            else return undefined;
        },
        removeItem:function (name) {
            localStorage.removeItem(name);
        }
    }
})
