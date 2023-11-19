import { create } from 'zustand'

interface Bear {
    id: number;
    name: string;
}

interface BearState{
    blackBears: number,
    polarBears: number,
    pandaBears: number,

    bears: Bear[];

    increaseBlackBears:(by: number) => void; 
    increasePolarBears:(by: number) => void;
    increasePandaBears:(by: number) => void;

    doNothing: () => void;
    addBear: () => void;
    clearBear: () => void;


}

export const useBearStore = create<BearState>()((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 3,

  bears: [{id: 1, name: 'Oso #1'} ],

  increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set(state =>({bears: [...state.bears]})),
  addBear: () => set(state =>({
    bears: [...state.bears, {id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}`}]
    })),
  clearBear: () => set(({bears: []})),

}));