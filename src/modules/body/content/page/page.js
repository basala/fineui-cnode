!(function() {
    var flag = {
        share: "分享",
        ask: "问答",
        job: "招聘",
        dev: "测试",
        default: "问答"
    };
    var Page = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.body.content.page");
        },

        watch: {
            topicPage: function(val) {
                this.test.populate(this._formatContent(val));
                $(".page-content-body").html(val.content);
            }
        },

        _formatContent: function(value) {
            var self = this;
            return [{
                type: "bi.vertical",
                items: [{
                    tgap: 10,
                    el: {
                        type: "bi.vertical",
                        cls: "page-content",
                        items: [{
                            el: {
                                type: "bi.htape",
                                height: 60,
                                items: [{
                                    width: 40,
                                    el: {
                                        type: "bi.vertical_adapt",
                                        items: [{
                                            type: "bi.label",
                                            text: value.top ? "置顶" : (value.good ? "精华" : (value.tab ? flag[value.tab] : flag["default"])),
                                            cls: (value.top || value.good) ? "special-bar" : "normal-bar",
                                            height: 18,
                                            width: 32
                                        }]
                                    },
                                    lgap: 10
                                }, {
                                    width: "fill",
                                    el: {
                                        type: "bi.label",
                                        text: value.title,
                                        height: 60,
                                        whiteSpace: "normal",
                                        cls: "page-title",
                                        textAlign: "left"
                                    },
                                    lgap: 5,
                                    rgap: 10
                                }]
                            },
                            lgap: 10,
                            tgap: 20
                        }, {
                            el: {
                                type: "bi.center_adapt",
                                cls: "page-info bi-border-bottom",
                                bgap: 5,
                                items: [{
                                    type: "bi.left",
                                    items: [{
                                        type: "bi.label",
                                        lgap: 5,
                                        text: "·发布于" + formatReplyTime(value.create_at)
                                    }, {
                                        type: "bi.label",
                                        lgap: 5,
                                        text: "·作者" + value.author.loginname
                                    }, {
                                        type: "bi.label",
                                        lgap: 5,
                                        text: "·" + value.visit_count + "次浏览"
                                    }, {
                                        type: "bi.label",
                                        lgap: 5,
                                        text: "·来自 " + flag[value.tab]
                                    }]
                                }, {
                                    type: "bi.right",
                                    items: [{
                                        type: "bi.button",
                                        cls: "collect-button",
                                        rgap: 10,
                                        text: "收藏",
                                        width: 52,
                                        height: 34
                                    }]
                                }]
                            },
                            tgap: 20,
                            lgap: 10,
                            rgap: 10
                        }, {
                            type: "bi.center_adapt",
                            cls: "page-content-body",
                            lgap: 20,
                            tgap: 20,
                            bgap: 20,
                            rgap: 20
                        }]
                    }
                }, {
                    tgap: 30,
                    el: {
                        type: "bi.vertical",
                        cls: "page-content",
                        items: [{
                            type: "bi.vertical",
                            cls: "bi-border-bottom bi-background reply-title",
                            items: [{
                                el: {
                                    type: "bi.label",
                                    text: value.reply_count + "条回复",
                                    textAlign: "left"
                                },
                                tgap: 15,
                                lgap: 15,
                                bgap: 10
                            }]
                        }, {
                            type: "bi.list_view",
                            items: self._formatReplyList(value.replies)
                        }]
                    }
                }]
            }];
        },

        _formatReplyList: function(replies) {
            var self = this;
            return BI.map(replies, function(index, reply) {
                return {
                    type: "bi.vertical",
                    vgap: 10,
                    lgap: 10,
                    rgap: 10,
                    cls: "bi-border-bottom",
                    items: [{
                        type: "bi.center_adapt",
                        items: [{
                            type: "bi.left",
                            items: [{
                                type: "bi.image_button",
                                height: 30,
                                width: 30,
                                src: reply.author.avatar_url
                            }, {
                                type: "bi.label",
                                lgap: 5,
                                text: reply.author.loginname
                            }, {
                                type: "bi.label",
                                lgap: 5,
                                cls: "reply-info",
                                text: index + 1 + "楼·" + formatReplyTime(reply.create_at)
                            }]
                        }, {
                            type: "bi.right",
                            items: [{
                                type: "bi.image_button",
                                src: "./src/modules/body/content/page/deliver.png"
                            }, {
                                type: "bi.label",
                                text: "  "
                            }, {
                                type: "bi.image_button",
                                src: "./src/modules/body/content/page/subscribe.png"
                            }]
                        }]
                    }, {
                        type: "bi.label",
                        lgap: 30,
                        whiteSpace: "normal",
                        textAlign: "left",
                        text: reply.content.replace(/<.*?>/g, '')
                    }]
                };
            });
        },

        render: function() {
            var self = this;
            return {
                type: "bi.vertical",
                ref: function() {
                    self.test = this;
                },
                items: []
            };
        }
    });
    BI.shortcut("dec.body.content.page", Page);
})();