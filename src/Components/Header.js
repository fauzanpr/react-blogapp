import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="header">
            <h1>The Blog Ninja</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">New Post</Link>
            </nav>
        </header>
     );
}
 
export default Header;