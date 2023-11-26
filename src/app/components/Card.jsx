'use client'

import React from "react"

export default function Card({ name, image, }) {

    const [disabled, setEnable] = React.useState(true)

    const setModal = () => {
        setEnable(!disabled)
    }

    return (
        <div className="card">
                <h2>{name}</h2>
                <div className="card-image">
                    <img src={image} alt={name}/>
                </div>
                <div className="card-button">
                    <button className={disabled ? 'disabled': null} 
                        onClick={setModal}>
                        <span>Изучить</span>
                        <img src="/img/Arrow.svg" alt=""/>
                    </button>
                </div>
            </div>
    )
};