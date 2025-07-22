"use client";
import { useActionState } from "react";
import { createUser } from "@/utils/db";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const page = () => {
    const [state, formAction, pending] = useActionState(createUser, {});

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

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
            defaultValue={state?.form?.email}
        />
        <p className="text-sm text-red-500">{state?.errors?.email?.[0]}</p>
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="new-password"
            defaultValue={state?.form?.password}
        />
        <p className="text-sm text-red-500">{state?.errors?.password?.[0]}</p>
        <Input
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          required
          autoComplete="new-password"
        />
        <p className="text-sm text-red-500">{state?.errors?.confirmPassword?.[0]}</p>
        <Button disabled={pending} className="w-full" type="submit">
          Sign Up
        </Button>
      </form>

      <div className="text-center">
        <Button asChild variant="link">
          <Link href="/sign-in">Already have an account? Sign in</Link>
        </Button>
      </div>
    </div>
  )
}

export default page