// "use client";

// import { useEffect } from "react";
// // import { useSession } from "next-auth/react";
// // import { useAuthenticatedUserQuery } from "@/features/auth/hooks/auth";

// export default function UserProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { data: session, status } = useSession();
//   const { refetch } = useAuthenticatedUserQuery();

//   // Charger l'utilisateu si la session est authentifiée
//   useEffect(() => {
//     if (status === "authenticated" && session) {
//       refetch();
//     }
//   }, [status, session, refetch]);

//   return <>{children}</>;
// }
