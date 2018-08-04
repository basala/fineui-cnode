(function() {
    var index = 0;
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
        },
        computed: {
            selectedHash: function() {
                return this.platform.selectedHash;
            },
            hashes: function() {
                var self = this;
                return BI.map(
                    BI.Constants.getConstant("dec.constant.header.hashes"),
                    function(i, item) {
                        return BI.extend({
                                type: "bi.text_button",
                                selected: item.value === self.platform.selectedHash
                            },
                            item
                        );
                    }
                );
            }
        },
        actions: {
            hash: function(hash) {
                this.platform.selectedHash = hash;
            }
        }
    });
    BI.model("dec.model.header", Store);
})();