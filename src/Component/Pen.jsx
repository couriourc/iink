/*
 * @Author: CouriourC
 * @Date: 2023-02-20 18:49:47
 * @Last Modified by: CouriourC
 * @Last Modified time: 2023-02-22 19:37:46
 */

import { posSelect } from './PointerStore';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRef } from 'react';

export const Pen = (
  options = {
    colors: {
      fg: '#FFF',
      bg: '#FFF',
    },
    lineWidth: 4,
    type: 'mouse',
    lineJoin: 'round',
    funcType: null,
    funcTypes: {
      draw: 'draw',
      erase: 'erase',
      menu: 'menu',
    },
  }
) => {
  //   console.log(options);
  // 获取基本的笔的配置以及转换信息
  return function Pen({ board }) {
    // 设置跟随指针的笔
    const penVector = useSelector(posSelect);
    const pen = useRef();
    // 获取指针所在的位置，跟随指针的移动
    return (
      <div
        ref={pen}
        style={{
          position: 'fixed',
          top: penVector[0],
          left: penVector[1],
          pointerEvents: 'none',
        }}
      >
        {"penVector"}
        {/* {根据 pen 的 state 设置样式} */}
      </div>
    );
  };
};
