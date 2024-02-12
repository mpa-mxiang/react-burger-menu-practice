import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
    return(
        <header>
            <h1>Logo</h1>
            <nav>
                <a href="/#">About</a>
                <a href="/#">Features</a>
                <a href="/#">FAQs</a>
                <a href="/#">Testimonials</a>
                <button>
                    <FaTimes />
                </button>
            </nav>
            <button>
                    <FaBars />
                </button>
        </header>
    );
}

export default Navbar;