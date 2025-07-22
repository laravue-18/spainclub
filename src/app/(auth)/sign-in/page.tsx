"use client";
import { useActionState } from "react";
import { signInAction } from "@/utils/db";
import { signIn } from "@/auth"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page =  () => {
  const [state, formAction, pending] = useActionState(signInAction, {});

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>

      {/* Email/Password Sign In */}
      <form
        className="space-y-4"
        action={formAction}
      >
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="email"
        />
        <p className="text-sm text-red-500">{state?.errors?.email?.[0]}</p>
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="current-password"
        />
        <p className="text-sm text-red-500">{state?.errors?.password?.[0]}</p>
        <Button className="w-full" type="submit" disabled={pending}>
          Sign In
        </Button>
      </form>

      <div className="text-center">
        <Button asChild variant="link">
          <Link href="/sign-up">Don&apos;t have an account? Sign up</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
