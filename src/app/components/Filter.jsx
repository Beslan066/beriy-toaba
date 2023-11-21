import React from "react";


const filterItems = [
    {
        id: 1,
        title: 'Астрономия'
    },
        
    {
        id: 2,
        title: 'Биология'
    },

    {
        id: 3,
        title: 'География'
    },

    {
        id: 3,
        title: 'Физика'
    },

    {
        id: 3,
        title: 'Химия'
    },

    {
        id: 3,
        title: 'История'
    }
]


export default function Filter() {
    return (
        <div className="filter">
                    <button><img src="img/icons/filter.svg" alt=""/><span>Фильтр</span></button>
                    <div className="filter-items">
                        <ul>
                            <li>Астрономия</li>
                            <li>Биология</li>
                            <li>География</li>
                            <li>Физика</li>
                            <li>Химия</li>
                            <li>История</li>
                        </ul>
                    </div>
                </div>
    )
}