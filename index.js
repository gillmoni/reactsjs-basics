const h1 = document.createElement("h1")
h1.textContent = "Hello World"
h1.className = "header"
console.log(h1)

function Navbar() {
    return (
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    )
}


/**
Mini Challenge:
- Just add a small NavBar on top to right side, use Flexbox
- Change the image styling to happen in CSS insread of inline.
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
            <nav class="nav">
                <img src="./react-logo.png" className="nav-logo"></img>
                <Navbar />
            </nav>
        </header>
    )
}

//Use all those variable in render function
//And wrap in angular brackets
ReactDOM.render(
    <Page />
    , document.getElementById("root"))