import React from 'react'
import { NavLink } from 'react-router-dom'

export const HomeScreen = () => {
    return (
        <div>
            <h1>Home Screen</h1>
            <form>
                <input type="text" />
            </form>
            <NavLink to="/auth">Login Screen</NavLink>
        </div>
    )
}
