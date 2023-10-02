import React from "react"


function Navbar(props) {

    return (
        <div className="navbar">
            <h3 className="navbar-text">My Dictionary Site</h3>
            <div className="search-container">
                <form onSubmit={props.handleSubmit}>
                    <input type="text"
                        placeholder="Search for a word"
                        onChange={props.handleChange}
                    >
                    </input>
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Navbar