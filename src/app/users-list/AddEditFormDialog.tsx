"useClient";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormMessage,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import useProfileForm from "./hooks/useProfileForm";
import { PersonalProfile } from "@/model";
import { useEffect } from "react";

interface AddEditFormDialogProps {
  showDialog: boolean;
  setShowDialog: (open: boolean) => void;
  existingProfile?: PersonalProfile | null;
}

export function AddEditFormDialog({
  showDialog,
  setShowDialog,
  existingProfile,
}: AddEditFormDialogProps) {
  const { form, onSubmit } = useProfileForm();

  useEffect(() => {
    form.reset(
      existingProfile || {
        fullname: "",
        email: "",
        phoneNumber: "",
        presentAddress: "",
        permanentAddress: "",
      }
    );
  }, [existingProfile, form]);
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="w-full md:max-w-2xl bg-white px-10">
        <DialogHeader>
          <DialogTitle className="text-[#4875B8] text-start">
            {existingProfile ? "Edit User" : "Add User"}
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <Form {...form}>
          <form onSubmit={onSubmit} className="mt-2">
            <div className="flex w-full flex-col gap-6 items-center">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field, fieldState }) => (
                  <FormItem className="grid w-full  text-start">
                    <div className="flex items-center gap-2">
                      <FormLabel className="text-start text-sm font-semibold text-[#505050] opacity-50 2xl:text-base">
                        Full Name
                      </FormLabel>
                      <FormMessage className="text-sm" />
                    </div>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter you full name"
                        className={cn(
                          "h-12 w-full rounded-lg border-[#C7C7C7] text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base",
                          {
                            "border-destructive": Boolean(
                              fieldState.error?.message
                            ),
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem className="grid w-full  text-start">
                    <div className="flex items-center gap-2">
                      <FormLabel className="text-start text-sm font-semibold text-[#505050] opacity-50 2xl:text-base">
                        Email Address
                      </FormLabel>
                      <FormMessage className="text-sm" />
                    </div>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className={cn(
                          "h-12 w-full rounded-lg border-[#C7C7C7] text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base",
                          {
                            "border-destructive": Boolean(
                              fieldState.error?.message
                            ),
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field, fieldState }) => (
                  <FormItem className="grid w-full  text-start">
                    <div className="flex items-center gap-2">
                      <FormLabel className="text-start text-sm font-semibold text-[#505050] opacity-50 2xl:text-base">
                        Phone Number
                      </FormLabel>
                      <FormMessage className="text-sm" />
                    </div>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter phone number"
                        className={cn(
                          "h-12 w-full rounded-lg border-[#C7C7C7] text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base",
                          {
                            "border-destructive": Boolean(
                              fieldState.error?.message
                            ),
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="presentAddress"
                render={({ field, fieldState }) => (
                  <FormItem className="grid w-full  text-start">
                    <div className="flex items-center gap-2">
                      <FormLabel className="text-start text-sm font-semibold text-[#505050] opacity-50 2xl:text-base">
                        Present Address
                      </FormLabel>
                      <FormMessage className="text-sm" />
                    </div>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter present address"
                        className={cn(
                          "h-12 w-full rounded-lg border-[#C7C7C7] text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base",
                          {
                            "border-destructive": Boolean(
                              fieldState.error?.message
                            ),
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="permanentAddress"
                render={({ field, fieldState }) => (
                  <FormItem className="grid w-full  text-start">
                    <div className="flex items-center gap-2">
                      <FormLabel className="text-start text-sm font-semibold text-[#505050] opacity-50 2xl:text-base">
                        Permanent Address
                      </FormLabel>
                      <FormMessage className="text-sm" />
                    </div>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter permanent Address"
                        className={cn(
                          "h-12 w-full rounded-lg border-[#C7C7C7] text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base",
                          {
                            "border-destructive": Boolean(
                              fieldState.error?.message
                            ),
                          }
                        )}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <div className="flex justify-end mt-6 gap-4">
                <DialogClose asChild>
                  <Button size="lg" variant="ghost">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    variant="default"
                    type="submit"
                    size="lg"
                    className=" bg-[#4875B8] font-semibold"
                  >
                    {existingProfile ? "Update" : "Create"}
                  </Button>
                </DialogClose>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
