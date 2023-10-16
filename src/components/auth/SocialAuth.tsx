import React from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/src/components/ui//use-toast";
import githubLogo from "@/public/github.png";
import googleLogo from "@/public/google.png";

export const SocialAuth = () => {
  const supabase = createClientComponentClient();
  const { toast } = useToast();
  const router = useRouter();

  const githubLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo:
          process.env.NODE_ENV === "production"
            ? "https://random-bites.vercel.app/auth/callback"
            : `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  const googleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
          process.env.NODE_ENV === "production"
            ? "https://random-bites.vercel.app/auth/callback"
            : `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged In !!",
      });
      router.refresh();
    }
  };
  return (
    <div>
      <Button variant="outline" className="w-full mt-5" onClick={googleLogin}>
        <Image
          src={googleLogo}
          alt="googlePhoto"
          height={25}
          width={25}
          className="mr-5"
        />
        Continue with Google
      </Button>
      <Button variant="outline" className="w-full mt-5" onClick={githubLogin}>
        <Image
          src={githubLogo}
          alt="githubPhoto"
          height={25}
          width={25}
          className="mr-5"
        />
        Continue with Github
      </Button>
    </div>
  );
};
