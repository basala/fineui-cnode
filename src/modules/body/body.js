!(function() {
    var Body = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.body");
        },

        watch: {
            selectedHash: function(hash) {
                switch (hash) {
                    case "index":
                        this.content.populate([{
                            type: "dec.body.content.index"
                        }]);
                        break;
                    case "getstart":
                        this.content.populate([{
                            type: "dec.body.content.getstart"
                        }]);
                        break;
                    case "api":
                        this.content.populate([{
                            type: "dec.body.content.api"
                        }]);
                        break;
                    case "about":
                        this.content.populate([{
                            type: "dec.body.content.about"
                        }]);
                        break;
                    case "signup":
                        window.location.href = "https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9";
                        break;
                    case "signin":
                        this.content.populate([{
                            type: "dec.body.content.signin"
                        }]);
                        break;
                    case "getpage":
                        this.content.populate([{
                            type: "dec.body.content.page"
                        }]);
                        break;
                }
            }
        },

        render: function() {
            var self = this;
            return {
                type: "bi.vertical",
                lgap: 60,
                rgap: 60,
                items: [{
                    type: "bi.htape",
                    height: 2200,
                    ref: function() {
                        self.body = this;
                    },
                    items: [{
                        width: "fill",
                        el: {
                            type: "bi.vertical",
                            ref: function() {
                                self.content = this;
                            },
                            rgap: 16,
                            items: [{
                                type: "dec.body.content.index"
                            }]
                        }
                    }, {
                        width: 290,
                        el: {
                            type: "bi.vertical",
                            ref: function() {
                                self.sidebar = this;
                            },
                            items: [{
                                type: "dec.body.sidebar"
                            }]
                        }
                    }]
                }]
            };
        }
    });
    BI.shortcut("dec.body", Body);
})();