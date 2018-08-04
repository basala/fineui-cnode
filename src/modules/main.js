!(function() {
    var Widget = BI.inherit(BI.Widget, {
        render: function() {
            return {
                type: "bi.vertical",
                items: [{
                    type: "dec.header",
                    cls: "bi-border-bottom",
                    bgap: 20
                }, {
                    type: "dec.body",
                    bgap: 60
                }, {
                    type: "dec.footer",
                    cls: "bi-border-top",
                }]
            };
        }
    });
    BI.shortcut("dec.app", Widget);
})();