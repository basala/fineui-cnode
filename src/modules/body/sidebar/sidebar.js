!(function() {
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
            othertopics = topics.slice(1);
            if (othertopics != 0) {
                return BI.map(othertopics, function(index, topic) {
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
                            self.store.getPage(topic.id);
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
            }]
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
})();