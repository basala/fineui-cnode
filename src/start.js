!(function() {
    var AppRouter = BI.inherit(BI.Router, {
        routes: {
            "": "index",
            index: "index",
            getstart: "getstart",
            api: "api",
            about: "about",
            signup: "signup",
            signin: "signin"
        },
        index: function() {
            Dec.platformModel.selectedHash = "index";
            // Dec.platformModel.selectedHeader = "标签一";
            BI.createWidget({
                type: "dec.app",
                element: "#wrapper"
            });
        },
        getstart: function() {
            Dec.platformModel.selectedHash = "getstart";
            // Dec.platformModel.selectedHeader = "标签二";
            BI.createWidget({
                type: "dec.app",
                element: "#wrapper"
            });
        },
        api: function() {
            Dec.platformModel.selectedHash = "api";
            // Dec.platformModel.selectedHeader = "标签一";
            BI.createWidget({
                type: "dec.app",
                element: "#wrapper"
            });
        },
        about: function() {
            Dec.platformModel.selectedHash = "about";
            // Dec.platformModel.selectedHeader = "标签一";
            BI.createWidget({
                type: "dec.app",
                element: "#wrapper"
            });
        },
        signup: function() {
            Dec.platformModel.selectedHash = "signup";
            // Dec.platformModel.selectedHeader = "标签一";
            BI.createWidget({
                type: "dec.app",
                element: "#wrapper"
            });
        },
        signin: function() {
            Dec.platformModel.selectedHash = "signin";
            // Dec.platformModel.selectedHeader = "标签一";
            BI.createWidget({
                type: "dec.app",
                element: "#wrapper"
            });
        }
    });
    new AppRouter();
    BI.history.start();
})();