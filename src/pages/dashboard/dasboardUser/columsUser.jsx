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
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
    cell: ({ getValue }) => (
      <div className="text-center font-semibold text-gray-700">{getValue()}</div>
    ),
  },
  {
    accessorKey: "fullname",
    header: "Nama Lengkap",
    cell: ({ getValue }) => (
      <span className="font-semibold text-gray-800">{getValue()}</span>
    ),
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ getValue }) => <span className="text-gray-600">{getValue()}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => <span className="text-gray-600">{getValue()}</span>,
  },
  {
    accessorKey: "phone_number",
    header: "Nomor Telepon",
    cell: ({ getValue }) => <span className="text-gray-600">{getValue()}</span>,
  },
  {
    accessorKey: "age",
    header: "Umur",
    cell: ({ getValue }) => <span className="text-gray-600">{getValue()}</span>,
  },
  {
    accessorKey: "address",
    header: "Alamat",
    cell: ({ getValue }) => <span className="text-gray-600">{getValue()}</span>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ getValue }) => (
      <span
        className={`px-3 py-1.5 rounded-full text-xs font-medium ${
          getValue() === "admin"
            ? "bg-blue-100 text-blue-700 border border-blue-200"
            : "bg-gray-100 text-gray-700 border border-gray-200"
        }`}
      >
        {getValue()}
      </span>
    ),
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const id = row.original.id;
      const navigate = useNavigate();

      const handleDeleteUser = async (id) => {
        try {
          await deleteUser(id);
          alert("Data User Berhasil Dihapus");
          window.location.reload();
        } catch (error) {
          alert("Gagal Menghapus Data User" + error);
        }
      };

      return (
        <div className="flex items-center justify-center gap-3">
          {/* Button Info */}
          <button
            onClick={() => navigate(`/dashboard/user/${id}`)}
            className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
            title="Lihat Detail"
          >
            <Info size={18} />
          </button>

          {/* Button Edit */}
          <button
            onClick={() => console.log("Ini Button Edit")}
            className="p-2 rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
            title="Edit User"
          >
            <Pencil size={18} />
          </button>

          {/* Button Delete */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
                title="Hapus User"
              >
                <Trash2 size={18} />
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-sm rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-100">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-lg font-semibold text-gray-800">
                  Hapus Data User
                </AlertDialogTitle>
                <AlertDialogDescription className="text-sm text-gray-500">
                  Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dikembalikan.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100 transition text-gray-700">
                  Batal
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => handleDeleteUser(id)}
                  className="bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700 transition"
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
