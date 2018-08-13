!(function() {
    var flag = {
        share: "分享",
        ask: "问答",
        job: "招聘",
        dev: "测试",
        default: "问答"
    };
    var Index = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.body.content.index");
        },

        watch: {
            topicList: function(val) {
                this.topiclist.populate(this._formatItems(val));
                BI.defer(function() {
                    $('#wrapper').scrollTop(0);
                });
            },
            selectedTab: function() {
                this.pagelist.setValue(1);
            }
        },

        _formatItems: function(items) {
            var self = this;
            return BI.map(items, function(index, value) {
                return {
                    type: "bi.htape",
                    height: 50,
                    hgap: 5,
                    cls: "bi-border-bottom",
                    items: [{
                        width: 30,
                        el: {
                            type: "bi.vertical_adapt",
                            items: [{
                                type: "bi.image_button",
                                src: value.author.avatar_url,
                                title: value.author.loginname,
                                height: 30,
                                width: 30
                            }]
                        }
                    }, {
                        width: 70,
                        el: {
                            type: "bi.vertical_adapt",
                            items: [{
                                type: "bi.vertical_adapt",
                                height: 30,
                                items: [{
                                    type: "bi.label",
                                    title: "回复数",
                                    cls: "reply-num",
                                    text: value.reply_count
                                }, {
                                    type: "bi.label",
                                    text: "/"
                                }, {
                                    type: "bi.label",
                                    title: "点击数",
                                    cls: "click-num",
                                    text: value.visit_count
                                }]
                            }]
                        }
                    }, {
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
                        }
                    }, {
                        width: "fill",
                        el: {
                            type: "bi.text_button",
                            cls: "detail-list",
                            text: value.title,
                            title: value.title,
                            textAlign: "left",
                            handler: function() {
                                self.store.getPage(value);
                            },
                            height: 50
                        }
                    }, {
                        width: 56,
                        el: {
                            type: "bi.vertical_adapt",
                            items: [{
                                type: "bi.label",
                                width: 56,
                                textAlign: "right",
                                text: formatReplyTime(value.last_reply_at),
                                title: formatReplyTime(value.last_reply_at)
                            }]
                        }
                    }]
                };
            });
        },

        render: function() {
            var self = this;
            return {
                type: "bi.vertical",
                items: [{
                    type: "dec.body.tabs"
                }, {
                    type: "bi.list_view",
                    ref: function() {
                        self.topiclist = this;
                    },
                    items: [],
                    cls: "bi-border-bottom topic-bar"
                }, {
                    type: "bi.vertical",
                    cls: "page-bar",
                    items: [{
                        type: "bi.pager",
                        dynamicShow: false,
                        dynamicShowFirstLast: true,
                        height: 26,
                        pages: 100,
                        groups: 5,
                        curr: 1,
                        first: "首页>",
                        last: "<尾页",
                        jump: function(page) {
                            self.store.getList(page.curr);
                        },
                        tgap: 5,
                        bgap: 5,
                        ref: function() {
                            self.pagelist = this;
                        }
                    }]
                }]
            };
        }

    });

    BI.shortcut("dec.body.content.index", Index);
})();