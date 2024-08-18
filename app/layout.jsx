import React from 'react';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import './globals.css';

// Define your layout component
export default function RootLayout({children}) {
  return (
    <html>
      <body>
    <ClerkProvider>
      <div>
        {/* Display sign-in button when the user is signed out */}
        <SignedOut>
          <SignInButton />
        </SignedOut>

        {/* Display user button when the user is signed in */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Render the rest of the application */}
        {children}
      </div>
    </ClerkProvider>
    </body>
    </html>
  )
}
