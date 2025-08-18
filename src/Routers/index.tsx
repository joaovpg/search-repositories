import { Route, Routes } from "react-router";
import Template from "../components/Template";
import { Suspense } from "react";

export function Routers() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Template />}>
          <Route index path="/" element={<h1>Home</h1>} />
        </Route>
      </Routes>
    </Suspense>
  );
}
