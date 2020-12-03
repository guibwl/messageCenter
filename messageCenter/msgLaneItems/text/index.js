import React from 'react';
import style from './style.css';

export default function (props) {
    const {options} = props;

    return (
        <span className={style.text}>{options.text}</span>
    )
}