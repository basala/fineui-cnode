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
})();