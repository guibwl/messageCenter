import React, {useState} from 'react';
import style from './style.css';


// 输入区域
export default function(props) {
    
    const [value, updateValue] = useState('');

    function updateValueHandler(e) {
        updateValue(e.currentTarget.value);
    }
    
    function onKeyUp(e) {
        const value = e.currentTarget.value.trimEnd();

        if (e.code === "Enter" && value) {
            // 发送消息
            props.sendMsgHandler({
                type: 'TEXT_MSG',
                options: {
                    text: value
                }
            });

            updateValue('');
        }
    }

    return (
        <textarea value={value} onKeyUp={onKeyUp} onChange={updateValueHandler} className=
            {style.textarea}>
        </textarea>
    )
}