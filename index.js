const h1 = document.createElement("h1")
h1.textContent = "Hello World"
h1.className = "header"
console.log(h1)

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
        <h6 className="custom-element" id="custom-element">
            <p>Just adding one custom element, nothing else.</p>
        </h6>
    )
}

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
Do the same for Footer and for Points
*/

//This is getting custom component to work in React
function Page() {
    return (
        <div>
            <Header />
            <Points />
            <Footer />
        </div>
    )
}

function Points () {
    return (
        <div>
            <h1>Reasons to learn react.</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small><small>
                © 2023 YaYa development. All rights reserved.
            </small></small>
        </footer>
    )
}

function Header() {
    return(
        <header>
            <nav>
                <img src="./react-logo.png" width="40px"></img>
            </nav>
        </header>
    )
}

//Use all those variable in render function
//And wrap in angular brackets
ReactDOM.render(
    <Page />
    , document.getElementById("root"))