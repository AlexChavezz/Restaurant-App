import { types } from '../types/types';

export const setTableNumberAction = (number) => ({
    type: types.setTableNumber,
    payload: number
});

export const resetTableNumber = ()=>({
    type: types.resetTableNumber,
})