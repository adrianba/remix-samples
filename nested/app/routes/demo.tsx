import { Outlet, Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Demo</h1>
      <nav>
        <Link to="first">First</Link> - <Link to="second">Second</Link>
      </nav>
      <Outlet />
      <Link to="/">Index</Link>
    </div>
  );
}
