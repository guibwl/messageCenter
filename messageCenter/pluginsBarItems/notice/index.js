import React, {useState} from 'react';
import style from './style.css';

export default function({
    sendMsgHandler,
    text
}) {

    const [showOpt, updateShowOpt] = useState('hidden');
    const [value, updateValue] = useState('');
    
    function onClick() {
        if (showOpt)
            updateShowOpt(null);
        else
            updateShowOpt('hidden');
    }

    function textOnChange(e) {
        updateValue(e.currentTarget.value);
    }

    function onKeyUp(e) {
        const value = e.currentTarget.value.trim();

        if (e.code === "Enter" && value) {
            // 发送消息
            sendMsgHandler({
                type: 'NOTICE_MSG',
                options: {
                    text: value
                }
            });

            updateValue('');
            updateShowOpt('hidden');
        }
    }

    return (
        <div className={style.notice}>
            <input
                type='text'
                className={style.input}
                placeholder='请输入通知内容'
                value={value}
                onChange={textOnChange}
                onKeyUp={onKeyUp}
                style={{visibility: showOpt}} />
            <button onClick={onClick}>{text}</button>
        </div>
    )
}