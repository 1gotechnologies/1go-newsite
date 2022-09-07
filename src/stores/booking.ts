import create from "zustand";

interface BookingState {
  tourId?: string;
  agentId?: string;
  category?: string;
  package?: string;
  visa?: string[];
  persons?: number;
  startPayment?: boolean;
}

const useBookingStore = create<BookingState>((set) => ({
  tourId: "",
  agentId: "",
  persons: 1,
  category: "",
  package: "",
  visa: [],
  startPayment: false,
}));

export default useBookingStore;
