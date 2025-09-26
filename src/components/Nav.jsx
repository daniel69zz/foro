import React from "react";

function Nav(){
    return (
        <nav className="navbar">
            <h2>Threadify</h2>
            <div className="navbarRight">
                <button onClick={() => {
                    alert("Usuario deslogueado!!");
                }}>Sign out</button>
            </div>
        </nav>
    );
}

export default Nav;