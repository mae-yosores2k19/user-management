import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function AddEditForm() {
  return (
    <div className="border border-black my-10 mx-40 p-10 rounded max-w-xl">
      <form action="">
        <div className="flex w-full flex-col gap-6 items-center">
          <div className="flex flex-row w-full gap-4">
            <div className="grid w-full gap-3 ">
              <Label
                htmlFor="first-name"
                className="text-start text-sm text-[#6e8cc5]"
              >
                First Name
              </Label>
              <Input
                type="text"
                id="first-name"
                placeholder="Enter you first name"
                className="h-10 w-full rounded-lg border border-[#C7C7C7] py-2 text-base shadow-sm placeholder:text-sm  focus:border-[#004a88] focus:ring-0 focus:ring-blue-600 text-[#4875B8]"
              />
            </div>
            <div className="grid w-full gap-3 ">
              <Label
                htmlFor="last-name"
                className="text-start text-sm text-[#6e8cc5]"
              >
                Last Name
              </Label>
              <Input
                type="text"
                id="last-name"
                placeholder="Enter you last name"
                className="h-10 w-full rounded-lg border border-[#C7C7C7] py-2 text-base shadow-sm placeholder:text-sm  focus:border-[#004a88] focus:ring-0 focus:ring-blue-600 text-[#4875B8]"
              />
            </div>
          </div>
          <div className="flex flex-row w-full gap-4">
            <div className="grid w-full gap-3 ">
              <Label
                htmlFor="first-name"
                className="text-start text-sm text-[#6e8cc5]"
              >
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter you email address"
                className="h-10 w-full rounded-lg border border-[#C7C7C7] py-2 text-base shadow-sm placeholder:text-sm  focus:border-[#004a88] focus:ring-0 focus:ring-blue-600 text-[#4875B8]"
              />
            </div>
            <div className="grid w-full gap-3 ">
              <Label
                htmlFor="phone-number"
                className="text-start text-sm text-[#6e8cc5]"
              >
                Phone Number
              </Label>
              <Input
                type="number"
                id="phone-number"
                placeholder="Enter you phone number"
                className="h-10 w-full rounded-lg border border-[#C7C7C7] py-2 text-base shadow-sm placeholder:text-sm  focus:border-[#004a88] focus:ring-0 focus:ring-blue-600 text-[#4875B8]"
              />
            </div>
          </div>
          <div className="grid w-full gap-3 ">
            <Label
              htmlFor="barangay"
              className="text-start text-sm text-[#6e8cc5]"
            >
              Sitio/Barangay
            </Label>
            <Input
              type="text"
              id="barangay"
              placeholder="Enter your barangay"
              className="h-10 w-full rounded-lg border border-[#C7C7C7] py-2 text-base shadow-sm placeholder:text-sm  focus:border-[#004a88] focus:ring-0 focus:ring-blue-600 text-[#4875B8]"
            />
          </div>
          <div className="grid w-full gap-3 ">
            <Label
              htmlFor="province"
              className="text-start text-sm text-[#6e8cc5]"
            >
              Province
            </Label>
            <Input
              type="text"
              id="province"
              placeholder="Enter your province"
              className="h-10 w-full rounded-lg border border-[#C7C7C7] py-2 text-base shadow-sm placeholder:text-sm  focus:border-[#004a88] focus:ring-0 focus:ring-blue-600 text-[#4875B8]"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <Button type="submit" size="lg" variant="ghost">
            Cancel
          </Button>
          <Button
            type="submit"
            size="lg"
            className=" bg-blue-400 hover:bg-slate-300"
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}
