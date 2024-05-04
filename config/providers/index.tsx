import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const AllProviders = ({ children }: Props) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default AllProviders;
