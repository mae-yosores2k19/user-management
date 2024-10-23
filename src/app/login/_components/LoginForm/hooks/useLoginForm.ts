import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";

export default function useLoginForm() {
  const router = useRouter();

  // Define the login schema
  const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  // Initialize the form with validation
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  // Define the login function
  const login = async (credentials: z.infer<typeof loginSchema>) => {
    try {
      // const result = await signIn("credentials", {
      //   redirect: true,
      //   email: credentials.email,
      //   password: credentials.password,
      // });

      if (credentials) {
        toast.success("Login successful!");
        router.push("/users-list");
      } else {
        toast.error("Incorrect Credential, Please try again!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = form.handleSubmit(login);

  return { form, onSubmit };
}
