/*
 * @Author: CouriourC
 * @Date: 2023-02-22 19:20:27
 * @Last Modified by: CouriourC
 * @Last Modified time: 2023-02-22 20:10:10
 */

import {
  setPrePos,
  collectPointer,
  setPos,
  setStatus,
  POINTER_DOWN,
  POINTER_UP,
  releasePointer,
  POINTER_MOVE,
} from './PointerStore';
export function drawer(board, pointer) {
  if (!(vectors && board && pointer)) {
    return;
  }
  if (pointer.prepos.x < 0) {
    setPrePos({ x: pointer.pos.x + 1, y: pointer.pos.y + 1 });
  }
  board.beginPath();
  board.moveTo(pointer.prepos.x, pointer.prepos.pointer.prepos.y);
  board.lineTo(pointer.pos.x, pointer.pos.y);
  board.closePath();
  board.stroke();

  setPrePos({ x: pointer.pos.x, y: pointer.y });
}

export function drawerStart({ x, y }) {
  setPos({ x, y });
  setStatus(POINTER_DOWN);
}
export function drawIng(ctx, pointer) {
  setStatus(POINTER_MOVE);
  // TODO OPTIMIZ 优化笔迹效果
  return drawOnBoard(ctx, pointer);
}
export function drawEnd(e) {
  setStatus(POINTER_UP);
  // 释放当前的编辑点
  releasePointer();
}
