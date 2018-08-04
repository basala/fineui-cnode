!(function() {
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
})();