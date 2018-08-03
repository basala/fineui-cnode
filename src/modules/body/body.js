!(function() {
    var Body = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.body");
        },
        getWidth: function() {
            // console.log(document.body.clientWidth);
            return document.body.clientWidth;
        },
        watch: {
            // selectedTab: function(val) {
            //     this.tab.setSelect(val);
            // }

            selectedHash: function(hash) {
                switch (hash) {
                    case "index":
                        // this.content.populate(items);
                        // console.log("index");
                        this.content.populate([{
                            type: "dec.body.content.index",
                            height: 2110
                        }]);
                        break;
                    case "getstart":
                        // console.log("getstart");
                        this.content.populate([{
                            type: "dec.body.content.getstart"
                        }]);
                        break;
                    case "api":
                        // console.log("api");
                        this.content.populate([{
                            type: "dec.body.content.api"
                        }]);
                        break;
                    case "about":
                        // console.log("about");
                        this.content.populate([{
                            type: "dec.body.content.about"
                        }]);
                        break;
                    case "signup":
                        // console.log("signup");
                        // this.content.populate([{
                        //     type: "dec.body.content.signup"
                        // }]);
                        window.location.href = "https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9";
                        break;
                    case "signin":
                        // console.log("signin");
                        this.content.populate([{
                            type: "dec.body.content.signin"
                        }]);
                        break;
                    case "getpage":
                        // console.log("getpage");
                        // console.log(Dec.platformModel.topicPage);
                        this.content.populate([{
                            type: "dec.body.content.page"
                        }]);
                        break;
                }
            }
        },

        beforeInit: function(callback) {
            setTimeout(callback, 500);
        },

        render: function() {
            var self = this;

            return {
                type: "bi.horizontal",
                hgap: 20,
                lgap: self.getWidth() * 0.03,
                ref: function() {
                    self.body = this;
                },
                items: [{
                    type: "bi.vertical",
                    width: self.getWidth() * 0.665,
                    ref: function() {
                        self.content = this;
                    },
                    items: [{
                        // type: "bi.label",
                        // text: "test"
                        type: "dec.body.content.index"
                    }]
                }, {
                    type: "bi.vertical",
                    width: self.getWidth() * 0.212,
                    ref: function() {
                        self.sidevar = this;
                    },
                    items: [{
                        type: "dec.body.sidebar"
                    }]
                }]
            };
        }
    });
    BI.shortcut("dec.body", Body);
})();