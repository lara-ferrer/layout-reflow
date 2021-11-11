import './code.css';
import { useState, useRef, useLayoutEffect } from "react";

function Code(props) {
  const { isReflow } = props;

  const [isDark, setDark] = useState("false");

  const changeTheme = () => {
    setDark(!isDark);
  };

  const toggleClasses = !isDark ? "dark" : "light";
  const toggleNames = isDark ? "dark" : "light";


  const targetRef = useRef([]);

  let [width, setWidth] = useState(0);
  let [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    width = setWidth(targetRef.current.clientWidth);
    height = setHeight(targetRef.current.clientHeight);
  }, [width, height]);

  console.log(width);
  console.log(height);

  return (
    <>
        <div ref={targetRef} className={`square ${toggleClasses} ${isReflow ? "reflow" : "transform"}`}>
          <p>This box has a width of {width} pixels and a height of {height} pixels</p>
        </div>
        <button onClick={changeTheme}>Change to <strong>{`${toggleNames}`} mode</strong></button>
    </>
  );
}

export default Code;
