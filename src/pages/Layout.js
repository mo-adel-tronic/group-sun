import { Outlet, NavLink } from "react-router-dom";

/*
Layout Contains:
    1. nav => links for pages
    2. outlet => content of each page
*/
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink><br />
            <a href="/contact">contact by anchor</a>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;