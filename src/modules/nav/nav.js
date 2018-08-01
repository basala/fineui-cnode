!(function () {
    var Nav = BI.inherit(BI.Widget, {
        _store: function () {
            return BI.Models.getModel("dec.model.nav");
        },

        watch: {
            selectedTab: function (val) {
                this.tree.setValue(val);
            }
        },

        render: function () {
            var self = this;
            return {
                type: "bi.vertical",
                items: [
                    {
                        type: "bi.multilayer_single_level_tree",
                        ref: function () {
                            self.tree = this;
                        },
                        listeners: [
                            {
                                eventName: BI.MultiLayerSingleLevelTree.EVENT_CHANGE,
                                action: function (v) {
                                    self.store.openTab(v);
                                }
                            }
                        ],
                        items: this.model.items
                    }
                ]
            };
        }
    });
    Nav.EVENT_VALUE_CHANGE = "EVENT_VALUE_CHANGE";
    BI.shortcut("dec.nav", Nav);
})();
