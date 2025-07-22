import { object, string } from "zod"
 
export const signInSchema = object({
  email: string({ 
  error: (issue) => issue.input === undefined 
    ? "This field is required" 
    : "Not a string" 
})
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ 
  error: (issue) => issue.input === undefined 
    ? "This field is required" 
    : "Not a string" 
})
    .min(1, "Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),
})

export type SignInActionState = {
  form?: {
    email?: string;
    password?: string;
  }
  errors?: {
    email?: string[];
    password?: string[];
  }
}

export const signUpSchema = signInSchema.extend({
  confirmPassword: string({ 
    error: (issue) => issue.input === undefined 
      ? "This field is required" 
      : "Not a string"
  })
    .min(1, "Please confirm your password"),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
)

export type SignUpActionState = {
  form?: {
    email?: string;
    password?: string;
    confirmPassword?: string;
  }
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  }
}

