!(function() {
    // var Widget = BI.inherit(BI.Widget, {
    //     _store: function() {
    //         return BI.Models.getModel("dec.model.body");
    //     },

    //     watch: {
    //         showText: function(val) {
    //             this.label.setValue("这里是异步context的演示:" + val);
    //         }
    //     },

    //     render: function() {
    //         var self = this;

    //         return {
    //             type: "bi.vertical",
    //             items: [{
    //                 type: "bi.label",
    //                 ref: function() {
    //                     self.label = this;
    //                 },
    //                 value: "这里是异步context的演示:" + this.model.showText,
    //                 cls: "bi-border-bottom",
    //                 height: 30
    //             }]
    //         };
    //     }
    // });
    // BI.shortcut("dec.async_context", Widget);
})();