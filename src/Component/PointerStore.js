/*
 * @Author: CouriourC
 * @Date: 2023-02-22 17:05:26
 * @Last Modified by: CouriourC
 * @Last Modified time: 2023-02-22 23:13:06
 */
import { createSlice } from '@reduxjs/toolkit';

// 指针当前的状态
export const POINTER_UP = Symbol('POINTER_UP');
export const POINTER_DOWN = Symbol('POINTER_DOWN');
export const POINTER_MOVE = Symbol('POINTER_MOVE');

const PointerSlice = createSlice({
  name: 'pointer',
  initialState: {
    bucket: {}, // HashMap 记录鼠标指针
    vectors: [],
    pos: {
      // 记录当前指针位置
      x: -1,
      y: -1,
    },
    status: POINTER_UP,
    prePos: {
      x: -1,
      y: -1,
    },
  },
  reducers: {
    followPointer(state, { payload: pos }) {
      console.log(pos);
      state.pos = pos;
    },
    // 设置当前的状态
    setStatus(state, { payload: status }) {
      if (![POINTER_DOWN, POINTER_MOVE, POINTER_UP].includes(status)) {
        return;
      }
      state.status = status;
    },
    collectPointer(state, { payload: { pointer, pointerId } }) {
      if (!pointer instanceof PointerEvent) return;
      state.bucket[pointerId] = pointer;
    },
    removePointer(state, { payload: pointerId }) {
      state.bucket[pointerId] = null;
      delete state.bucket[pointerId];
    },
    addTrace(state, { payload: vector }) {
      // TODO 优化笔迹模型
      //   state.vectors.push(vector);
      state.prePos = state.pos;
      state.pos = vector;
    },
    removeTrace(state, { payload: vector }) {},
    releasePointer(state) {
      state.prePos = state.pos = {
        x: -1,
        y: -1,
      };
    },
    setPrePos(state, { payload: vector }) {
      // TODO 优化笔迹模型
      state.prePos = vector;
    },
    setPos(state, { payload: vector }) {
      state.pos = vector;
    },
  },
});

export const {
  followPointer,
  addTrace,
  setPos,
  setPrePos,
  collectPointer,
  setStatus,
  releasePointer,
} = PointerSlice.actions;
export const posSelect = (state) => {
  console.log(state.pointer.pos);
  return [state.pointer.pos.x, state.pointer.pos.y];
};
export const pointerSelect = (state) => (pointerId) => {
  if (!state.pointer.bucket[pointerId]) {
    return null;
  }
  return state.pointer.bucket[pointerId];
};
export const pointerStatusSelect = (state) => state.pointer.status;
export default PointerSlice.reducer;
