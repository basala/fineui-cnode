!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
        },
        // context: ["testContext", "$selector"],
        computed: {
            // selectedTab: function() {
            //     return this.platform.selectedTab;
            // },
            // $widgetSelector: function() {
            //     return this.model.$selector.getSelector("widgets.xxID");
            // },
            // $dimensionSelector: function() {
            //     return this.model.$widgetSelector.getSelector("dimensions.xxID");
            // },
            // dimensionName: function() {
            //     return this.model.$dimensionSelector.data.name;
            // },
            // showText: function() {
            //     return (
            //         "hash:" +
            //         this.platform.selectedHash +
            //         "---" +
            //         "header:" +
            //         this.platform.selectedHeader +
            //         "---" +
            //         "tab:" +
            //         this.platform.selectedTab +
            //         "---" +
            //         "context:" + this.model.testContext +
            //         "---" +
            //         "data:" +
            //         this.model.dimensionName
            //     );
            // }

            selectedHash: function() {
                return this.platform.selectedHash;
            }
        }
    });
    BI.model("dec.model.body", Store);
})();