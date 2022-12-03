import { Outlet, Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Index</h1>
      <p>
        <Link to="home">Home</Link>
      </p>
      <p>
        <Link to="demo">Demo</Link>
      </p>
      <p>
        <Link to="nester">Nester</Link>
      </p>
      <Outlet />
    </div>
  );
}
