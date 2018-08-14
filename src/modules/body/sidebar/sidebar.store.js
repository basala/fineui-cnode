!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
            var self = this;
        },

        computed: {
            sidebarInfo: function() {
                return this.platform.sidebarInfo;
            },
            selectedHash: function() {
                return this.platform.selectedHash;
            },
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
            }
        }
    });
    BI.model("dec.model.body.sidebar", Store);
})();