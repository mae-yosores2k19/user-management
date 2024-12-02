"use client";

import {
  deleteUser,
  getAllUsersProfile,
  getUserProfileById,
} from "@/app/actions/userProfile";
import { AddEditFormDialog } from "@/app/users-list/AddEditFormDialog";
import { usePersonStore } from "@/app/users-list/store/personInfoStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PersonalProfile } from "@/model/personModel";
import { PenLine, Trash2 } from "lucide-react/";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export function UserTable() {
  const { profiles, setProfiles } = usePersonStore();
  const [selectedUser, setSelectedUser] = useState<PersonalProfile | null>(
    null
  );
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const fetchUsers = async () => {
    const data = await getAllUsersProfile();
    if (data?.users) {
      setProfiles(data.users);
    }
  };

  const handleEdit = async (id: string | undefined) => {
    if (!id) return;
    const { result } = await getUserProfileById(id);
    setSelectedUser(
      result || {
        fullname: "",
        email: "",
        phoneNumber: "",
        presentAddress: "",
        permanentAddress: "",
      }
    );
    setShowDialog(true);
  };

  const handleRemove = async (id: string | undefined) => {
    if (!id) return;
    const res = await deleteUser(id);
    if (res.status === 201) {
      toast.success("User deleted successfully", { position: "top-right" });
      fetchUsers();
    } else {
      alert("Error deleting user");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [setProfiles]);

  return (
    <div className="rounded-lg ">
      <Table>
        <TableHeader>
          <TableRow className=" h-16 bg-[#c1d2ec] hover:bg-[#c1d2ec] rounded-t-lg">
            <TableHead className=" text-[#4875B8] font-extrabold text-base ">
              Full Name
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold text-base">
              Email
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold text-base">
              Contact #
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold text-base">
              Present Address
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold text-base">
              Permanent Address
            </TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {profiles?.length > 0 ? (
            profiles?.map((user: PersonalProfile) => (
              <TableRow key={user._id} className="h-14">
                <TableCell>{user.fullname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.presentAddress}</TableCell>
                <TableCell>{user.permanentAddress}</TableCell>
                <TableCell className="flex justify-around items-center h-14 gap-4">
                  <PenLine
                    size={20}
                    className="text-[#1a6fad]"
                    role="button"
                    onClick={() => handleEdit(user._id)}
                  />
                  <Trash2
                    size={20}
                    className="text-red-500"
                    role="button"
                    onClick={() => handleRemove(user._id)}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <AddEditFormDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        existingProfile={selectedUser}
      />
    </div>
  );
}
