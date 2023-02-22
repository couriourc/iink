/*
 * @Author: CouriourC 
 * @Date: 2023-02-21 19:21:07 
 * @Last Modified by: CouriourC
 * @Last Modified time: 2023-02-21 19:35:12
 */

export function useResize() {
    const [[width, setWidth], [height, setHeight]] = [
      useState(window.innerWidth || document.body.offsetWidth),
      useState(window.innerWidth || document.body.offsetWidth),
    ];
    useEffect(() => {
      let listener = window.addEventListener('resize', (event) => {
        const windowX = window.innerWidth || document.body.offsetWidth;
        const windowY = window.innerHeight || document.body.offsetHeight;
  
        setWidth(() => windowX);
        setHeight(() => windowY);
      });
      return () => {
        window.removeEventListener(listener, (_) => _);
      };
    });
    return [width, height];
  }