import { Route, Routes } from "react-router";
import Template from "@/components/Template";
import { lazy } from "react";

const Home = lazy(() => import("@/page/Home"));
const Search = lazy(() => import("@/page/Search"));
const Profile = lazy(() => import("@/page/Profile"));
const Repository = lazy(() => import("@/page/Repository"));
const NotFound = lazy(() => import("@/page/NotFound"));

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
