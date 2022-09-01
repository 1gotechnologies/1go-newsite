import create from "zustand";

interface BookingState {
  tourId?: string;
  agent?: string;
  category?: string;
  package?: string;
  visa?: string[];
}

const useBookingStore = create<BookingState>((set) => ({
  tourId: "",
  agent: "",
  category: "",
  package: "",
  visa: [],
  change: (val: Partial<BookingState>) =>
    set((state: BookingState) => ({ ...state, ...val })),
  book: async () => {},
}));

export default useBookingStore;
