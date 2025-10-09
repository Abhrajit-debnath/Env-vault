'use client';

// The import path is correct; relying on the user's Next.js setup to correctly resolve the package.
import { SessionProvider } from 'next-auth/react'; 

type ChildrenProps= {
    children:React.ReactNode 
}

/**
 * This component wraps the entire application to provide the session context.
 * It is required for the useSession() hook to work in client components 
 * and to initialize the session check across the application.
 */


export default function NextAuthSessionProvider({ children}:ChildrenProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
