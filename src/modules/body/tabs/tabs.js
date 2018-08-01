!(function() {
    var Tabs = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.body.tabs");
        },

        watch: {
            allTabs: function(items) {
                this.tabs.populate(this._formatItems(items));
            }
        },

        _formatItems: function(items) {
            var self = this;
            return BI.map(items, function(i, tab) {
                return BI.extend({
                    handler: function() {
                        self.store.selectTab(tab.value);
                    }
                }, tab);
            });
        },

        render: function() {
            var self = this;
            return {
                type: "bi.vertical",
                // element: this,
                // vgap: 10,
                cls: "tab-container",
                items: [{
                    type: "bi.button_group",
                    ref: function() {
                        self.tabs = this;
                    },
                    layouts: [{
                        type: "bi.horizontal_adapt",
                        // htape: 10
                    }],
                    scrollx: true,
                    cls: "tab-bar",
                    items: this._formatItems(this.model.allTabs)
                }]
            };
        }
    });
    BI.shortcut("dec.body.tabs", Tabs);
})();