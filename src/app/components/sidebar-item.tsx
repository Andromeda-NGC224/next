import React from 'react';

export interface SidebarItemProps {
  pathname: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function SidebarItem({
  pathname,
  children,
  icon,
}: SidebarItemProps) {
  return (
    <li>
      <a href={pathname} className="flex items-center h-9 mx-1 gap-3.5">
        {icon}
        <span className="font-medium text-zinc-50">{children}</span>
      </a>
    </li>
  );
}
