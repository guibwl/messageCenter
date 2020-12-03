import React, {useEffect, useRef} from 'react';
import msgLaneItems from './msgLaneItems';
import style from './style.css';


// 消息流泳道
export default function(props) {
    const contentDom = useRef(null);

    // 首次渲染后，滚动到底部
    useEffect(() => {
        const dom = contentDom.current;
        dom.scrollTop = dom.scrollHeight - 350;
    }, [])
    // 每次发送消息后，滚动到底部
    useEffect(() => {
        const dom = contentDom.current;
        if (props.msgData && dom)
            dom.scrollTop = dom.scrollHeight - 350;
    }, [props.msgData])

    return (
        <div className={style.lane} ref={contentDom}>
            {
                props.msgData && props.msgData.map((el, i) => {
                    const MsgLaneItems = msgLaneItems[el.type];

                    return (
                        <div key={i} className={style.laneItem}>
                            <MsgLaneItems options={el.options}/>
                        </div>
                    )
                })
            }
        </div>
    )
}