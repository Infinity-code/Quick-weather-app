import { atom, selector } from "recoil";

export const refresher=atom<boolean>({
    key:"refreshButton",
    default:false
});

export const dayNite=atom<{"sunrise":number,"sunset":number}[]>({
    key:"dayNite",
    default:[]
})