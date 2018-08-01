!(function() {
    Dec.platformModel = Fix.define({
        selectedHash: "index",
        // selectedHeader: "标签一",
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

    // BI.config("dec.constant.nav.items", function (items) {
    //     return items.concat([
    //         {
    //             id: 2,
    //             value: "第一级菜单",
    //             open: true
    //         },
    //         {
    //             id: 21,
    //             pId: 2,
    //             value: "一级列表项1"
    //         },
    //         {
    //             id: 22,
    //             pId: 2,
    //             value: "一级列表项2"
    //         },
    //         {
    //             id: 3,
    //             value: "第二级菜单",
    //             open: true
    //         },
    //         {
    //             id: 31,
    //             pId: 3,
    //             value: "二级列表项1"
    //         }
    //     ]);
    // });

    // BI.config("dec.constant.header.items", function (items) {
    //     return items.concat([
    //         {
    //             value: "自定义标签",
    //             action: "dec.action.header.custom"
    //         }
    //     ]);
    // });

    // //定义方法
    // BI.action("dec.action.header.custom", function (ob) {
    //     Dec.platformModel.selectedHeader = ob.value;
    // });

    // //埋点
    // BI.point("dec.model.header", "testPoint", function () {
    //     console.log("切面方法");
    // });
})();