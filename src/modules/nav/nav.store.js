!(function () {
    var Store = BI.inherit(Fix.Model, {
        _init: function () {
            this.platform = Dec.platformModel;
        },
        context: ["$selector"],
        computed: {
            selectedTab: function () {
                return this.platform.selectedTab;
            },
            items: function () {
                var self = this;
                return BI.map(
                    BI.Constants.getConstant("dec.constant.nav.items"),
                    function (i, item) {
                        return BI.extend({}, item, {
                            selected: item.value === self.platform.selectedTab
                        });
                    }
                );
            }
        },
        actions: {
            openTab: function (tab) {
                if (!this.platform.openedTabs.contains(tab)) {
                    this.platform.openedTabs.push(tab);
                }
                this.platform.selectedTab = tab;
            }
        }
    });
    BI.model("dec.model.nav", Store);
})();
