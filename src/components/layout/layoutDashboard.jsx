import Sidebar from "@/components/sidebar";

export default function LayoutDashboard({ children }) {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar/Header */}
        <header className="h-16 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm flex items-center justify-between px-6 sticky top-0 z-50">
          {/* Kiri: Judul */}
          <h1 className="text-xl font-semibold text-gray-800 tracking-tight flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>

          {/* Kanan: Profil */}
          <div className="flex items-center gap-4">
            {/* Notifikasi (opsional) */}
            <button className="relative group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405C18.21 14.79 18 13.918 18 13V9a6 6 0 10-12 0v4c0 .918-.21 1.79-.595 2.595L4 17h5m6 0a3 3 0 01-6 0m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Avatar user */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition">
                IA
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen transition-all duration-300">
          <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] p-8 min-h-[calc(100vh-8rem)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
