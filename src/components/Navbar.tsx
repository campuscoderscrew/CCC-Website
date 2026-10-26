import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "@assets/logo.png";

type NavItem = {
  label: string;
  to: string;
  /** Sub-pages shown in a hover dropdown (desktop) or indented (mobile). */
  children?: { label: string; to: string }[];
};

const navLinks: NavItem[] = [
  { label: "Home", to: "/home" },
  { label: "Projects", to: "/projects" },
  { label: "Requests", to: "/requests" },
  { label: "Apply", to: "/apply" },
  {
    label: "Members",
    to: "/members/resources",
    children: [
      { label: "Org Chart", to: "/members/org-chart" },
      { label: "Resources", to: "/members/resources" },
    ],
  },
  { label: "Meetings", to: "/meetings" },
  // { label: "Crew", to: "/crew" },
];

/** Routes that paint their own dark background, so the navbar inverts to white. */
const DARK_ROUTES = ["/members", "/members/org-chart", "/members/resources"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const path = pathname.toLowerCase().replace(/\/+$/, "") || "/";
  const onDark = DARK_ROUTES.includes(path);

  /** A parent with sub-pages stays underlined on any of them. */
  const isParentActive = (item: NavItem) =>
    !!item.children?.some((c) => path === c.to);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle once we've scrolled past a small threshold
      setScrolled(window.scrollY > 10);
    };

    // Run once on mount in case the page loads already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "font-bold no-underline px-4 py-4 transition-colors " +
    (onDark
      ? "text-white hover:bg-white/15"
      : "text-[hsl(204,98%,15%)] hover:bg-[hsl(195,80%,90%)]");

  // On a dark page the translucent white scroll bar would swallow white text.
  const barSolid = scrolled && !onDark;

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkClass} ${isActive ? "underline underline-offset-4" : ""}`;

  const dropdownClass = onDark
    ? "bg-[hsla(204,98%,15%,0.95)] border-white/20"
    : "bg-white/95 border-[hsl(195,80%,90%)]";

  const subLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block whitespace-nowrap px-5 py-2.5 text-sm font-bold no-underline transition-colors ${
      onDark
        ? "text-white hover:bg-white/15"
        : "text-[hsl(204,98%,15%)] hover:bg-[hsl(195,80%,90%)]"
    } ${isActive ? "underline underline-offset-4" : ""}`;

  return (
    <div>
      {/* Main bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 min-[800px]:px-8 transition-colors duration-300"
        style={{
          backgroundColor: barSolid ? "hsla(0, 0%, 100%, 0.85)" : "transparent",
          backdropFilter: barSolid ? "blur(8px)" : "none",
          borderBottom: barSolid
            ? "hsl(195, 80%, 90%) solid 1px"
            : "1px solid transparent",
        }}
      >
        {/* Logo + name */}
        <Link
          to="/"
          className={`flex items-center gap-1 font-bold no-underline ${
            onDark ? "text-white" : "text-[hsl(204,98%,15%)]"
          }`}
        >
          <span className="relative inline-flex items-center justify-center">
            <span
              className="absolute inset-0 m-auto h-10 w-10 rounded-full"
              style={{
                backgroundColor: "hsl(204, 91%, 25%)",
                transform: "translateX(-3px)",
              }}
            />
            <img
              src={logo}
              alt="Campus Coders Crew Logo"
              className="relative h-8 w-auto"
            />
          </span>
          CCC
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`min-[800px]:hidden -m-2 p-2 bg-transparent border-none cursor-pointer ${
            onDark ? "text-white" : "text-[hsl(204,98%,15%)]"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              style={{
                transition: "transform 0.5s ease",
                transform: "rotate(360deg)",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M6 18L18 6m0 12L6 6"
              />
            </svg>
          ) : (
            <svg
              style={{ transition: "transform 0.5s ease" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 hidden min-[800px]:flex flex-row">
        {navLinks.map((item) =>
          item.children ? (
            <div key={item.label} className="group relative flex">
              <NavLink
                to={item.to}
                end
                className={() =>
                  `${activeLinkClass({ isActive: isParentActive(item) })} inline-flex items-center gap-1`
                }
                aria-haspopup="true"
              >
                {item.label}
                <svg
                  aria-hidden
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                >
                  <path
                    d="M1.5 3.5 5 7l3.5-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
              {/* Sits flush under the link so the hover isn't lost crossing a gap. */}
              <div
                className="invisible absolute left-1/2 top-full min-w-full -translate-x-1/2 -translate-y-1 opacity-0
                  transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
                  group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
              >
                <div
                  className={`overflow-hidden rounded-b-lg border border-t-0 py-1 shadow-lg backdrop-blur-md ${dropdownClass}`}
                >
                  {item.children.map((c) => (
                    <NavLink key={c.to} to={c.to} end className={subLinkClass}>
                      {c.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} className={activeLinkClass}>
              {item.label}
            </NavLink>
          )
        )}
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 z-50 flex flex-col min-[800px]:hidden py-2"
          style={{
            top: "3.5rem",
            backgroundColor: onDark
              ? "hsla(204, 98%, 15%, 0.9)"
              : "hsla(190, 85%, 80%, 0.7)",
            backdropFilter: "blur(8px)",
            borderTop: onDark
              ? "hsla(0, 0%, 100%, 0.25) solid 1px"
              : "hsl(190, 85%, 80%) solid 1px",
            borderBottom: onDark
              ? "hsla(0, 0%, 100%, 0.25) solid 1px"
              : "hsl(190, 85%, 80%) solid 1px",
          }}
        >
          {navLinks.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.to}
                end
                className={(state) =>
                  `${activeLinkClass(
                    item.children ? { isActive: isParentActive(item) } : state
                  )} block px-6 py-3`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
              {item.children?.map((c) => (
                <NavLink
                  key={c.to}
                  to={c.to}
                  end
                  className={(state) =>
                    `${activeLinkClass(state)} block py-2 pl-10 pr-6 text-sm`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {c.label}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
