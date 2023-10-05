"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  async function handleSignUp() {
    await supabase.auth.signUp({
      email: process.env.NEXT_PUBLIC_TEST_USER_EMAIL!,
      password: "aaaa",
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
  }

  async function handleSignIn() {
    await supabase.auth.signInWithPassword({
      email: process.env.NEXT_PUBLIC_TEST_USER_EMAIL!,
      password: "aaaa",
    });
    router.refresh();
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <div className="flex gap-2">
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Login;
