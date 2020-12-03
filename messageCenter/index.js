import React, {useState} from 'react';
import MsgLane from './msgLane';
import PluginsBar from './pluginsBar';
import Textarea from './textarea';
import style from './style.css';

// 简易聊天器
export default function () {
    const [msgData, updateMsgData] = useState(null);

    function sendMsgHandler(data) {
        if (!msgData)
            updateMsgData([data]);
        else
            updateMsgData([...msgData, data]);
    }
 
    return (
        <>
            <div className={style.main}>
                <MsgLane msgData={msgData} />
                <PluginsBar sendMsgHandler={sendMsgHandler} />
                <Textarea sendMsgHandler={sendMsgHandler} />
            </div>
            <ul style={{color: '#666'}}>
                <li>消息发送：输入消息后回车发送消息 </li>
                <li>图片发送：输入地址后回车发送，示例：http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071003.jpg</li>
                <li>通知发送：输入消息后回车发送消息</li>
                <li>招呼发送：点击即发送消息</li>
            </ul>
        </>
    )
}
