"use client";

import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";

import ProjectCard from "../components/Dashboard/ProjectCard";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname()


 

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const handelSignout = async () => {
    setLoading(true);

    try {
      await toast.promise(
        signOut(),
        {
          loading: "Signing Out...",
          success: "Signed Out Successfully! 👋",
          error: "Sign out failed.",
        },
        {
          duration: 3000,
          style: {
            backgroundColor: "#151515",
            color: "#ffff",
          },
        }
      );
    } catch (error) {
      console.error("Sign-out process failed:", error);
      toast.error("An unexpected error occurred.", {
        style: { backgroundColor: "#151515", color: "#ffff" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
   
      // <MainSidePage pathname = {pathname}/>
      <div className="mt-22 px-5">
       
      <ProjectCard />
     
      </div>
    
  );
};

export default DashboardPage;
