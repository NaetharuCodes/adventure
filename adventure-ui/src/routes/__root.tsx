import { ModeToggle } from "@/components/mode-toggle";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <div className="p-2 flex justify-between items-center gap-4">
      ARCAN
      <div className="p-2 flex justify-center items-center gap-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/game" className="[&.active]:font-bold">
          Game
        </Link>
        <Link to="/media" className="[&.active]:font-bold">
          Media
        </Link>
        <Link to="/settings" className="[&.active]:font-bold">
          Settings
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <ModeToggle />
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
