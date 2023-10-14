"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog";
import Link from "next/link";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { X } from "lucide-react";
import githubLogo from "@/public/github.png";
import googleLogo from "@/public/google.png";
import { RegisterType, registerSchema } from "@/validations/authSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { SocialAuth } from "./SocialAuth";

export const SignUpModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = async (payload: RegisterType) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
      options: {
        data: {
          name: payload.name,
        },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message, { theme: "colored" });
    } else if (data.user) {
      await supabase.auth.signInWithPassword({
        email: payload.email,
        password: payload.password,
      });
      setOpen(false);
      toast.success("Logged In successfully", { theme: "colored" });
      router.refresh();
    }
  };

  return (
    <>
      <ToastContainer />
      <AlertDialog open={open}>
        <AlertDialogTrigger asChild>
          <li
            className="text-2xl hover:bg-red-600 cursor-pointer rounded-xl hover:font-bold"
            onClick={() => setOpen(true)}
          >
            SignUp
          </li>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle asChild>
              <div className="flex justify-between items-center">
                <span>SignUp</span>
                <X onClick={() => setOpen(false)} className="cursor-pointer" />
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h2 className="text-lg font-bold">Welcome to Random Bites</h2>
                  <div className="mt-5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      placeholder="Enter your name"
                      id="name"
                      {...register("name")}
                    />
                    <span className="text-red-400">{errors.name?.message}</span>
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      placeholder="Enter your email"
                      id="email"
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
                      {...register("password")}
                      type="password"
                    />
                    <span className="text-red-400">
                      {errors.password?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="cpassword">Confirm Password</Label>
                    <Input
                      placeholder="Confirm your password"
                      id="cpassword"
                      {...register("password_confirmation")}
                      type="password"
                    />
                    <span className="text-red-400">
                      {errors.password_confirmation?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <Button className="bg-[#FF1E00] w-full" disabled={loading}>
                      {loading ? "Proccesing" : "Continue"}
                    </Button>
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
