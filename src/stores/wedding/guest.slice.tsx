import { StateCreator } from "zustand";

export interface GuestSlice {
    guestCount: number;

    setGuestCount: (guesCount: number) => void;
}

export const createGuestSlice: StateCreator<GuestSlice> = (set) =>({

    guestCount: 0,

    setGuestCount: (guesCount: number) => set({
        guestCount: guesCount > 0 ? guesCount : 0
    }),

    

    
})