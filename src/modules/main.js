!(function() {
    var Widget = BI.inherit(BI.Widget, {
        render: function() {
            return {
                type: "bi.vertical",
                items: [{
                    type: "dec.header",
                    cls: "bi-border-bottom",
                    height: 50,
                    bgap: 20
                }, {
                    type: "dec.body",
                    bgap: 60,
                    // height: 2200,
                }, {
                    type: "dec.footer",
                    cls: "bi-border-top",
                    heigh: 190
                }]
            };
        }
    });
    BI.shortcut("dec.app", Widget);
})();