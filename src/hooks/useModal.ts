"use client";
import { create } from "zustand";

export interface ModalStoreInterface {
  webinarsId?: string;
  isOpen: boolean;
  openModal: (webinarsId: string) => void;
  closeModal: () => void;
}

const useModal = create<ModalStoreInterface>((set) => ({
  webinarsId: undefined,
  isOpen: false,
  openModal: (webinarsId: string) => set({ isOpen: true, webinarsId }),
  closeModal: () => set({ isOpen: false, webinarsId: undefined }),
}));

export default useModal;
