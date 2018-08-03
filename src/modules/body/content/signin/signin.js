!(function() {
    var Content = BI.inherit(BI.Widget, {
        getWidth: function() {
            return document.body.clientWidth;
        },
        render: function() {
            var self = this;
            return {
                type: "bi.vertical",
                items: [{
                    el: {
                        type: "bi.vertical_adapt",
                        cls: "jump-bar bi-background bi-border-bottom",
                        height: 40,
                        items: [{
                            type: "bi.text_button",
                            lgap: 10,
                            text: "主页",
                            cls: "jump-text",
                            handler: function() {
                                Dec.platformModel.selectedHash = "index";
                            }
                        }, {
                            type: "bi.label",
                            cls: "normal-text",
                            lgap: 5,
                            text: "/"
                        }, {
                            type: "bi.label",
                            lgap: 5,
                            cls: "normal-text",
                            text: "登录"
                        }]
                    },
                    tgap: 12
                }, {
                    type: "bi.vertical",
                    cls: "linkpage-body",
                    height: 260,
                    items: [{
                        type: "bi.vertical",
                        width: self.getWidth() * 0.6515,
                        height: 240,
                        items: [{
                            type: "bi.vertical_adapt",
                            tgap: 35,
                            items: [{
                                type: "bi.label",
                                text: "用户名",
                                width: self.getWidth() * 0.117,
                                height: 25,
                                cls: "input-label",
                                textAlign: "right"
                            }, {
                                el: {
                                    type: "bi.text_editor",
                                    width: self.getWidth() * 0.208,
                                    height: 30
                                },
                                lgap: 15
                            }]
                        }, {
                            type: "bi.vertical_adapt",
                            tgap: 10,
                            items: [{
                                type: "bi.label",
                                text: "密码",
                                width: self.getWidth() * 0.117,
                                height: 25,
                                cls: "input-label",
                                textAlign: "right"
                            }, {
                                el: {
                                    type: "bi.text_editor",
                                    width: self.getWidth() * 0.208,
                                    height: 30
                                },
                                lgap: 15
                            }]
                        }, {
                            type: "bi.vertical_adapt",
                            tgap: 20,
                            items: [{
                                el: {
                                    type: "bi.button",
                                    text: "登录",
                                    cls: "login-button",
                                    width: self.getWidth() * 0.038,
                                    height: 34
                                },
                                lgap: 175
                            }, {
                                el: {
                                    type: "bi.button",
                                    text: "通过GitHub登录",
                                    cls: "github-login-button",
                                    width: self.getWidth() * 0.1098,
                                    height: 34
                                },
                                lgap: 10
                            }, {
                                type: "bi.text_button",
                                text: "忘记密码了?",
                                cls: "forget-text",
                                // width: 80,
                                height: 18,
                                lgap: 10
                            }]
                        }]
                    }]
                }]
            };
        }
    });
    BI.shortcut("dec.body.content.signin", Content);
})();