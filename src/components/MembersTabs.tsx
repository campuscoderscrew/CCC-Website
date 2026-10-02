import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Org Chart", to: "/members" },
  { label: "Resources", to: "/members/resources" },
];

/** Sub-navigation shared by the Members pages (dark background). */
export default function MembersTabs({ className = "" }: { className?: string }) {
  return (
    <nav
      aria-label="Members sections"
      className={`inline-flex gap-1 rounded-xl bg-white/10 p-1 ${className}`}
    >
      {tabs.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            `rounded-lg px-4 py-1.5 text-sm font-bold no-underline transition-colors duration-200 ${
              isActive
                ? "bg-white text-[#193463]"
                : "text-white/80 hover:bg-white/15 hover:text-white"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
