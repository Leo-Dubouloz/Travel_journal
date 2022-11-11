import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import data from './data'
import './index.css'

export default function App(){
    const cards = data.map(item => {
        return (
            <Cards
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}