!(function() {
    // var layoutStrategy;
    // var header, nav, body;
    var Widget = BI.inherit(BI.Widget, {
        // _store: function() {
        //     return BI.Models.getModel("dec.model.main");
        // },
        // _defaultConfig: function() {
        //     return BI.extend(Widget.superclass._defaultConfig.apply(this), {});
        // },

        // watch: {
        //     selectedHash: function(hash) {
        //         BI.history.navigate(hash);
        //     }
        // },

        render: function() {
            return {
                type: "bi.vertical",
                vgap: 20,
                items: [{
                        type: "dec.header",
                        cls: "bi-border-bottom"
                        // text: "垂直布局",
                        // height: 30
                    }, {
                        type: "dec.body",
                        // text: "垂直布局",
                        // height: 30
                    },
                    // {
                    //     type: "dec.nav",
                    //     cls: "bi-border-top bi-border-bottom bi-border-left"
                    //     // text: "垂直布局",
                    //     // height: 30
                    // },
                    {
                        type: "dec.footer",
                        cls: "bi-border-top",
                        tgap: 80
                        // text: "垂直布局",
                        // height: 30
                    }
                ]
            };
        }
    });
    BI.shortcut("dec.app", Widget);

    // Dec.injection.injectLayoutStrategy = function(_layoutStrategy) {
    //     layoutStrategy = _layoutStrategy;
    // };

    // Dec.injection.injectHeader = function(_header) {
    //     header = _header;
    // };
    // Dec.injection.injectNav = function(_nav) {
    //     nav = _nav;
    // };
    // Dec.injection.injectBody = function(_body) {
    //     body = _body;
    // };
})();