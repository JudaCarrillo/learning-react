import "./FollowMouse.css";
import { useEffect, useState } from "react";

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const text = enabled ? "Desactivar" : "Activar";
  const buttonClassName = enabled
    ? "mf-mouseFollowerDiv is-active"
    : "mf-mouseFollowerDiv";

  const handleClick = () => {
    setEnabled(!enabled);
  };

  // pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // cleanup method
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  // change body class name
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      console.log("cleanup");
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  return (
    <>
      <div
        className={buttonClassName}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={handleClick}>{text} seguir puntero</button>
    </>
  );
};
