const h1 = document.createElement("h1")
h1.textContent = "Hello World"
h1.className = "header"
console.log(h1)

//Simple JSX syntax
const element_1 = <h1 className="header">This is JSX, syntax mix and passing via variable</h1>

//Declare multiple but wrap in parenthesis
const element_2 = (
                    <h1 className="header">Hello, React! from index.js
                        <div id="ul-list">
                            <h6>
                                <ul>
                                    <li>First element</li>
                                    <li>Second element</li>
                                    <li>Third element</li>
                                </ul>
                            </h6>
                            <div><MainComponent/></div>
                            <div><Navbar /></div>
                        </div>
                    </h1> 
                    )

//passing variable
let element_4 = "New Stuff"

//passing object
let element_5 = element_1 + element_2

console.log(`let me show you the value ${element_5}`)

//Use all those variable in render function
ReactDOM.render(element_2
, document.getElementById("root"))


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

 
        </nav>
    )
}


function MainComponent() {
    return (
        <h5 className="custom-element" id="custom-element">
        <p>Just adding one custom element, nothing else.</p>
        </h5>
    )
}