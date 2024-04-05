import React from 'react'
import styles from './select.module.css'
function Select({ text, name, options, handlerOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option value="">selecione uma sigla</option>
                {options.map((opt) => (
                    <option key={opt.id}>{opt.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select