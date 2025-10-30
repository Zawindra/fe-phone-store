import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import DataTable from "@/components/dataTable";
import { columns } from "@/pages/dashboard/dasboardUser/columsUser";
import { getUsers } from "@/utils/api/users";
import { Button } from "@/components/ui/button";

export default function DashboardUser() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleAddUser = () => navigate("/dashboard/user/add");

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <LayoutDashboard>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
             User Management
          </h2>
          
        </div>

        {/* Add User Button */}
        <Button
          onClick={handleAddUser}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 text-white font-medium px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          + Add User
        </Button>
      </div>

      {/* Table Section */}
      <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
        <DataTable columns={columns} data={users} />
      </div>
    </LayoutDashboard>
  );
}
