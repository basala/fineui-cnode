!(function() {
    var flag = {
        share: "分享",
        ask: "问答",
        default: "问答"
    };
    var Index = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.body.content.index");
        },
        getWidth: function() {
            return document.body.clientWidth;
        },

        watch: {
            topicList: function(val) {
                // console.log("the topicList is changing...");
                // console.log(val);
                this.topiclist.populate(this._formatItems(val));
                BI.defer(function() {
                    $('#wrapper').scrollTop(0);
                });
            },
            selectedTab: function() {
                // console.log("the selectedTab is changing...");
                this.pagelist.setValue(1);
            }
        },

        _formatItems: function(items) {
            var self = this;
            // return BI.map(items, function(i, tab) {
            //     return BI.extend({
            //         handler: function() {
            //             self.store.selectTab(tab.value);
            //         }
            //     }, tab);
            // });

            return BI.map(items, function(index, value) {
                return {
                    type: "bi.vertical_adapt",
                    height: 50,
                    hgap: 5,
                    cls: "bi-border-bottom",
                    items: [{
                        type: "bi.image_button",
                        src: value.author.avatar_url,
                        title: value.author.loginname,
                        height: 30,
                        width: 30
                    }, {
                        type: "bi.vertical_adapt",
                        height: 30,
                        width: 70,
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
                    }, {
                        type: "bi.label",
                        text: value.top ? "置顶" : (value.good ? "精华" : (value.tab ? flag[value.tab] : flag["default"])),
                        cls: (value.top || value.good) ? "special-bar" : "normal-bar"
                        // width: 32,
                        // height: 18
                    }, {
                        type: "bi.text_button",
                        width: self.getWidth() * 0.4539,
                        text: value.title,
                        title: value.title,
                        textAlign: "left",
                        handler: function() {
                            self.store.getPage(value);
                        }
                    }, {
                        type: "bi.vertical_adapt",
                        // width: 120,
                        lgap: self.getWidth() * 0.02196,
                        items: [
                            // {
                            //     type: "bi.image_button",
                            //     src: "",
                            //     width: 18,
                            //     lgap: 40,
                            // },
                            {
                                type: "bi.label",
                                width: 56,
                                textAlign: "right",
                                // lgap: 45,
                                text: formatReplyTime(value.last_reply_at),
                                title: formatReplyTime(value.last_reply_at)
                            }
                        ]
                    }]
                };
            });
        },

        render: function() {
            var self = this;
            return {
                type: "bi.vertical",
                vgap: 0,
                hgap: 0,
                items: [{
                    type: "dec.body.tabs",
                    height: 24
                }, {
                    type: "bi.list_view",
                    ref: function() {
                        self.topiclist = this;
                    },
                    items: [{}],
                    cls: "bi-border-bottom topic-bar"
                }, {
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
                    cls: "page-bar",
                    ref: function() {
                        self.pagelist = this;
                        // items: [{}]
                    }
                }]
            };
        }

    });

    // function formatReplyTime(val) {
    //     return val;
    // }

    BI.shortcut("dec.body.content.index", Index);
})();