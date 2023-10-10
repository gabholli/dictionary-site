import React from "react"


function Navbar(props) {

    return (
        <div className="navbar">
            <h2 className="navbar-text">An English Dictionary</h2>
            <div className="search-container">
                <form onSubmit={props.handleSubmit}>
                    <input type="text"
                        placeholder="Search for a word"
                        // onChange={props.handleChange}    
                        name="search"
                    // value={props.search}
                    >
                    </input>
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Navbar