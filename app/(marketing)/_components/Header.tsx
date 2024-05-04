import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <header className='w-full px-8 py-2 shadow-md flex justify-between items-center rounded-md '>
      <div>LingoDuo</div>
      <div>
        <ClerkLoading>
          <Loader className='animate-spin h-5 w-5' />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>

          <SignedOut>
            <SignInButton mode='modal' forceRedirectUrl={'/learn'}>
              <Button>Login</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
