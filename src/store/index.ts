import create from "zustand";
import {SelectionType} from "../types";

interface MarketState {
    betslips: SelectionType[]
    addBetslip: (selection: SelectionType) => void
    removeBetslip: (id: string) => void
    isOpenDrawer: boolean
    onOpen: (openDrawer: boolean) => void
}


export const useStore = create<MarketState>(set => ({
    betslips: [],
    isOpenDrawer: false,
    addBetslip: (betslip ) => set(state => {
        const isBetslipExist = state.betslips.some(item => item.id === betslip.id);
        set({
            betslips: isBetslipExist ? state.betslips : [...state.betslips, betslip]
        })
    }),
    removeBetslip: (id) => set(state => {
        set({
            betslips: state.betslips.filter(item => item.id !== id),
            isOpenDrawer: false
        })
    }),
    onOpen: (openDrawer) => set(({
        isOpenDrawer: openDrawer,
    })),
}))