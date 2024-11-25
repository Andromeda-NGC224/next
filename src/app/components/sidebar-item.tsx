import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export interface SidebarItemProps {
  current?: boolean;
  pathname: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function SidebarItem({
  current,
  pathname,
  children,
  icon,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={pathname}
        className={clsx(
          'flex items-center h-9 mx-1 gap-3.5',
          current &&
            'after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm',
        )}
      >
        {icon}
        <span className="font-medium text-zinc-50">{children}</span>
      </Link>
    </li>
  );
}
