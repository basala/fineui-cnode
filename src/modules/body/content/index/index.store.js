!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            // console.log("index init....");
            this.platform = Dec.platformModel;
            // console.log(Dec.platformModel);
            var self = this;
            // console.log(self.platform);
            // console.log(self.platform.topicList);
            self.platform.selectedTab = "all";
            $.ajax({
                url: "https://cnodejs.org/api/v1/topics",
                data: {
                    tab: "all",
                    page: 1
                },
                success: function(res) {
                    self.platform.topicList = res.data;
                    // console.log(self.platform.topicList);
                }
            });
        },

        computed: {
            topicList: function() {
                return this.platform.topicList;
            },
            selectedTab: function() {
                return this.platform.selectedTab;
            }
        },

        actions: {
            getPage: function(value) {
                var self = this;
                self.platform.selectedHash = "getpage";
                $.ajax({
                    url: "https://cnodejs.org/api/v1/user/" + value.author.loginname,
                    success: function(res) {
                        self.platform.sidebarInfo = res.data;
                    }
                });
                $.ajax({
                    url: "https://cnodejs.org/api/v1/topic/" + value.id,
                    success: function(res) {
                        self.platform.topicPage = res.data;
                        // console.log(Dec.platformModel.topicPage);
                    }
                });
            },

            getList: function(page) {
                var self = this;
                $.ajax({
                    url: "https://cnodejs.org/api/v1/topics",
                    data: {
                        tab: self.model.selectedTab,
                        page: page
                    },
                    success: function(res) {
                        self.platform.topicList = res.data;
                        // window.scrollTo(0, 0);
                    }
                });
            }
        }
    });
    BI.model("dec.model.body.content.index", Store);
})();