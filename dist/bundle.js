!(function() {
    if (!window.Dec) {
        window.Dec = {};
    }

    Dec.platformModel = Fix.define({
        selectedHash: "index",
        selectedTab: "all",
        topicList: [],
        topicPage: {},
        sidebarInfo: {},
        openedTabs: [{
            text: "全部",
            value: "all"
        }, {
            text: "精华",
            value: "good"
        }, {
            text: "分享",
            value: "share"
        }, {
            text: "问答",
            value: "ask"
        }, {
            text: "招聘",
            value: "job"
        }, {
            text: "客户端测试",
            value: "dev"
        }]
    });
})();!(function() {
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
})();!(function() {
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
})();!(function() {
    var Content = BI.inherit(BI.Widget, {
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
                            text: "关于"
                        }]
                    },
                    tgap: 10
                }, {
                    type: "bi.vertical",
                    cls: "linkpage-body",
                    items: [{
                        type: "bi.vertical",
                        vgap: 15,
                        hgap: 10,
                        items: [{
                            type: "bi.label",
                            text: "主页",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "CNode 的 SLA 保证是，一个9，即 90.000000%。",
                            textAlign: "left",
                            whiteSpace: "normal",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.horizontal",
                            whiteSpace: "normal",
                            cls: "linkpage-text",
                            items: [{
                                type: "bi.label",
                                text: "社区目前由 "
                            }, {
                                type: "bi.text_button",
                                cls: "linkpage-link",
                                text: "@alsotang"
                            }, {
                                type: "bi.label",
                                text: " 在维护，有问题请联系："
                            }, {
                                type: "bi.text_button",
                                cls: "linkpage-link",
                                text: "https://github.com/alsotang",
                                handler: function() {
                                    window.location.href = "https://github.com/alsotang";
                                }
                            }]
                        }, {
                            type: "bi.horizontal",
                            whiteSpace: "normal",
                            cls: "linkpage-text",
                            items: [{
                                type: "bi.label",
                                text: "请关注我们的官方微博："
                            }, {
                                type: "bi.text_button",
                                cls: "linkpage-link",
                                text: "http://weibo.com/cnodejs",
                                handler: function() {
                                    window.location.href = "http://weibo.com/cnodejs";
                                }
                            }]
                        }, {
                            tgap: 10,
                            type: "bi.label",
                            text: "移动客户端",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.horizontal",
                            whiteSpace: "normal",
                            cls: "linkpage-text",
                            items: [{
                                type: "bi.label",
                                text: "客户端由 "
                            }, {
                                type: "bi.text_button",
                                cls: "linkpage-link",
                                text: "@soliury"
                            }, {
                                type: "bi.label",
                                text: " 开发维护。"
                            }]
                        }, {
                            type: "bi.horizontal",
                            whiteSpace: "normal",
                            cls: "linkpage-text",
                            items: [{
                                type: "bi.label",
                                text: "源码地址： "
                            }, {
                                type: "bi.text_button",
                                cls: "linkpage-link",
                                text: "https://github.com/soliury/noder-react-native",
                                handler: function() {
                                    window.location.href = "https://github.com/soliury/noder-react-native";
                                }
                            }]
                        }, {
                            type: "bi.label",
                            text: "立即体验 CNode 客户端，直接扫描页面右侧二维码。",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.horizontal",
                            cls: "linkpage-text",
                            items: [{
                                type: "bi.label",
                                text: "另，安卓用户同时可选择："
                            }, {
                                type: "bi.text_button",
                                cls: "linkpage-link",
                                text: "https://github.com/TakWolf/CNode-Material-Design",
                                handler: function() {
                                    window.location.href = "https://github.com/TakWolf/CNode-Material-Design";
                                }
                            }, {
                                type: "bi.label",
                                text: " ，这是 Java 原生开发的安卓客户端。"
                            }]
                        }, {
                            tgap: 10,
                            type: "bi.label",
                            text: "友情链接",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.horizontal",
                            items: [{
                                type: "bi.image_button",
                                width: 250,
                                height: 60,
                                src: "https://dn-cnode.qbox.me/Ftmw28ed0I_rir7YYz3c_jVPkCGx",
                                handler: function() {
                                    window.location.href = "https://www.huoban.com/";
                                }
                            }, {
                                type: "bi.image_button",
                                width: 250,
                                height: 60,
                                src: "https://dn-cnode.qbox.me/FmU1Ik57z6wrl9JDTNdcYBTDetFq",
                                handler: function() {
                                    window.location.href = "http://100offer.com/";
                                }
                            }, {
                                type: "bi.image_button",
                                width: 250,
                                height: 60,
                                src: "https://dn-cnode.qbox.me/FkMR_SqpCp4Q0eDIaWrQlALiXdmP",
                                handler: function() {
                                    window.location.href = "https://www.teambition.com/";
                                }
                            }]
                        }, {
                            type: "bi.horizontal",
                            items: [{
                                type: "bi.image_button",
                                width: 250,
                                height: 60,
                                src: "https://dn-cnode.qbox.me/Fq2cV_14IFHwelZ-6jey42Z0-eOR",
                                handler: function() {
                                    window.location.href = "http://yunzhihui.com/";
                                }
                            }, {
                                type: "bi.image_button",
                                width: 250,
                                height: 60,
                                src: "https://dn-cnode.qbox.me/FijGJbij9GObh5AXw-Vyu5LGn08a",
                                handler: function() {
                                    window.location.href = "http://www.jiguang.cn/";
                                }
                            }, {
                                type: "bi.image_button",
                                width: 250,
                                height: 60,
                                src: "https://o4j806krb.qnssl.com/public/images/temp/sf.png",
                                handler: function() {
                                    window.location.href = "http://segmentfault.com/";
                                }
                            }]
                        }, {
                            type: "bi.horizontal",
                            items: [{
                                type: "bi.image_button",
                                width: 250,
                                height: 60,
                                src: "https://o4j806krb.qnssl.com/public/images/temp/ionichina.png",
                                handler: function() {
                                    window.location.href = "http://ionichina.com/";
                                }
                            }]
                        }, {
                            tgap: 10,
                            type: "bi.label",
                            text: "LOGO",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.horizontal",
                            cls: "linkpage-text",
                            items: [{
                                type: "bi.label",
                                text: "白底：    "
                            }, {
                                type: "bi.text_button",
                                text: "/public/images/cnodejs.svg",
                                cls: "logo-link",
                                handler: function() {
                                    window.location.href = "https://cnodejs.org/public/images/cnodejs.svg";
                                }
                            }]
                        }, {
                            type: "bi.horizontal",
                            cls: "linkpage-text",
                            items: [{
                                type: "bi.label",
                                text: "黑底：    "
                            }, {
                                type: "bi.text_button",
                                text: "/public/images/cnodejs_light.svg",
                                cls: "logo-link",
                                handler: function() {
                                    window.location.href = "https://cnodejs.org/public/images/cnodejs_light.svg";
                                }
                            }]
                        }]
                    }]
                }]
            };
        }
    });
    BI.shortcut("dec.body.content.about", Content);
})();/* jshint esversion: 6 */ !(function() {
    var Content = BI.inherit(BI.Widget, {
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
                            text: "API"
                        }]
                    },
                    tgap: 10
                }, {
                    type: "bi.vertical",
                    cls: "linkpage-body",
                    items: [{
                        type: "bi.vertical",
                        vgap: 15,
                        hgap: 10,
                        items: [{
                            type: "bi.label",
                            text: "以下 api 路径均以 https://cnodejs.org/api/v1 为前缀",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "主题",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "get /topics 主题首页",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 get 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  page Number 页数",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  tab String 主题分类。目前有 ask share job good",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  limit Number 每一页的主题数量",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "示例：/api/v1/topics",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "get /topic/:id 主题详情",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 get 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "示例：/api/v1/topic/5433d5e4e737cbe96dcef312",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "post /topics 新建主题",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 post 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String 用户的 accessToken",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  title String 标题",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  tab String 目前有 ask share job dev。开发新客户端的同学，请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  content String 主体内容",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "{success: true, topic_id: '5433d5e4e737cbe96dcef312'}",
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "post /topics/update 编辑主题",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 post 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String 用户的 accessToken",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  topic_id String 主题id",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  title String 标题",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  tab String 目前有 ask share job",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  content String 主体内容",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "{success: true, topic_id: '5433d5e4e737cbe96dcef312'}",
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "主题收藏",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "post /topic_collect/collect 收藏主题",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 post 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String 用户的 accessToken",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  topic_id String 主题id",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: '{"success ": true}',
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "post /topic_collect/de_collect 取消主题",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 post 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String 用户的 accessToken",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  topic_id String 主题id",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: '{success: true}',
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "评论",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "post /topic/:topic_id/replies 新建评论",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 post 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String 用户的 accessToken",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  content String 评论的主体",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  reply_id String 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "{success: true, reply_id: '5433d5e4e737cbe96dcef312'}",
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "post /reply/:reply_id/ups 为评论点赞",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 post 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: '{"success": true, "action": "down"}',
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "用户",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "get /user/:loginname 用户详情",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "示例：/api/v1/user/alsotang",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "post /accesstoken 验证 accessToken 的正确性",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 post 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String 用户的 accessToken",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "如果成功匹配上用户，返回成功信息。否则 403。",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "{success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url}",
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "消息通知",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "get /message/count 获取未读消息数",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 get 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "{ data: 3 }",
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "get /messages 获取已读和未读消息",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 get 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: '{\ndata: {\nhas_read_messages: [],\nhasnot_read_messages: [\n{\nid: "543fb7abae523bbc80412b26",\ntype: "at",\nhas_read: false,\nauthor: {\nloginname: "alsotang",\navatar_url: "https://avatars.githubusercontent.com/u/1147375?v=2"\n},\ntopic: {\nid: "542d6ecb9ecb3db94b2b3d0f",\ntitle: "adfadfadfasdf",\nlast_reply_at: "2014-10-18T07:47:22.563Z"\n},\nreply: {\nid: "543fb7abae523bbc80412b24",\ncontent: "[@alsotang](/user/alsotang) 哈哈",\nups: [ ],\ncreate_at: "2014-10-16T12:18:51.566Z"\n}\n},\n...\n]\n}\n}',
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "post /message/mark_all 标记全部已读",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "接收 post 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "{ success: true, marked_msgs: [ { id: '544ce385aeaeb5931556c6f9' } ] }",
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "post /message/mark_one/:msg_id 标记单个消息为已读",
                            textAlign: "left",
                            cls: "linkpage-title-small bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "请求示例：/message/mark_one/58ec7d39da8344a81eee0c14",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "接收 post 参数",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "  ·  accesstoken String",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: "返回值示例",
                            whiteSpace: "normal",
                            textAlign: "left",
                            cls: "linkpage-text"
                        }, {
                            type: "bi.label",
                            text: '{\nsuccess: true,\nmarked_msg_id:\n"58ec7d39da8344a81eee0c14"\n}',
                            textAlign: "left",
                            cls: "linkpage-code"
                        }, {
                            type: "bi.label",
                            text: "知识点",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用 /accesstoken 接口，登录后长期保存 accessToken。",
                            textAlign: "left",
                            whiteSpace: "normal",
                            cls: "linkpage-text"
                        }]
                    }]
                }]
            };
        }
    });
    BI.shortcut("dec.body.content.api", Content);
})();!(function() {
    var Content = BI.inherit(BI.Widget, {
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
                            text: "新手入门"
                        }]
                    },
                    tgap: 10
                }, {
                    type: "bi.vertical_adapt",
                    cls: "linkpage-body",
                    items: [{
                        type: "bi.vertical",
                        vgap: 15,
                        hgap: 10,
                        items: [{
                            type: "bi.label",
                            text: "Node.js入门",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "《快速搭建 Node.js 开发环境以及加速 npm》",
                            cls: "bookname",
                            textAlign: "left"
                        }, {
                            type: "bi.text_button",
                            text: "http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html",
                            cls: "linkpage-link",
                            textAlign: "left",
                            handler: function() {
                                window.location.href = "http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html";
                            }
                        }, {
                            type: "bi.label",
                            text: "《Node.js 包教不包会》",
                            textAlign: "left",
                            cls: "bookname"
                        }, {
                            type: "bi.text_button",
                            text: "https://github.com/alsotang/node-lessons",
                            textAlign: "left",
                            cls: "linkpage-link",
                            handler: function() {
                                window.location.href = "https://github.com/alsotang/node-lessons";
                            }
                        }, {
                            type: "bi.label",
                            text: "《ECMAScript 6入门》",
                            textAlign: "left",
                            cls: "bookname"
                        }, {
                            type: "bi.text_button",
                            text: "http://es6.ruanyifeng.com/",
                            cls: "linkpage-link",
                            textAlign: "left",
                            handler: function() {
                                window.location.href = "http://es6.ruanyifeng.com/";
                            }
                        }, {
                            type: "bi.label",
                            text: "《七天学会NodeJS》",
                            textAlign: "left",
                            cls: "bookname"
                        }, {
                            type: "bi.text_button",
                            text: "https://github.com/nqdeng/7-days-nodejs",
                            textAlign: "left",
                            cls: "linkpage-link",
                            handler: function() {
                                window.location.href = "https://github.com/nqdeng/7-days-nodejs";
                            }
                        }, {
                            type: "bi.label",
                            tgap: 10,
                            text: "Node.js资源",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "《前端资源教程》",
                            textAlign: "left",
                            cls: "bookname"
                        }, {
                            type: "bi.text_button",
                            text: "https://cnodejs.org/topic/56ef3edd532839c33a99d00e",
                            cls: "linkpage-link",
                            textAlign: "left",
                            handler: function() {
                                window.location.href = "https://cnodejs.org/topic/56ef3edd532839c33a99d00e";
                            }
                        }, {
                            type: "bi.label",
                            text: "《国内的 npm 镜像源》",
                            textAlign: "left",
                            cls: "bookname"
                        }, {
                            type: "bi.text_button",
                            text: "http://cnpmjs.org/",
                            cls: "linkpage-link",
                            textAlign: "left",
                            handler: function() {
                                window.location.href = "http://cnpmjs.org/";
                            }
                        }, {
                            type: "bi.label",
                            text: "《node weekly》",
                            textAlign: "left",
                            cls: "bookname"
                        }, {
                            type: "bi.text_button",
                            text: "http://nodeweekly.com/issues",
                            cls: "linkpage-link",
                            textAlign: "left",
                            handler: function() {
                                window.location.href = "http://nodeweekly.com/issues";
                            }
                        }, {
                            type: "bi.label",
                            text: "《node123-node.js中文资料导航》",
                            textAlign: "left",
                            cls: "bookname"
                        }, {
                            type: "bi.text_button",
                            text: "https://github.com/youyudehexie/node123",
                            cls: "linkpage-link",
                            textAlign: "left",
                            handler: function() {
                                window.location.href = "https://github.com/youyudehexie/node123";
                            }
                        }, {
                            type: "bi.label",
                            text: "《A curated list of delightful Node.js packages and resources》",
                            textAlign: "left",
                            cls: "bookname"
                        }, {
                            type: "bi.text_button",
                            text: "https://github.com/sindresorhus/awesome-nodejs",
                            cls: "linkpage-link",
                            textAlign: "left",
                            handler: function() {
                                window.location.href = "https://github.com/sindresorhus/awesome-nodejs";
                            }
                        }, {
                            type: "bi.label",
                            text: "《Node.js Books》",
                            textAlign: "left",
                            cls: "bookname"
                        }, {
                            type: "bi.text_button",
                            text: "https://github.com/pana/node-books",
                            cls: "linkpage-link",
                            textAlign: "left",
                            handler: function() {
                                window.location.href = "https://github.com/pana/node-books";
                            }
                        }, {
                            type: "bi.label",
                            tgap: 10,
                            text: "Node.js 名人",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.label",
                            text: "《名人堂》",
                            textAlign: "left",
                            cls: "bookname"
                        }, {
                            type: "bi.text_button",
                            text: "https://github.com/cnodejs/nodeclub/wiki/名人堂",
                            cls: "linkpage-link",
                            textAlign: "left",
                            handler: function() {
                                window.location.href = "https://github.com/cnodejs/nodeclub/wiki/名人堂";
                            }
                        }, {
                            type: "bi.label",
                            tgap: 10,
                            text: "Node.js 服务器",
                            textAlign: "left",
                            cls: "linkpage-title bi-border-bottom"
                        }, {
                            type: "bi.horizontal",
                            items: [{
                                type: "bi.label",
                                cls: "linkpage-text",
                                text: "新手搭建 Node.js 服务器，推荐使用无需备案的"
                            }, {
                                type: "bi.text_button",
                                text: "DigitalOcean(https://www.digitalocean.com/)",
                                cls: "linkpage-link",
                                handler: function() {
                                    window.location.href = "https://www.digitalocean.com/";
                                }
                            }]
                        }]
                    }]
                }]
            };
        }
    });
    BI.shortcut("dec.body.content.getstart", Content);
})();!(function() {
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
                            height: 50,
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
})();!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
            var self = this;
            self.platform.selectedTab = "all";
            $.ajax({
                url: "https://cnodejs.org/api/v1/topics",
                data: {
                    tab: "all",
                    page: 1
                },
                success: function(res) {
                    self.platform.topicList = res.data;
                }
            });
        },

        computed: {
            topicList: function() {
                return this.platform.topicList;
            },
            selectedTab: function() {
                return this.platform.selectedTab;
            }
        },

        actions: {
            getPage: function(value) {
                var self = this;
                self.platform.selectedHash = "getpage";
                $.ajax({
                    url: "https://cnodejs.org/api/v1/user/" + value.author.loginname,
                    success: function(res) {
                        res.data.recent_topics = res.data.recent_topics.filter(function(v) {
                            return v.id != value.id;
                        });
                        self.platform.sidebarInfo = res.data;
                    }
                });
                $.ajax({
                    url: "https://cnodejs.org/api/v1/topic/" + value.id,
                    success: function(res) {
                        self.platform.topicPage = res.data;
                    }
                });
            },

            getList: function(page) {
                var self = this;
                $.ajax({
                    url: "https://cnodejs.org/api/v1/topics",
                    data: {
                        tab: self.model.selectedTab,
                        page: page
                    },
                    success: function(res) {
                        self.platform.topicList = res.data;
                    }
                });
            }
        }
    });
    BI.model("dec.model.body.content.index", Store);
})();!(function() {
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
                            type: "bi.vertical_adapt",
                            lgap: 10,
                            tgap: 10,
                            items: [{
                                type: "bi.label",
                                width: 32,
                                height: 18,
                                text: value.top ? '置顶' : (value.good ? '精华' : (value.tab ? flag[value.tab] : flag["default"])),
                                cls: (value.top || value.good) ? 'special-bar' : 'normal-bar'
                            }, {
                                type: "bi.label",
                                text: value.title,
                                lgap: 5,
                                rgap: 10,
                                cls: "page-title",
                                textAlign: "left"
                            }]
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
})();!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
            var self = this;
        },

        computed: {
            topicPage: function() {
                return this.platform.topicPage;
            }
        }
    });
    BI.model("dec.model.body.content.page", Store);
})();!(function() {
    var Content = BI.inherit(BI.Widget, {
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
                        height: 240,
                        items: [{
                            type: "bi.vertical_adapt",
                            tgap: 35,
                            items: [{
                                type: "bi.label",
                                text: "用户名",
                                width: 160,
                                height: 25,
                                cls: "input-label",
                                textAlign: "right"
                            }, {
                                el: {
                                    type: "bi.text_editor",
                                    width: 280,
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
                                width: 160,
                                height: 25,
                                cls: "input-label",
                                textAlign: "right"
                            }, {
                                el: {
                                    type: "bi.text_editor",
                                    width: 280,
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
                                    width: 80,
                                    height: 34
                                },
                                lgap: 175
                            }, {
                                el: {
                                    type: "bi.button",
                                    text: "通过GitHub登录",
                                    cls: "github-login-button",
                                    width: 150,
                                    height: 34
                                },
                                lgap: 10
                            }, {
                                type: "bi.text_button",
                                text: "忘记密码了?",
                                cls: "forget-text",
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
})();!(function() {
    var SideBar = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.body.sidebar");
        },

        watch: {
            sidebarInfo: function(val) {
                if (Dec.platformModel.selectedHash == "getpage") {
                    this.content.populate(this._formatItems(val));
                }
            },
            selectedHash: function(val) {
                if (val != "getpage") {
                    if (val == "signin") {
                        this.content.populate(this._formatSignin());
                        return;
                    }
                    this.content.populate(this._formatDefault());
                }
            }
        },

        _formatSignin: function() {
            return [{
                type: "bi.vertical",
                cls: "side-bar",
                tgap: 10,
                items: [{
                    type: "bi.vertical",
                    cls: "title-bar",
                    items: [{
                        el: {
                            type: "bi.label",
                            text: "关于",
                            textAlign: "left"
                        },
                        lgap: 16
                    }]
                }, {
                    el: {
                        type: "bi.label",
                        textAlign: "left",
                        text: "CNode：Node.js专业中文社区"
                    },
                    lgap: 16
                }, {
                    el: {
                        type: "bi.label",
                        textAlign: "left",
                        text: "在这里你可以："
                    },
                    lgap: 16
                }, {
                    el: {
                        type: "bi.label",
                        textAlign: "left",
                        text: "  ·  向别人提出你遇到的问题"
                    },
                    lgap: 16
                }, {
                    el: {
                        type: "bi.label",
                        textAlign: "left",
                        text: "  ·  帮助遇到问题的人"
                    },
                    lgap: 16
                }, {
                    el: {
                        type: "bi.label",
                        textAlign: "left",
                        text: "  ·  分享自己的知识"
                    },
                    lgap: 16
                }, {
                    el: {
                        type: "bi.label",
                        textAlign: "left",
                        text: "  ·  和其它人一起进步"
                    },
                    lgap: 16,
                    bgap: 20
                }]
            }];
        },

        _formatDefault: function() {
            return [{
                type: "bi.vertical",
                height: 116,
                vgap: 10,
                cls: "side-bar",
                items: [{
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.label",
                        text: "CNode：Node.js专业中文社区"
                    }]
                }, {
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.label",
                        text: "您可以"
                    }, {
                        type: "bi.text_button",
                        text: "登录",
                        cls: "sign-bar",
                        handler: function() {}
                    }, {
                        type: "bi.label",
                        text: "或"
                    }, {
                        type: "bi.text_button",
                        text: "注册",
                        cls: "sign-bar",
                        handler: function() {
                            window.location.href = "https://github.com/login?client_id=0625d398dd9166a196e9&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D0625d398dd9166a196e9%26redirect_uri%3Dhttps%253A%252F%252Fcnodejs.org%252Fauth%252Fgithub%252Fcallback%26response_type%3Dcode";
                        }
                    }, {
                        type: "bi.label",
                        text: "也可以"
                    }]
                }, {
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.button",
                        height: 34,
                        text: "通过 GiHub 登录",
                        handler: function() {
                            window.location.href = "https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9";
                        }
                    }]
                }]
            }, {
                type: "bi.vertical",
                cls: "side-bar",
                vgap: 10,
                height: 310,
                items: [{
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.image_button",
                        src: "https://dn-cnode.qbox.me/FlajCCXkxZaOsuWp3k0iaiqfrJaS",
                        width: 270,
                    }]
                }, {
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.image_button",
                        src: "https://dn-cnode.qbox.me/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O",
                        width: 270,
                    }]
                }, {
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.image_button",
                        src: "https://dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_",
                        width: 270,
                    }]
                }, {
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.image_button",
                        src: "https://render.alipay.com/p/s/taobaonpm_click/image_25",
                        width: 270,
                    }]
                }]
            }, {
                type: "bi.vertical",
                vgap: 10,
                height: 220,
                cls: "side-bar",
                items: [{
                    type: "bi.horizontal",
                    hgap: 5,
                    cls: "title-bar",
                    items: [{
                        type: "bi.label",
                        text: "无人回复的话题"
                    }]
                }]
            }, {
                type: "bi.vertical",
                vgap: 10,
                height: 220,
                cls: "side-bar",
                items: [{
                    type: "bi.horizontal",
                    hgap: 5,
                    cls: "title-bar",
                    items: [{
                        type: "bi.label",
                        text: "积分榜"
                    }, {
                        type: "bi.text_button",
                        text: "TOP 100 >>"
                    }]
                }]
            }, {
                type: "bi.vertical",
                vgap: 10,
                height: 283,
                cls: "side-bar",
                items: [{
                    type: "bi.horizontal",
                    hgap: 5,
                    cls: "title-bar",
                    items: [{
                        type: "bi.label",
                        text: "友情社区"
                    }]
                }, {
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.image_button",
                        src: "https://o4j806krb.qnssl.com/public/images/ruby-china-20150529.png",
                        width: 270,
                        height: 50
                    }]
                }, {
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.image_button",
                        src: "https://o4j806krb.qnssl.com/public/images/golangtc-logo.png",
                        width: 270,
                        height: 50
                    }]
                }, {
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.image_button",
                        src: "https://o4j806krb.qnssl.com/public/images/phphub-logo.png",
                        width: 270,
                        height: 50
                    }]
                }, {
                    type: "bi.horizontal",
                    hgap: 5,
                    items: [{
                        type: "bi.image_button",
                        src: "https://dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK",
                        width: 270,
                        height: 50
                    }]
                }]
            }, {
                type: "bi.vertical",
                vgap: 10,
                height: 286,
                cls: "side-bar",
                items: [{
                    type: "bi.horizontal",
                    hgap: 5,
                    cls: "title-bar",
                    items: [{
                        type: "bi.label",
                        text: "客户端二维码"
                    }]
                }, {
                    type: "bi.horizontal_adapt",
                    items: [{
                        type: "bi.image_button",
                        src: "https://dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU",
                        width: 200,
                        height: 200
                    }]
                }, {
                    type: "bi.horizontal_adapt",
                    items: [{
                        type: "bi.text_button",
                        width: 100,
                        cls: "client-code-link",
                        text: "客户端源码地址",
                        handler: function() {
                            window.location.href = "https://github.com/soliury/noder-react-native";
                        }
                    }]
                }]
            }];
        },

        _formatItems: function(value) {
            return [{
                type: "bi.vertical",
                vgap: 10,
                height: 140,
                cls: "side-bar",
                items: [{
                    type: "bi.horizontal",
                    hgap: 5,
                    cls: "title-bar",
                    items: [{
                        type: "bi.label",
                        text: "作者"
                    }]
                }, {
                    type: "bi.vertical_adapt",
                    lgap: 5,
                    items: [{
                        type: "bi.image_button",
                        src: value.avatar_url,
                        height: 48,
                        width: 48
                    }, {
                        type: "bi.label",
                        lgap: 5,
                        cls: "text-color",
                        text: value.loginname
                    }]
                }, {
                    type: "bi.label",
                    lgap: 5,
                    textAlign: "left",
                    text: "积分: " + value.score
                }]
            }, {
                type: "bi.vertical",
                vgap: 5,
                cls: "side-bar",
                items: [{
                    type: "bi.horizontal",
                    hgap: 5,
                    cls: "title-bar",
                    items: [{
                        type: "bi.label",
                        text: "作者其他话题"
                    }]
                }, {
                    type: "bi.list_view",
                    items: this._formatOtherTopic(value.recent_topics)
                }]
            }, {
                type: "bi.vertical",
                vgap: 10,
                height: 220,
                cls: "side-bar",
                items: [{
                    type: "bi.horizontal",
                    hgap: 5,
                    cls: "title-bar",
                    items: [{
                        type: "bi.label",
                        text: "无人回复的话题"
                    }]
                }]
            }];
        },

        _formatOtherTopic: function(topics) {
            var self = this;
            if (topics != 0) {
                return BI.map(topics, function(index, topic) {
                    return {
                        type: "bi.text_button",
                        cls: "text-color",
                        vgap: 10,
                        lgap: 10,
                        rgap: 10,
                        text: topic.title,
                        textAlign: "left",
                        title: topic.title,
                        handler: function() {
                            self.store.getPage(topic);
                        }
                    };
                });
            }
            return [{
                type: "bi.label",
                cls: "text-color",
                tgap: 10,
                bgap: 10,
                lgap: 10,
                text: "无",
                textAlign: "left",
            }];
        },

        render: function() {
            var self = this;
            return {
                type: "bi.vertical",
                width: 290,
                ref: function() {
                    self.content = this;
                },
                items: self._formatDefault()
            };
        }
    });
    BI.shortcut("dec.body.sidebar", SideBar);
})();!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
            var self = this;
        },

        computed: {
            sidebarInfo: function() {
                return this.platform.sidebarInfo;
            },
            selectedHash: function() {
                return this.platform.selectedHash;
            },
        },

        actions: {
            getPage: function(value) {
                var self = this;
                self.platform.selectedHash = "getpage";
                $.ajax({
                    url: "https://cnodejs.org/api/v1/user/" + value.author.loginname,
                    success: function(res) {
                        res.data.recent_topics = res.data.recent_topics.filter(function(v) {
                            return v.id != value.id;
                        });
                        self.platform.sidebarInfo = res.data;
                    }
                });
                $.ajax({
                    url: "https://cnodejs.org/api/v1/topic/" + value.id,
                    success: function(res) {
                        self.platform.topicPage = res.data;
                    }
                });
            }
        }
    });
    BI.model("dec.model.body.sidebar", Store);
})();!(function() {
    var Tabs = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.body.tabs");
        },

        watch: {
            allTabs: function(items) {
                this.tabs.populate(this._formatItems(items));
            }
        },

        _formatItems: function(items) {
            var self = this;
            return BI.map(items, function(i, tab) {
                return BI.extend({
                    handler: function() {
                        self.store.selectTab(tab.value);
                    }
                }, tab);
            });
        },

        render: function() {
            var self = this;
            return {
                type: "bi.vertical",
                items: [{
                    type: "bi.button_group",
                    ref: function() {
                        self.tabs = this;
                    },
                    layouts: [{
                        type: "bi.horizontal_adapt",
                    }],
                    scrollx: true,
                    cls: "tab-bar",
                    items: this._formatItems(this.model.allTabs)
                }],
                tgap: 10
            };
        }
    });
    BI.shortcut("dec.body.tabs", Tabs);
})();!(function() {
    var Store = BI.inherit(Fix.Model, {
        _init: function() {
            this.platform = Dec.platformModel;
        },

        computed: {
            allTabs: function() {
                var model = this.platform;
                return BI.map(this.platform.openedTabs, function(i, tab) {
                    return {
                        type: "bi.text_button",
                        cls: "bi-list-item-select",
                        height: 24,
                        value: tab.value,
                        text: tab.text,
                        selected: model.selectedTab === tab.value
                    };
                });
            }
        },
        actions: {
            selectTab: function(tab) {
                var self = this;
                self.platform.selectedTab = tab;
                $.ajax({
                    url: "https://cnodejs.org/api/v1/topics",
                    data: {
                        tab: tab,
                        page: 1
                    },
                    success: function(res) {
                        self.platform.topicList = res.data;
                    }
                });
            }
        }
    });
    BI.model("dec.model.body.tabs", Store);
})();!(function() {
    var Footer = BI.inherit(BI.Widget, {
        render: function() {
            return {
                type: "bi.vertical",
                cls: "footer-bar",
                items: [{
                    el: {
                        type: "bi.vertical",
                        items: [{
                            el: {
                                type: "bi.horizontal",
                                items: [{
                                    type: "bi.text_button",
                                    text: "RSS",
                                    cls: "code-link",
                                    handler: function() {
                                        window.location.href = "https://cnodejs.org/rss";
                                    }
                                }, {
                                    type: "bi.label",
                                    text: "|"
                                }, {
                                    type: "bi.text_button",
                                    text: "源码地址",
                                    cls: "code-link",
                                    handler: function() {
                                        window.location.href = "https://cnodejs.org/rss";
                                    }
                                }]
                            },
                            hgap: 10,
                            tgap: 20,
                            bgap: 10
                        }, {
                            el: {
                                type: "bi.horizontal",
                                items: [{
                                    type: "bi.label",
                                    text: "CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。"
                                }]
                            },
                            hgap: 10
                        }, {
                            el: {
                                type: "bi.horizontal",
                                items: [{
                                    type: "bi.vertical_adapt",
                                    items: [{
                                        type: "bi.label",
                                        text: "服务器赞助商为"
                                    }, {
                                        type: "bi.image_button",
                                        src: "https://dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9",
                                        width: 92,
                                        height: 18,
                                        handler: function() {
                                            window.location.href = "https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo";
                                        }
                                    }, {
                                        type: "bi.label",
                                        text: "，存储赞助商为"
                                    }, {
                                        type: "bi.image_button",
                                        src: "https://dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX",
                                        width: 115,
                                        height: 44,
                                        handler: function() {
                                            window.location.href = "http://www.qiniu.com/?ref=cnode";
                                        }
                                    }, {
                                        type: "bi.label",
                                        text: "，由"
                                    }, {
                                        type: "bi.image_button",
                                        src: "https://dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD",
                                        width: 166,
                                        height: 54,
                                        handler: function() {
                                            window.location.href = "https://www.aliyun.com/product/nodejs?ref=cnode";
                                        }
                                    }, {
                                        type: "bi.label",
                                        text: "提供应用性能服务。"
                                    }]
                                }]
                            },
                            hgap: 10
                        }, {
                            el: {
                                type: "bi.horizontal",
                                items: [{
                                    type: "bi.label",
                                    text: "新手搭建 Node.js 服务器，推荐使用无需备案的"
                                }, {
                                    type: "bi.text_button",
                                    cls: "link-bar",
                                    text: "DigitalOcean(https://www.digitalocean.com/)",
                                    handler: function() {
                                        window.location.href = "https://www.digitalocean.com/?refcode=eba02656eeb3";
                                    }
                                }]
                            },
                            hgap: 10,
                            bgap: 20
                        }]
                    },
                    lgap: 25
                }]
            };
        }
    });
    BI.shortcut("dec.footer", Footer);
})();function formatReplyTime(val) {
    // console.log(val);
    var currentTime = new Date();
    // console.log(currentTime);
    var replyTime = new Date(val);
    // console.log(replyTime);
    temp = Math.round((currentTime - replyTime) / 1000);
    // console.log(temp);
    if (temp < 60) {
        return temp + '秒前';
    }
    var year = parseInt(temp / (365 * 24 * 3600));
    if (year > 0) {
        return year + '年前';
    }
    temp = temp % (365 * 24 * 3600);
    var month = parseInt(temp / (30 * 24 * 3600));
    if (month > 0) {
        return month + '月前';
    }
    temp = temp % (30 * 24 * 3600);
    var day = parseInt(temp / (24 * 3600));
    if (day > 0) {
        return day + '天前';
    }
    temp = temp % (24 * 3600);
    var hour = parseInt(temp / 3600);
    if (hour > 0) {
        return hour + '小时前';
    }
    temp = temp % 3600;
    var min = parseInt(temp / 60);
    return min + '分钟前';
}!(function() {
    BI.constant("dec.constant.header.hashes", [{
        text: "首页",
        value: "index"
    }, {
        text: "新手入门",
        value: "getstart"
    }, {
        text: "API",
        value: "api"
    }, {
        text: "关于",
        value: "about"
    }, {
        text: "注册",
        value: "signup"
    }, {
        text: "登录",
        value: "signin"
    }]);
})();!(function() {
    var Header = BI.inherit(BI.Widget, {
        _store: function() {
            return BI.Models.getModel("dec.model.header");
        },
        watch: {
            selectedHash: function(val) {
                this.hash.setValue(val);
            }
        },
        render: function() {
            var self = this;
            return {
                type: "bi.left_right_vertical_adapt",
                cls: "header-panel",
                lhgap: 10,
                rhgap: 30,
                items: {
                    left: [{
                        type: "bi.image_button",
                        src: "https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg",
                        width: 120,
                        height: 30,
                        lgap: 30,
                        handler: function() {
                            self.store.setHash("index");
                        }
                    }, {
                        type: "bi.search_editor",
                        cls: "search-bar",
                        width: 233,
                        height: 26
                    }],
                    right: [{
                        type: "bi.button_group",
                        cls: "hash-bar",
                        ref: function() {
                            self.hash = this;
                        },
                        listeners: [{
                            eventName: BI.ButtonGroup.EVENT_CHANGE,
                            action: function() {
                                self.store.setHash(this.getValue()[0]);
                            }
                        }],
                        layouts: [{
                            type: "bi.vertical_adapt",
                            hgap: 20
                        }],
                        items: this.model.hashes
                    }]
                }
            };
        }
    });
    BI.shortcut("dec.header", Header);
})();(function() {
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
                return BI.map(BI.Constants.getConstant("dec.constant.header.hashes"), function(i, item) {
                    return BI.extend({
                        type: "bi.text_button",
                    }, item);
                });
            }
        },
        actions: {
            setHash: function(hash) {
                this.platform.selectedHash = hash;
            }
        }
    });
    BI.model("dec.model.header", Store);
})();!(function() {
    var Widget = BI.inherit(BI.Widget, {
        render: function() {
            return {
                type: "bi.vertical",
                items: [{
                    type: "dec.header",
                    cls: "bi-border-bottom",
                    height: 50,
                    bgap: 20
                }, {
                    type: "dec.body",
                    bgap: 60,
                }, {
                    type: "dec.footer",
                    cls: "bi-border-top",
                    heigh: 190
                }]
            };
        }
    });
    BI.shortcut("dec.app", Widget);
})();!(function() {
    var AppRouter = BI.inherit(BI.Router, {
        routes: {
            "": "index"
        },
        index: function() {
            Dec.platformModel.selectedHash = "index";
            BI.createWidget({
                type: "dec.app",
                element: "#wrapper"
            });
        }
    });
    new AppRouter();
    BI.history.start();
})();

$(function() {
    $(".search-bar input").focus(function() {
        console.log("focus");
        $(".search-bar").css("background-color", "#fff");
    });
    $(".search-bar input").blur(function() {
        console.log("blur");
        $(".search-bar").css("background-color", "#888");
    });
});