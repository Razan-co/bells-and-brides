import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

export default function Layout() {
  const location = useLocation();
  const [transitionClass, setTransitionClass] = useState("page");

  useEffect(() => {
    setTransitionClass("page page-exit"); // start exit animation
    const timeout = setTimeout(() => {
      setTransitionClass("page page-enter"); // then enter animation
    }, 50); // slight delay to trigger animation

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className={transitionClass}>
        <Outlet />
      </main>
    </>
  );
}
