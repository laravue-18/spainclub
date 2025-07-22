"use server";

import { saltAndHashPassword } from "./password";
import { SignUpActionState, signUpSchema, SignInActionState, signInSchema } from "@/lib/zod";
import { PrismaClient } from "@/generated/prisma"; // Assuming you have a Prisma client setup
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'
import { signIn } from "@/auth";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
/**
 * Function to create a new user in the database.
 * @param formData - Form data containing user details.
 * @returns Promise<void>
 */
export async function createUser(
    _prev: SignUpActionState, 
    formData: FormData
): Promise<SignUpActionState>  {
    const form = Object.fromEntries(formData)

    const validationResult = signUpSchema.safeParse(form);

    if (!validationResult.success) {
        return {
            form,
            errors: validationResult.error.flatten().fieldErrors
        }
    }

    const existingUser = await prisma.user.findUnique({
        where: { email: String(form.email) }
    });

    if (existingUser) {
        return {
            form,
            errors: {
                email: ["Email is already in use"]
            }
        }
    }

    const hashedPassword = await saltAndHashPassword(String(form.password));
    await prisma.user.create({
        data: {
            email: String(form.email),
            password: hashedPassword
        }
    });

    const cookieStore = await cookies();
    cookieStore.set('flash', JSON.stringify({ 
        text: 'Account created successfully!', 
        type: 'success' 
    }));

    redirect("/sign-in");

}

export async function signInAction(
    _prev: SignInActionState, 
    formData: FormData
): Promise<SignInActionState> {
  const form = Object.fromEntries(formData);
  const validation = signInSchema.safeParse(form);

  if (!validation.success) {
    return {
      form,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validation.data;
  const user = await prisma.user.findUnique({
        where: { email }
    });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return {
      form,
      errors: { email: ["Invalid credentials"] },
    };
  }

  await signIn("credentials", {
    id: user.id,
    email: user.email,
    redirectTo: "/dashboard",
  });

  // Return a default state if signIn does not throw/redirect
  return {
    form,
    errors: {},
  };
}

export async function getUserFromDb(email: string) {
    return await prisma.user.findUnique({
        where: { email }
    });
}