import LunarBody from "@/components/LunarBody";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex contain">
      <Sidebar />
      <LunarBody />
    </div>
  );
}
