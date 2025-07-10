"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      {...props}
      className={clsx(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {children}
    </Link>
  );
}