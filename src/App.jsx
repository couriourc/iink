import { createContext } from 'react';
import { useRef } from 'react';
import './App.css';
// import { Board, Pen, FloatingButton, Pointer } from './lib';
import { Board, Pen, Pointer } from './Component';
import { TodoList } from './Todo';

const CanvasProvider = createContext();
function App() {
  let canvas = useRef(null);
  return (
    <>
      {/* Todo Item  */}
      <TodoList></TodoList>
      <Board ref={canvas} boardPlugin={[Pen(), Pointer()]}></Board>
    </>
  );
}

export default App;
