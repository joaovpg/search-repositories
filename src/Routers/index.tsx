import { Route, Routes } from "react-router";
import Template from "@/components/Template";
import { lazy } from "react";

const Home = lazy(() => import("@/page/Home"));

export function Routers() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route index path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
