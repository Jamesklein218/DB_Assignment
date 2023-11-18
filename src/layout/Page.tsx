import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

type PageProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Page({ children }: PageProps) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/">Fixtures</NavLink>
          </li>
          <li>
            <NavLink to="/awards">Awards</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
