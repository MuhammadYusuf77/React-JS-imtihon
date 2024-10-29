import { Link } from "react-router-dom";

export default function Header() {
    return <ul>
        <li>
            <Link>Home</Link>
            <Link to={"/popular"}>Popular</Link>
            <Link to={"/toprated"}>Top Rated</Link>
            <Link to={"/upcoming"}>Upcoming</Link>
        </li>
    </ul>
}