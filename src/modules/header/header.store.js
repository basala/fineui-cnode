(function() {
    var index = 0;
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
        },
        state: function() {
            return {
                index: -1
            };
        },
        // context: ["testContext", "$selector"],
        computed: {
            // selectedHeader: function () {
            //     return this.platform.selectedHeader;
            // },
            selectedHash: function() {
                return this.platform.selectedHash;
            },
            // items: function () {
            //     var self = this;
            //     return BI.map(
            //         BI.Constants.getConstant("dec.constant.header.items"),
            //         function (i, item) {
            //             return BI.extend(
            //                 {
            //                     type: "bi.text_button",
            //                     cls: "bi-list-item-select",
            //                     selected: item.value === self.platform.selectedHeader
            //                 },
            //                 item
            //             );
            //         }
            //     );
            // },
            hashes: function() {
                var self = this;
                return BI.map(
                    BI.Constants.getConstant("dec.constant.header.hashes"),
                    function(i, item) {
                        return BI.extend({
                                type: "bi.text_button",
                                // cls: "bi-list-item-select",
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
            // testContext: function () {
            //     this.model.testContext = Math.random();
            // },
            // modifyDimensionName: function () {
            //     this.model.$selector.getSelector("widgets.xxID.dimensions.xxID").data.name = "修改后的维度名" + index++;
            // },
            // testPoint: function () {

            // }
        }
    });
    BI.model("dec.model.header", Store);
})();