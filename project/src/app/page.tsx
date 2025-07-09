import Image from "next/image";
import Course1 from "./courses/course1/page";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-gray-200 w-vh h-lvh">
      <main className="flex">
        
        <div className="flex-1">
          <Navbar />
        </div>

        <div className="flex-2">
          <Course1 />
        </div>
      </main>
    </div>
  );
}
