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
                        width: self.getWidth() * 0.6369,
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
                            // textAlign: "left",
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
                            // textAlign: "left",
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
                            // textAlign: "left",
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
                            // textAlign: "left",
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
                            // textAlign: "left",
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
})();