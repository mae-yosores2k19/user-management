import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Define the schema
const passwordSchema = z
  .string()
  .min(8, { message: "Minimum 8 characters" })
  .refine((password) => /[A-Z]/.test(password), {
    message: "At least one uppercase letter",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "At least one lowercase letter",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "At least one number",
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "At least one special character",
  });

export const registerParamsSchema = z
  .object({
    email: z.string().email(),
    password: passwordSchema,
    firstName: z.string(),
    lastName: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type RegisterParamsSchema = z.infer<typeof registerParamsSchema>;

export default function useRegisterForm() {
  const router = useRouter();

  // Initialize the form
  const form = useForm<z.infer<typeof registerParamsSchema>>({
    resolver: zodResolver(registerParamsSchema),
    mode: "onSubmit",
  });

  // Placeholder register function that simulates success
  const register = async (params: z.infer<typeof registerParamsSchema>) => {
    console.log(
      "%c ☄️: register -> params ",
      "font-size:16px;background-color:#d648d3;color:white;",
      params
    );
    // Simulate a successful registration flow
    if (params) {
      toast.success("Registration Successful! Welcome!");
      router.replace("/users-list");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Submit handler for the form
  const onSubmit = form.handleSubmit(register);

  return {
    form,
    onSubmit,
    isExecuting: false, // No backend, so we don't need to track execution state
  };
}
