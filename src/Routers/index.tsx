import { Route, Routes } from "react-router";
import Template from "@/components/Template";
import { lazy } from "react";

const Home = lazy(() => import("@/page/Home"));
const Search = lazy(() => import("@/page/Search"));
const Profile = lazy(() => import("@/page/Profile"));

export function Routers() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route index path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Route>
    </Routes>
  );
}
