import React from 'react';

import type { Metadata } from 'next';
import './globals.css';

import { poppins } from '@/app/fonts/poppins';

export const metadata: Metadata = {
  title: 'SupportSphere',
  description:
    'SupportSphere is a customer support platform designed to empower businesses with efficient, modern tools to manage customer relationships',
  icons: {
    icon: '/assets/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
