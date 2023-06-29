"use client";
import React, { ReactNode } from "react";
import Header from "./Header";
import WebinarsModal from "@/components/webinar/WebinarsModal";
import useModal from "@/hooks/useModal";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isOpen, closeModal } = useModal();
  return (
    <>
      <Header />
      <main className="w-full m-auto">
        <WebinarsModal visible={isOpen} onClose={closeModal} />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
