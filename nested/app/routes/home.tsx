import { Outlet, Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="one">One</Link> - <Link to="two">Two</Link> - <Link to="three">Three</Link>
      </nav>
      <Outlet />
      <Link to="/">Index</Link>
    </div>
  );
}
