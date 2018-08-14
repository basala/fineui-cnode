!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
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