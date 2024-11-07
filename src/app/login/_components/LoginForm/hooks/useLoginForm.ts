import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { LoginParamsSchema, loginParamsSchema } from "@/model/accountModel";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function useLoginForm() {
  const router = useRouter();
  const form = useForm<LoginParamsSchema>({
    resolver: zodResolver(loginParamsSchema),
    mode: "onSubmit",
  });
  const loginUser = async (credentials: LoginParamsSchema) => {
    const res = await signIn("user-password", {
      ...credentials,
      redirect: false,
    });
    if (res?.ok) {
      toast.success("Login Successful! Welcome!", {
        duration: 2000,
        position: "top-right",
      });
      router.push("/users-list");
      router.refresh();
    } else {
      toast.error("Your account does not exits. Please try again", {
        position: "top-right",
      });
    }
  };

  const onSubmit = form.handleSubmit(loginUser);

  return { form, onSubmit };
}
