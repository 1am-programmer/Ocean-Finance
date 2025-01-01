import Dashboard from "@/components/Dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="hidden md:block">
        {/* Dashboard visible only on medium and larger screens */}
        <Dashboard />
      </section>

      <section className="block md:hidden">
        {/* Message shown only on mobile */}
        <p className="text-center text-xl text-red-700 h-[100vh] mt-10 max-h-screen">
          This website is only available on desktop devices. Please visit on a
          larger screen.
        </p>
      </section>
    </div>
  );
}
