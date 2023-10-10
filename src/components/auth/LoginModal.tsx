"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { X } from "lucide-react";
import githubLogo from "@/public/github.png";
import googleLogo from "@/public/google.png";

export const LoginModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <li
          className="text-2xl hover:bg-red-600 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Login
        </li>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex justify-between items-center">
              <span>Login</span>
              <X onClick={() => setOpen(false)} className="cursor-pointer" />
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form>
              <h2 className="text-lg font-bold">
                Welcome Back to Random Bites
              </h2>
              <div className="mt-5">
                <Label htmlFor="email">Email</Label>
                <Input placeholder="Enter your email" id="email" />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Label htmlFor="password">Password</Label>
                <Input placeholder="Enter your password" id="password" />
                <span className="text-red-400"></span>
              </div>
              <div className="mt-5">
                <Button className="bg-[#FF1E00] w-full">Continue</Button>
              </div>
              <div className="text-center my-2 text-xl">-- OR --</div>
              <Button variant="outline" className="w-full mt-5">
                <Image
                  src={googleLogo}
                  alt="googlePhoto"
                  height={25}
                  width={25}
                  className="mr-5"
                />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full mt-5">
                <Image
                  src={githubLogo}
                  alt="githubPhoto"
                  height={25}
                  width={25}
                  className="mr-5"
                />
                Continue with Github
              </Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
