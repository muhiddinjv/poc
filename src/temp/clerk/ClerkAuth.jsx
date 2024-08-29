import { SignedIn, SignedOut, SignInButton, UserButton, SignOutButton } from '@clerk/clerk-react';

export function ClerkAuth() {
  return (
    <header className="w-full flex justify-end p-4">
      <SignedOut>
        <SignInButton>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-md shadow-md">Sign in with Google</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
        {/* SignOutButton can be used directly or as a custom button */}
        <SignOutButton>
          <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600">Sign Out</button>
        </SignOutButton>
      </SignedIn>
    </header>
  );
}
