!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
            // console.log(Dec.platformModel);
            var self = this;
            // $.ajax({
            //     url: "https://cnodejs.org/api/v1/topics",
            //     data: {
            //         tab: "all",
            //         page: 1
            //     },
            //     success: function(res) {
            //         self.platform.sidebarInfo["noReplyTopic"] = res.data;
            //         // console.log(self.platform.topicList);
            //     }
            // });
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
                    url: "https://cnodejs.org/api/v1/topic/" + value,
                    success: function(res) {
                        self.platform.topicPage = res.data;
                        console.log(Dec.platformModel.topicPage);
                    }
                });
            }
        }
    });
    BI.model("dec.model.body.sidebar", Store);
})();