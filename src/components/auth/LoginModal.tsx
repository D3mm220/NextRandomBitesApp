"use client";
import React, { useContext, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginType, loginSchema } from "@/validations/authSchema";
import { Button } from "@/src/components/ui/button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import Link from "next/link";

import Image from "next/image";

import { SocialAuth } from "./SocialAuth";
import { AccountContext } from "@/src/contexts/AccountContext";

export const LoginModal = () => {
  const { openLogin, setOpenLogin } = useContext(AccountContext);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (payload: LoginType) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: payload.email,
      password: payload.password,
    });

    if (error) {
      toast.error(error.message, { theme: "colored" });
    } else if (data.user) {
      setOpenLogin(false);
      toast.success("you're logged In!", { theme: "colored" });
      router.refresh();
    }
  };

  return (
    <>
      <ToastContainer />
      <AlertDialog open={openLogin}>
        <AlertDialogTrigger asChild>
          <li
            className="text-2xl hover:bg-red-600 cursor-pointer rounded-xl hover:scale-110"
            onClick={() => setOpenLogin(true)}
          >
            Login
          </li>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle asChild>
              <div className="flex justify-between items-center">
                <span>Login</span>
                <X
                  onClick={() => setOpenLogin(false)}
                  className="cursor-pointer"
                />
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h2 className="text-lg font-bold">
                    Welcome Back to Random Bites
                  </h2>
                  <div className="mt-5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      placeholder="Enter your email"
                      id="email"
                      type="email"
                      {...register("email")}
                    />
                    <span className="text-red-400">
                      {errors.email?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      placeholder="Enter your password"
                      id="password"
                      type="password"
                      {...register("password")}
                    />
                    <span className="text-red-400">
                      {errors.password?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <Button className="bg-[#FF1E00] w-full">Continue</Button>
                  </div>
                  <div className="text-center my-2 text-xl">-- OR --</div>
                </form>
                <SocialAuth />
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
