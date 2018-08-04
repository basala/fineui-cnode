!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
        },

        computed: {
            allTabs: function() {
                var model = this.platform;
                return BI.map(this.platform.openedTabs, function(i, tab) {
                    return {
                        type: "bi.text_button",
                        cls: "bi-list-item-select",
                        height: 24,
                        value: tab.value,
                        text: tab.text,
                        selected: model.selectedTab === tab.value
                    };
                });
            },
            selectedTab: function() {
                return this.platform.selectedTab;
            }
        },
        actions: {
            selectTab: function(tab) {
                var self = this;
                self.platform.selectedTab = tab;
                $.ajax({
                    url: "https://cnodejs.org/api/v1/topics",
                    data: {
                        tab: tab,
                        page: 1
                    },
                    success: function(res) {
                        self.platform.topicList = res.data;
                    }
                });
            }
        }
    });
    BI.model("dec.model.body.tabs", Store);
})();