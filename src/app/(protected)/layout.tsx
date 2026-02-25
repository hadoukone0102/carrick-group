import Header from "@/features/shared/components/header";
import "../../app/globals.css";
import { CarrickStyle } from "@/components/ui/C.style";
import Footer from "@/features/shared/components/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col h-screen w-screen">
        <CarrickStyle/>
        <Header/>
        <main className="flex-1 border-[#CBD4E1] bg-[#F9F9FB] flex flex-col overflow-hidden">
            {children}
        </main>
        <Footer/>
      </div>
  );
}
