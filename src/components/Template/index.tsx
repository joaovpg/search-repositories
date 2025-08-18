import { Outlet } from "react-router";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Suspense } from "react";

function Template() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main className="max-w-[1200px] min-h-[calc(100vh-56px-74.4px)] w-full mx-auto px-4 py-8 flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Template;
