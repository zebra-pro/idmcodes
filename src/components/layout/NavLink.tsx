import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export default function NavLink({ href, children, mobile }: NavLinkProps) {
  return (
    <Link
      to={href}
      className={`
        ${mobile ? 'block px-4 py-2' : 'inline-block'}
        text-gray-600 hover:text-blue-600 transition-colors
        font-medium
      `}
    >
      {children}
    </Link>
  );
}