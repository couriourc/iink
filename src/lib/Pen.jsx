/*
 * @Author: CouriourC
 * @Date: 2023-02-20 12:02:20
 * @Last Modified by: CouriourC
 * @Last Modified time: 2023-02-20 20:05:21
 */

import { useState } from 'react';
import { useEffect } from 'react';

/**
 * @description Pen React.F 设置画笔，载入画笔的样式
 * @param { HTMLCanvasElement } board
 * @return React.FC
 */
export const Pen = ({
  board,
  icon, // 设置画笔的 icon 地址
  lineWidth = 4,
  type = 'mouse',
  lineJoin = 'round',
  funcType = null,
  funcTypes = { draw: 'draw', erase: 'draw erase', menu: 'menu' },
  colors = {
    fg: '#555',
    bg: '#FFF',
  }, // 设置画笔的颜色值
}) => {
  // setPen: function setPen(context, pointerEvent) {
  //     switch (this.funcType) {
  //       case this.funcTypes.erase: {
  //         this.set(context, {
  //           color: this.colors.bg,
  //           lineWidth: 25,
  //         });
  //         break;
  //       }
  //       case this.funcTypes.draw: {
  //         this.set(context, {
  //           color: this.colors.fg,
  //           lineWidth: getLineWidth(pointerEvent),
  //         });
  //         break;
  //       }
  //     }
  //   },
  const [color, setColor] = useState();
  
  // 初始化，载入画布
  
  useEffect(() => {
    if (board) {
      board.lineJoin = lineJoin;
      board.lineWidth = lineWidth;
      board.strokeStyle = color;
    }
  });
  // 更新颜色状态
  useEffect(() => {}, [colors, icon]);
  return <></>;
};
