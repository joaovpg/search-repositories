import { Route, Routes } from "react-router";
import Template from "@/components/Template";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Search = lazy(() => import("@/pages/Search"));
const Profile = lazy(() => import("@/pages/Profile"));
const Repository = lazy(() => import("@/pages/Repository"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export function Routers() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route index path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile/:username">
          <Route index element={<Profile />} />
          <Route path="repository/:repository" element={<Repository />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
