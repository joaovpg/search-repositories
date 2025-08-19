import { Outlet } from "react-router";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import FallbackLoader from "@/components/FallbackLoader";

function Template() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main className="max-w-[1200px] min-h-[calc(100vh-56px-74.4px)] w-full mx-auto px-4 py-8 flex flex-col">
        <Suspense fallback={<FallbackLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Template;
