import React from 'react';
import Image from 'next/image';
import { ImExit } from 'react-icons/im';
import { FaBriefcase } from 'react-icons/fa';
import { HiSquares2X2 } from 'react-icons/hi2';
import SidebarItem from './sidebar-item';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul className="space-y-7">
          <SidebarItem
            pathname="/dashboard"
            icon={<HiSquares2X2 size={18} color="white" className="ml-5" />}
          >
            {' '}
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            icon={<FaBriefcase size={18} color="white" className="ml-5" />}
          >
            {' '}
            Companies
          </SidebarItem>
        </ul>
        <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
          <ImExit color="white" size={18} />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}