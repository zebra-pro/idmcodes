import React from 'react';

interface NavButtonProps {
  variant: 'primary' | 'ghost';
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export default function NavButton({ variant, href, children, mobile }: NavButtonProps) {
  const baseStyles = 'font-medium transition-colors text-center';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    ghost: 'text-gray-600 hover:text-blue-600',
  };
  const mobileStyles = mobile ? 'w-full px-4 py-2' : 'px-4 py-2 rounded-lg';

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${mobileStyles}`}
    >
      {children}
    </a>
  );
}