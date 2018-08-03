!(function() {
    var Header = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.header");
        },
        getWidth: function() {
            return document.body.clientWidth;
        },
        watch: {
            // selectedHeader: function(val) {
            //     this.list.setValue(val);
            // },
            selectedHash: function(val) {
                this.hash.setValue(val);
            }
        },

        render: function() {
            var self = this;
            return {
                type: "bi.left_right_vertical_adapt",
                cls: "header-panel",
                lhgap: self.getWidth() * 0.0073,
                rhgap: self.getWidth() * 0.022,
                items: {
                    left: [{
                        type: "bi.image_button",
                        src: "https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg",
                        width: self.getWidth() * 0.0876,
                        height: 30,
                        handler: function() {
                            self.store.selectHash("index");
                        }
                    }, {
                        type: "bi.clear_editor",
                        cls: "search-bar",
                        width: self.getWidth() * 0.123,
                        height: 26,
                        handler: function() {
                            // console.log(self);
                            // self.style.cssText = "background: #fff;";
                        }
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
                                self.store.hash(this.getValue()[0]);
                            }
                        }],
                        layouts: [{
                            type: "bi.vertical_adapt",
                            hgap: self.getWidth() * 0.01464
                        }],
                        items: this.model.hashes
                    }]
                }
            };
        }
    });
    BI.shortcut("dec.header", Header);
})();