"use client";
import React from "react";
import Header from "./Header";
import { ReactNode } from "react";
import WebinarsModal from "@/components/webinar/WebinarsModal";
import useModal from "@/hooks/useModal";

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
    </>
  );
};

export default Layout;
