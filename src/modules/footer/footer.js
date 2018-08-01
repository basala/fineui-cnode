!(function() {
    var Footer = BI.inherit(BI.Widget, {
        render: function() {
            return {
                type: "bi.vertical",
                vgap: 20,
                height: 220,
                cls: "footer-bar",
                items: [{
                    type: "bi.horizontal",
                    hgap: 10,
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
                }, {
                    type: "bi.horizontal",
                    hgap: 10,
                    items: [{
                        type: "bi.label",
                        text: "CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。"
                    }]
                }, {
                    type: "bi.horizontal",
                    hgap: 10,
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
                }, {
                    type: "bi.horizontal",
                    hgap: 10,
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
                }]
            };
        }
    });
    BI.shortcut("dec.footer", Footer);
})();