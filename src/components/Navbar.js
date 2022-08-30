import React from 'react'


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-md">
                <a className="navbar-brand" href="/">To-Do List</a>
                <a className="navbar-brand fs-6" href="/">Clear List</a>
            </div>
        </nav>
    )
}