import Header from "@/features/shared/components/header";
import "../../app/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col h-screen w-screen">
        <Header/>
        <main className="flex-1 border-[#CBD4E1] bg-[#F9F9FB] flex flex-col overflow-hidden">
            {children}
        </main>

      </div>

  );
}
