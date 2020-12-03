import React from 'react';
import style from './style.css';

export default function (props) {
    const {options} = props;

    return (
        <p className={style.sayHi}>
            {options.text}
        </p>
    )
}