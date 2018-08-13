!(function() {
    var Header = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.header");
        },
        watch: {
            selectedHash: function(val) {
                this.hash.setValue(val);
            }
        },
        render: function() {
            var self = this;
            return {
                type: "bi.left_right_vertical_adapt",
                cls: "header-panel",
                lhgap: 10,
                rhgap: 30,
                items: {
                    left: [{
                        type: "bi.image_button",
                        src: "https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg",
                        width: 120,
                        height: 30,
                        lgap: 30,
                        handler: function() {
                            self.store.setHash("index");
                        }
                    }, {
                        type: "bi.search_editor",
                        cls: "search-bar",
                        width: 233,
                        height: 26
                    }],
                    right: [{
                        type: "bi.button_group",
                        cls: "hash-bar",
                        ref: function() {
                            self.hash = this;
                        },
                        listeners: [{
                            eventName: BI.ButtonGroup.EVENT_CHANGE,
                            action: function() {
                                self.store.setHash(this.getValue()[0]);
                            }
                        }],
                        layouts: [{
                            type: "bi.vertical_adapt",
                            hgap: 20
                        }],
                        items: this.model.hashes
                    }]
                }
            };
        }
    });
    BI.shortcut("dec.header", Header);
})();