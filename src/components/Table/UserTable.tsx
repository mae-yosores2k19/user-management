import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PenLine, Trash2 } from "lucide-react/";

export function UserTable() {
  // const tableHeader = [
  //   "First Name",
  //   "Last Name",
  //   "Email",
  //   "Contact #",
  //   "Address",
  // ];
  return (
    <div className="rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className=" h-16 bg-[#c1d2ec] hover:bg-[#c1d2ec] rounded-t-lg">
            <TableHead className=" text-[#4875B8] font-extrabold ">
              First Name
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold">
              Last Name
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold">
              Email
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold">
              Contact #
            </TableHead>
            <TableHead className="text-[#4875B8] font-extrabold">
              Address
            </TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 3 }).map((_, index) => (
            <TableRow key={index} className="h-14 ">
              <TableCell>Yosores</TableCell>
              <TableCell>Jessa Mae</TableCell>
              <TableCell>jessamaeyosores@gmail.com</TableCell>
              <TableCell>09509256048</TableCell>
              <TableCell>Baybayon Dumalan Dalaguete Cebu</TableCell>
              <TableCell className="flex justify-around items-center h-14 gap-4 ">
                <PenLine size={20} className="text-[#1a6fad] " role="button" />
                <Trash2 size={20} className="text-red-500" role="button" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
