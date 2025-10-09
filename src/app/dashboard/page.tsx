"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage=()=> {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h1>Welcome, {session?.user?.name}</h1>
      <p>Your email: {session?.user?.email}</p>
      <button onClick={()=> signOut()}>logout</button>
      {/* Your dashboard content here */}
    </div>
  );
}

export default DashboardPage
