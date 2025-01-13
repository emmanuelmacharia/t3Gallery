"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';

import React from 'react'
import { UploadButton } from '~/utils/uploadThing'


export function TopNav() {

  const router = useRouter();

    return(
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <div className="">Gallery</div>
        <div className="">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton endpoint="imageUploader"  onClientUploadComplete={() => router.refresh()}/>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    )
  }