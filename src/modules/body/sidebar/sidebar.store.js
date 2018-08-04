!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
            // console.log(Dec.platformModel);
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