import { Trash2, Info, Pencil } from "lucide-react";
import { deleteUser } from "@/utils/api/users";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const columns = [
  {
    header: "No",
    accessorFn: (row, index) => index + 1,
    cell: ({ getValue }) => (
      <span className="text-gray-600 font-medium">{getValue()}</span>
    ),
  },
  {
    accessorKey: "fullname",
    header: "Nama Lengkap",
    cell: ({ getValue }) => (
      <span className="font-semibold text-gray-800">{getValue()}</span>
    ),
  },
  { accessorKey: "username", header: "Username" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "phone_number", header: "Nomor Telepon" },
  { accessorKey: "age", header: "Umur" },
  { accessorKey: "address", header: "Alamat" },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ getValue }) => {
      const role = getValue();
      const color =
        role === "admin"
          ? "bg-blue-100 text-blue-700"
          : "bg-green-100 text-green-700";
      return (
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}
        >
          {role}
        </span>
      );
    },
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const id = row.original.id;

      const handleDeleteUser = async (id) => {
        try {
          await deleteUser(id);
          alert("✅ Data user berhasil dihapus!");
          window.location.reload();
        } catch (error) {
          alert("❌ Gagal menghapus data user: " + error);
        }
      };

      return (
        <div className="flex items-center gap-3">
          {/* Info Button */}
          <button
            onClick={() => console.log("Detail user:", row.original)}
            className="p-2 rounded-full hover:bg-blue-50 text-blue-600 transition"
            title="Lihat Detail"
          >
            <Info size={18} />
          </button>

          {/* Edit Button */}
          <button
            onClick={() => console.log("Edit user:", id)}
            className="p-2 rounded-full hover:bg-amber-50 text-amber-600 transition"
            title="Edit User"
          >
            <Pencil size={18} />
          </button>

          {/* Delete Button */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                className="p-2 rounded-full hover:bg-red-50 text-red-600 transition"
                title="Hapus User"
              >
                <Trash2 size={18} />
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-2xl">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-lg font-semibold text-gray-800">
                  Hapus Data User?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-gray-500">
                  Data yang sudah dihapus tidak dapat dikembalikan. Pastikan Anda yakin sebelum melanjutkan.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="rounded-xl px-4 py-2">
                  Batal
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => handleDeleteUser(id)}
                  className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 py-2 shadow-sm"
                >
                  Hapus
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
