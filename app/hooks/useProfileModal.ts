import { ModalType } from "@/app/types";
import { create } from "zustand";

const useProfileModal = create<ModalType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useProfileModal;
