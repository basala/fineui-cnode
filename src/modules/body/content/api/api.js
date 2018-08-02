/* jshint esversion: 6 */
!(function() {
    var Content = BI.inherit(BI.Widget, {
        render: function() {
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
                        width: 870,
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
                            text: `
{
  data: {
    has_read_messages: [],
    hasnot_read_messages: [
      {
        id: "543fb7abae523bbc80412b26",
        type: "at",
        has_read: false,
        author: {
          loginname: "alsotang",
          avatar_url: "https://avatars.githubusercontent.com/u/1147375?v=2"
        },
        topic: {
          id: "542d6ecb9ecb3db94b2b3d0f",
          title: "adfadfadfasdf",
          last_reply_at: "2014-10-18T07:47:22.563Z"
        },
        reply: {
          id: "543fb7abae523bbc80412b24",
          content: "[@alsotang](/user/alsotang) 哈哈",
          ups: [ ],
          create_at: "2014-10-16T12:18:51.566Z"
          }
        },
    ...
    ]
  }
}`,
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
                            text: `{ success: true,
                                marked_msgs: [ { id: '544ce385aeaeb5931556c6f9' } ] }`,
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
                            text: `{
  success: true,
  marked_msg_id: "58ec7d39da8344a81eee0c14"
}`,
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
})();