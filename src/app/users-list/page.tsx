import { UserTable } from "@/components/Table/UserTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center px-3 md:px-10 m-5 gap-4">
      <div className="flex justify-between items-center w-full my-5">
        <h1 className="text-lg md:text-3xl font-extrabold text-[#4875B8]">
          Users List
        </h1>
        <Button
          variant="outline"
          size="lg"
          className="border-[#5992ce] flex gap-4 text-[#1a6fad] font-bold hover:text-[#1a6fad]"
        >
          <Plus className="text-[#1a6fad] focus:text-white" />
          Add User
        </Button>
      </div>
      <div className=" bg-white w-full rounded-lg">
        <UserTable />
      </div>
    </div>
  );
}
