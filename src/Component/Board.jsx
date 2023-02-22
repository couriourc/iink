/*
 * @Author: CouriourC
 * @Date: 2023-02-20 17:09:12
 * @Last Modified by: CouriourC
 * @Last Modified time: 2023-02-22 19:31:34
 */

import { createContext } from 'react';
import { forwardRef } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { useResize } from '../hooks/resize';
import ManagerStore from './BoardStore';
export const BoardContext = createContext();
const BoardStore = createStore((builder) => {});
export const Board = forwardRef(
  ({ boardPlugin = [], ...canvasRawProp }, canvasRef) => {
    const [width, height] = useResize();
    // 实现画板的初始化信息
    return (
      <>
        <Provider store={ManagerStore}>
          <canvas
            {...canvasRawProp}
            width={width}
            height={height}
            ref={canvasRef}
          ></canvas>
          {boardPlugin.map((Plugin) => {
            if (Plugin.functional) {
              Plugin(canvasRef);
              return;
            }
            return <Plugin key={Plugin.name} board={canvasRef}></Plugin>;
          })}
        </Provider>
      </>
    );
  }
);
