!(function() {
    var AppRouter = BI.inherit(BI.Router, {
        routes: {
            "": "index"
        },
        index: function() {
            Dec.platformModel.selectedHash = "index";
            BI.createWidget({
                type: "dec.app",
                element: "#wrapper"
            });
        }
    });
    new AppRouter();
    BI.history.start();
})();

$(function() {
    $(".search-bar input").focus(function() {
        console.log("focus");
        $(".search-bar").css("background-color", "#fff");
    });
    $(".search-bar input").blur(function() {
        console.log("blur");
        $(".search-bar").css("background-color", "#888");
    });
});