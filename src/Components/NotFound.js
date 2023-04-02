import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="">
            <h2 className="not-found">Page Not Found</h2>
            <Link to={'/'} className="back-home">Back to homepage</Link>
        </div>
     );
}
 
export default NotFound;