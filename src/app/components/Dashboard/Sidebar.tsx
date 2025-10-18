// "use client";
// import { House } from "lucide-react";
// import { Folder } from 'lucide-react';
// import { Key } from 'lucide-react';
// import { Settings } from 'lucide-react';
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// const Sidebar = () => {

//   const pathname = usePathname()

//   return (
//     <div className="lg:w-[25%] xl:w-[20%] hidden lg:block border-r-[1px] border-gray-600 h-screen">
//       <div className="w-full bg-gray-800 py-5.5 px-5 flex justify-start items-center border-b-[1px] border-gray-600">Env vault</div>
//       <div className="mt-5">
//         <ul className="p-5 space-y-9 ">
//           <li className={`${pathname == '/dashboard' ? "bg-primary" : "bg-none" } cursor-pointer font-inter flex gap-3 p-4`}>
//             <House />
//             <Link href="/dashboard">Dashboard</Link>
//           </li>
//           <li className="cursor-pointer font-inter flex gap-3">
//             <Folder/>
//                 <Link href="/projects">Projects</Link></li>
//           <li className="cursor-pointer font-inter flex gap-3">
//             <Key/>
//                <Link href="/api-keys">Api Keys</Link></li>
//           <li className="cursor-pointer font-inter flex gap-3">
//             <Settings/>
//                <Link href="/settings">Settings</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// Sidebar.tsx
"use client";
import { House, Folder, Key, Settings } from "lucide-react";
import Link from "next/link";

type SidebarProps = {
  currentPath: string;
};

const Sidebar = ({ currentPath }: SidebarProps) => {
  const links = [
    { href: "/dashboard", label: "Dashboard", icon: <House /> },
    { href: "/dashboard/projects", label: "Projects", icon: <Folder /> },
    { href: "/dashboard/api-keys", label: "Api Keys", icon: <Key /> },
    { href: "/dashboard/settings", label: "Settings", icon: <Settings /> },
  ];

  return (
    <div className="lg:w-[25%] xl:w-[20%] hidden lg:block border-r-[1px] border-gray-600 h-screen">
      <div className="w-full bg-gray-800 p-5 flex justify-start items-center border-b-[1px]  border-gray-600 font-nunito text-[18.5px]">
        <Link href="/dashboard">Env vault</Link>
      </div>
      <div className="mt-5">
        <ul className="p-5 space-y-9">
          {links.map((link) => (
            <li
              key={link.href}
              className={`cursor-pointer font-inter flex gap-3 p-4 ${
                currentPath === link.href ? "text-purple-500" : ""
              }`}
            >
              {link.icon}
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
