import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/actions/user";
import { registerParamsSchema } from "@/model/accountModel";

export default function useRegisterForm() {
  const router = useRouter();
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
