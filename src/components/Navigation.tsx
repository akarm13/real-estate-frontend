import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="bg-red-100 flex justify-between container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};
