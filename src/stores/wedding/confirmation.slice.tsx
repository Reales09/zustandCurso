import { StateCreator } from "zustand";


export interface ConfirmationSlice {
    isConfirmed: boolean;


    setIsconfirmed: (value: boolean) => void;
}

export const createConfirmationSlice: StateCreator<ConfirmationSlice>= (set) =>({
    isConfirmed: false,

    setIsconfirmed: (value: boolean) => set({
        isConfirmed: value
    })
})