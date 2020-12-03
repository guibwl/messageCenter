import React from 'react';
import style from './style.css';

export default function (props) {
    const {options} = props;

    return (
        <img alt={options.alt} className={style.img} src={options.src} />
    )
}