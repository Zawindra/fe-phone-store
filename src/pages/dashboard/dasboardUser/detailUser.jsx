import LayoutDashboard from "@/components/layout/layoutDashboard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserById } from "@/utils/api/users";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function DetailUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const fetchUserById = async (id) => {
    try {
      const response = await getUserById(id);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserById(id);
  }, [id]);

  return (
    <LayoutDashboard>
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Detail Pengguna
        </h1>
        <span className="text-sm text-gray-500 mt-2 sm:mt-0 font-medium">
          ID Pengguna: <span className="text-gray-800">{id}</span>
        </span>
      </div>

      {/* Detail Card */}
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-3">
          Informasi Akun
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="text-gray-700 font-semibold mb-1">Nama Lengkap</Label>
            <Input
              disabled
              value={user.fullname || "-"}
              className="rounded-xl bg-gray-100 border-gray-300 text-gray-900 font-medium focus-visible:ring-0 focus-visible:border-blue-400 transition"
            />
          </div>

          <div>
            <Label className="text-gray-700 font-semibold mb-1">Username</Label>
            <Input
              disabled
              value={user.username || "-"}
              className="rounded-xl bg-gray-100 border-gray-300 text-gray-900 font-medium focus-visible:ring-0 focus-visible:border-blue-400 transition"
            />
          </div>

          <div>
            <Label className="text-gray-700 font-semibold mb-1">Email</Label>
            <Input
              disabled
              value={user.email || "-"}
              className="rounded-xl bg-gray-100 border-gray-300 text-gray-900 font-medium focus-visible:ring-0 focus-visible:border-blue-400 transition"
            />
          </div>

          <div>
            <Label className="text-gray-700 font-semibold mb-1">Nomor Telepon</Label>
            <Input
              disabled
              value={user.phone_number || "-"}
              className="rounded-xl bg-gray-100 border-gray-300 text-gray-900 font-medium focus-visible:ring-0 focus-visible:border-blue-400 transition"
            />
          </div>

          <div>
            <Label className="text-gray-700 font-semibold mb-1">Umur</Label>
            <Input
              disabled
              value={user.age || "-"}
              className="rounded-xl bg-gray-100 border-gray-300 text-gray-900 font-medium focus-visible:ring-0 focus-visible:border-blue-400 transition"
            />
          </div>

          <div>
            <Label className="text-gray-700 font-semibold mb-1">Alamat</Label>
            <Input
              disabled
              value={user.address || "-"}
              className="rounded-xl bg-gray-100 border-gray-300 text-gray-900 font-medium focus-visible:ring-0 focus-visible:border-blue-400 transition"
            />
          </div>

          <div>
            <Label className="text-gray-700 font-semibold mb-1">Peran (Role)</Label>
            <Input
              disabled
              value={user.role || "-"}
              className={`rounded-xl font-semibold border-gray-300 ${
                user.role === "admin"
                  ? "bg-blue-50 text-blue-700 border-blue-300"
                  : "bg-gray-100 text-gray-800"
              }`}
            />
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}

export default DetailUser;