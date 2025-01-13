import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'


export function TopNav() {
    return(
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <div className="">Gallery</div>
        <div className="">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    )
  }