import type { Metadata } from "next";
import { ReactNode } from "react";

import { fonts } from "@components/styles/fonts";
import "@styles/global.css";
import { TanstackProvider } from "@main/providers/tanstack-provider";
import { Sidebar } from "@components/core/sidebar";
import { MENU_RESOURCES_CONFIGS } from "@config/menu";
import * as styles from "./styles.css";
import { ClientHeader } from "@components/core/header/client-header";
  import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: "Defense IA | Middlewares e Centrais",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={fonts.nunito}>
        <TanstackProvider>
          <ToastContainer />
            <main className={styles.mainLayoutStyle}>
              <Sidebar.Root>
                <Sidebar.Menu resources={MENU_RESOURCES_CONFIGS} />
              </Sidebar.Root>
              <div className={styles.containerPageStyles}>
                <ClientHeader />
                {children}
              </div>
            </main>
        </TanstackProvider>
      </body>
    </html>
  );
}
