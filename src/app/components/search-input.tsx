import React from 'react';
import { GoSearch } from 'react-icons/go';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SearchInput({
  onSearchClick,
  ...rest
}: SearchInputProps) {
  return (
    <div className="relative w-96">
      <input
        {...rest}
        type="text"
        className="text-sm flex-1 py-3 pl-3 pr-11 w-full h-11 rounded border border-gray-300 bg-gray-50"
      />
      <button
        type="button"
        className="absolute top-0	right-0 p-3"
        onClick={onSearchClick}
      >
        <GoSearch size={20} />
      </button>
    </div>
  );
}
