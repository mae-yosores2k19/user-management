"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddEditFormDialog } from "./AddEditFormDialog";

export const UsersList = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full my-5">
        <h1 className="text-lg md:text-3xl font-extrabold text-[#4875B8]">
          Users List
        </h1>
        <Button
          variant="outline"
          size="lg"
          onClick={() => setShowDialog(true)}
          className="border-[#5992ce] flex gap-4 text-[#1a6fad] font-bold hover:text-[#1a6fad]"
        >
          <Plus className="text-[#1a6fad] focus:text-white" />
          Add User
        </Button>
      </div>
      <AddEditFormDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
    </div>
  );
};
