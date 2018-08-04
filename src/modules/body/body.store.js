!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
        },
        computed: {
            selectedHash: function() {
                return this.platform.selectedHash;
            }
        }
    });
    BI.model("dec.model.body", Store);
})();