import Dashboard from "@/components/Dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="block md:hidden">
        {/* Message for mobile users */}
        <p className="text-center text-xl text-red-700 h-[100vh] mt-10">
          This website is only available on desktop devices. Please visit on a
          larger screen.
        </p>
      </section>

      <Dashboard />
    </div>
  );
}
