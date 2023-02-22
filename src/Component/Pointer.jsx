/*
 * @Author: CouriourC
 * @Date: 2023-02-21 12:47:04
 * @Last Modified by: CouriourC
 * @Last Modified time: 2023-02-22 20:10:09
 */
import { createAction } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followPointer, POINTER_UP, pointerStatusSelect } from './PointerStore';
import { drawer, drawerStart, drawIng } from './Pointer.drawer';
export function Pointer(options) {
  //   指针插件
  //
  return function Pointer({ board }) {
    const canvas = board.current;
    const context = canvas.getContext('2d');
    const status = useSelector(pointerStatusSelect);
    const dispatch = useDispatch();
    function updatePointerInfo(e) {
      dispatch(followPointer({ x: e.pageX, y: e.pageY }));
    }
    function PointerDown(e) {
      drawerStart({ x: e.x, y: e.y });
    }
    function pointerMove() {
      if (POINTER_UP === status) return;
      drawIng(context);
    }
    function pointerCancel() {}
    useEffect(() => {
      // 绑定指针事件
      canvas.addEventListener('pointerdown', PointerDown);
      canvas.addEventListener('pointermove', pointerMove);
      canvas.addEventListener('pointerup', pointerCancel);
      canvas.addEventListener('pointercancel', pointerCancel);
      canvas.addEventListener('pointermove', updatePointerInfo);
      return () => {};
      // 快捷键绑定
    });
    return <></>;
  };
}
