# 思路

因为主要考察的是‘考察组件设计和可扩展性’；
所以我把聊天器设计成三个组件：

- `MsgLane` 消息流泳道，用来渲染各种消息
- `PluginsBar` 承载触发消息的各类按钮的 Bar
- `Textarea` 聊天文字输入区域

## MsgLane

`MsgLane` 通过消息流的数据动态渲染不同类型的消息，通过暴露的 `sendMsgHandler` 方法，更新消息流数据；
```js
// 调用该方法后，消息流数据中会新增一条数据
sendMsgHandler({
    type: 'TEXT_MSG',
    options: {
        text: value
    }
});
```

`MsgLaneItems` 是消息流的集合，通过消息流数据中的 `type` 可以匹配并渲染对应的消息组件。
```js
// messageCenter/msgLaneItems/index.js
{
    TEXT_MSG    : TextMsg,
    IMG         : Img,
    NOTICE_MSG  : Notice
}
```

消息类型可以自行定义并在 `MsgLaneItems` 中添加，并在 `sendMsgHandler` 发送消息时通过 `type` 进行匹配。其中的 `options` 可以自定义发送给组件的数据，组件内通过 `props.options` 获取；


## PluginsBar

`PluginsBar` 用来扩展各类附加功能的 Bar，组件设计成可配置，按钮元素相互解藕独立，方便扩展。

```js
// messageCenter/pluginsBarItems/config.js
[
    {
        text: '图片',
        render: ImgComponent
    },
    {
        text: '通知',
        render: NoticeComponent
    },
    {
        text: '招呼',
        onClick: () => sendMsgHandler({
            type: 'NOTICE_MSG',
            options: {
                text: '你向对方打了个招呼'
            }
        })
    }
]
```
`text` 是按钮的文案（当然进一步可以做成支持ICON）
`render` 自定按钮组件，组件的`props`包含`text`、`onClick`、`sendMsgHandler`，未定义则使用默认按钮
`onClick` 提供给默认按钮执行的点击时间回调

## Textarea

简单的输入组件，通过 `sendMsgHandler` 方法发送消息；
