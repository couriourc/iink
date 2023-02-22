/*
 * @Author: CouriourC
 * @Date: 2023-02-21 19:43:36
 * @Last Modified by: CouriourC
 * @Last Modified time: 2023-02-21 21:33:40
 */
import { configureStore } from '@reduxjs/toolkit';
import PenReducer from './PenStore';
import PointerReducer from './PointerStore';
const ManagerStore = configureStore({
  reducer: {
    pen: PenReducer,
    pointer: PointerReducer,
  },
});
export default ManagerStore;
