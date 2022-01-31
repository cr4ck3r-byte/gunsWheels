import React from 'react'
import { Link } from 'react-router-dom'


export default function BtnLink({text="btn", color, to="/"}) {
    return (
        <Link to={to} className={color} >{text}</Link>
    )
}
