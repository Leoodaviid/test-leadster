import "@/styles/globals.css";
import React, { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Layout from "@/components/Layout";
import { ReactQueryProvider } from "@/components/providers/ReactQueryProvider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Leadster",
  description: "Transformando visitantes em clientes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={jakarta.className}>
        <ReactQueryProvider>
          <Layout>{children}</Layout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
