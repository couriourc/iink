import './Todo.css';
import { memo } from 'react';
import { useState } from 'react';
export const TodoList = memo(
  ({
    todos = [
      {
        item: '实现基本的画布内容',
        is_checked: true,
      },
      {
        item: '实现基本的换笔功能',
        is_checked: true,
      },
    ],
  }) => {
    function useDragger(elm) {
      let [dragFlag, setDragFlag] = useState(false);
      let [posX, setPosX] = useState(0);
      let [posY, setPosY] = useState(0);
      function start(event) {
        setDragFlag(true);

        setPosX(() => {
          return event.clientX;
        });
        setPosY(() => {
          return event.clientY;
        });
      }
      function move(event) {
        if (!dragFlag) {
          return;
        }
        
        setPosX(() => {
          return event.clientX;
        });
        setPosY(() => {
          return event.clientY;
        });
      }
      function end() {
        setDragFlag(false);
      }
      return {
        posX,
        posY,
        start,
        move,
        end,
      };
    }
    const dragger = useDragger();
    return (
      <ul
        className={'todo-container'}
        draggable
        onDragStart={dragger.start}
        onDrag={dragger.move}
        onDragEnd={dragger.end}
        style={{ transform: `translate( ${dragger.posX}px,${dragger.posY}px)` }}
      >
        {dragger.posX}
        {/*  */
        [...todos].map((item) => {
          return <TodoItem key={item.item} {...item}></TodoItem>;
        })}
      </ul>
    );
  }
);

export const TodoItem = ({ item, is_checked }) => {
  return (
    <li>
      <input type={'checkbox'} value={is_checked}></input>
      <span>{item}</span>
    </li>
  );
};
