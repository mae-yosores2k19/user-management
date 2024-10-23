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

const getUsers = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/personInfo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Users");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export async function UserTable() {
  const { users } = await getUsers();

  return (
    <div className="rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className=" h-16 bg-[#c1d2ec] hover:bg-[#c1d2ec] rounded-t-lg">
            <TableHead className=" text-[#4875B8] font-extrabold ">
              Full Name
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold">
              Email
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold">
              Contact #
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold">
              Present Address
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold">
              Permanent Address
            </TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user: PersonalProfile) => (
            <TableRow key={user.id} className="h-14 ">
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>{user.presentAddress}</TableCell>
              <TableCell>{user.permanentAddress}</TableCell>
              <TableCell className="flex justify-around items-center h-14 gap-4 ">
                <PenLine size={20} className="text-[#1a6fad] " role="button" />
                <Trash2 size={20} className="text-red-500" role="button" />
              </TableCell>
            </TableRow>
          ))}
          {/* <TableRow className="h-14 ">
            <TableCell>Jessa Mae Yosores</TableCell>
            <TableCell>jessa@gmail.com</TableCell>
            <TableCell>09509256948</TableCell>
            <TableCell>Dumalan Dalagute Cebu</TableCell>
            <TableCell>Dumalan Dalagute Cebu</TableCell>
            <TableCell className="flex justify-around items-center h-14 gap-4 ">
              <PenLine size={20} className="text-[#1a6fad] " role="button" />
              <Trash2 size={20} className="text-red-500" role="button" />
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </div>
  );
}
