import React from 'react';
import style from './style.css';
import pluginBarConfig from './pluginsBarItems/config';


// 扩展按钮的 Bar
export default function(props) {

    const pluginBarPlugins = pluginBarConfig(props.sendMsgHandler);

    return (
        <div className={style.pluginBar}>
            {
                pluginBarPlugins.map((el, i) => {
                    if (el.render) {
                        const ButtonComponent = el.render;

                        return <ButtonComponent
                                    key={i}
                                    text={el.text}
                                    onClick={el.onClick}
                                    sendMsgHandler={props.sendMsgHandler} />
                    } else
                      return <button onClick={el.onClick} key={i}>{el.text}</button>
                })
            }
        </div>
    )
}
