import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePostHog } from "@posthog/react";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName,
      pendingClassName,
      to,
      ...props
    },
    ref
  ) => {
    const posthog = usePostHog();
    useEffect(() => {
      posthog.capture("nav_link_click", {
        to,
      });
    }, [to]);
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            // base styles
            "relative inline-flex items-center transition-colors",

            // underline animation
            "after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-full after:bg-current",
            "after:origin-right after:scale-x-0 after:transition-transform after:duration-300",
            "hover:after:origin-left hover:after:scale-x-100",

            // active state keeps underline visible
            isActive && "after:scale-x-100 after:origin-left",

            // consumer overrides
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
