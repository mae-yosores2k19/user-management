import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
// import { useAction } from "next-safe-action/hooks";
import { registerUser } from "@/app/actions/user";
import { registerParamsSchema } from "@/model/accountModel";
// import { useLocalStorage } from "@/hooks";

export default function useRegisterForm() {
  const router = useRouter();
  // const [_email, setEmail] = useLocalStorage("registering-email", "");

  // const { isExecuting, execute } = useAction(registerUser, {
  //   onExecute: ({ input }) => {
  //     setEmail(input.email);
  //   },
  //   onSuccess: () => {
  //     toast.success("Registration Successful! Welcome!", {
  //       duration: 2000,
  //       position: "top-right",
  //     });
  //     router.replace("/email-confirmation");
  //   },
  //   onError: ({ error }) => {
  //     error.validationErrors?.email?.forEach((error) => {
  //       form.setError("email", { message: error }, { shouldFocus: true });
  //     });

  //     toast.error("Something went wrong. Please try again.", {
  //       position: "top-right",
  //     });
  //   },
  // });
  // Initialize the form
  const form = useForm<z.infer<typeof registerParamsSchema>>({
    resolver: zodResolver(registerParamsSchema),
    mode: "onSubmit",
  });

  const register = async (params: z.infer<typeof registerParamsSchema>) => {
    if (params) {
      const res = await registerUser(params);
      if (res.status === 400) {
        toast.error(res.msg, {
          position: "top-right",
        });
      } else {
        toast.success("Registered Successfully!", {
          position: "top-right",
        });
        router.push("/users-list");
      }
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const onSubmit = form.handleSubmit(register);

  return {
    form,
    onSubmit,
    isExecuting: false,
  };
}
