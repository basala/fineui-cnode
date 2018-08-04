!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            // console.log("topicPage init....");
            this.platform = Dec.platformModel;
            // console.log(Dec.platformModel.topicPage);
            var self = this;
        },

        computed: {
            topicPage: function() {
                return this.platform.topicPage;
            }
        }
    });
    BI.model("dec.model.body.content.page", Store);
})();