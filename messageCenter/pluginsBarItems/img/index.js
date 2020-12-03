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

        if (e.code === "Enter") {
            // 发送消息
            sendMsgHandler({
                type: 'IMG',
                options: {
                    src: value || 'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071003.jpg',
                    alt: value
                }
            });

            updateValue('');
            updateShowOpt('hidden');
        }
    }

    return (
        <div className={style.img}>
            <input
                type='text'
                className={style.input}
                placeholder='请输入图片http地址，为空则发送默认图片'
                value={value}
                onChange={textOnChange}
                onKeyUp={onKeyUp}
                style={{visibility: showOpt}} />
            <button onClick={onClick}>{text}</button>
        </div>
    )
}