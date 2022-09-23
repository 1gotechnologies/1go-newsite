import create from "zustand";

interface BookingState {
  tourId?: string;
  agentId?: string;
  category?: "S" | "C" | "M";
  package?: string;
  passports?: File[];
  individuals?: number;
  startPayment?: boolean;
}

const useBookingStore = create<BookingState>((set) => ({
  tourId: "",
  agentId: "",
  individuals: 1,
  category: "S",
  package: "",
  passports: [],
  startPayment: false,
}));

export default useBookingStore;
