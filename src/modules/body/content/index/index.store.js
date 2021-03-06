!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
            var self = this;
            self.platform.selectedTab = "all";
            $.ajax({
                url: "https://cnodejs.org/api/v1/topics",
                data: {
                    tab: "all",
                    page: 1
                },
                success: function(res) {
                    self.platform.topicList = res.data;
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
                        res.data.recent_topics = res.data.recent_topics.filter(function(v) {
                            return v.id != value.id;
                        });
                        self.platform.sidebarInfo = res.data;
                    }
                });
                $.ajax({
                    url: "https://cnodejs.org/api/v1/topic/" + value.id,
                    success: function(res) {
                        self.platform.topicPage = res.data;
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
                    }
                });
            }
        }
    });
    BI.model("dec.model.body.content.index", Store);
})();