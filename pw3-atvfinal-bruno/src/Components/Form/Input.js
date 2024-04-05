import React from 'react'
import styles from './input.module.css'
function Input({ type, text, name, placeholder, handlerOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handlerOnChange}
                value={value}
            />
        </div>
    )
}

export default Input