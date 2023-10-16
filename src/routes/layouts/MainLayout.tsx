import { FC } from "react";
import { Outlet } from "react-router-dom";

import { App } from "components/App";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

export const MainLayout: FC = () => {
  return (
    <App>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </App>
  );
};