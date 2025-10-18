"use client";


import Sidebar from "../components/Dashboard/Sidebar";
import { usePathname } from "next/navigation";
import Header from "../components/Dashboard/Header";
import { useEffect, useState } from "react";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [heading, setHeading] = useState(pathname)


 useEffect(() => {
    const headingMap: Record<string, string> = {
      "/dashboard": "Dashboard",
      "/dashboard/projects": "Projects",
      "/dashboard/api-keys": "API Keys",
      "/dashboard/settings": "Settings",
    };

    setHeading(headingMap[pathname] || "Dashboard");
  }, [pathname]);

  return (
     <div className="w-screen h-screen bg-gray-900 flex">
      <Sidebar currentPath={pathname} />

        {/* Sidebar appears only once */}
      <div className="">
        <Header heading={heading}/>
        {children}</div>  {/* Main content */}
    </div>

//     <div className=" flex w-screen h-screen bg-gray-900">
//       <Sidebar currentPath={pathname} />
//   <Header heading={heading} />
//   <div className="mt-20 p-6 overflow-y-auto">
//     {children}
//   </div>
// </div>

  );
}
