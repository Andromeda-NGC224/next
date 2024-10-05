import React from 'react';
import { RxAvatar } from 'react-icons/rx';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex items-center gap-5 py-6	px-10 border-b border-gray-300">
      <h1 className="flex-1 text-3xl font-semibold text-gray-900">
        {children}
      </h1>
      <div className="w-px self-stretch bg-gray-300" />
      <div className="flex gap-3">
        <RxAvatar size={44} />
        <div>
          <p className="text-base	font-semibold text-gray-900">Adam Smith</p>
          <p className="text-sm	font-light text-gray-900">adamsmith@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
