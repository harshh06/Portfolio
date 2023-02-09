import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between p-10  border border-black">
            <h1>
                <Link to="/">Harsh Soni</Link>
            </h1>
            <ul className="flex">
                <li className="px-5">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-5">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="px-5">
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
