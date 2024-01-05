import "./FollowMouse.css";
import { useEffect, useState } from "react";

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const text = enabled ? "Desactivar" : "Activar";

  const handleClick = () => {
    setEnabled(!enabled);
  };

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      position;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      setPosition({ x: 0, y: 0 });
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <div
        className="mf-mouseFollowerDiv"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={handleClick}>{text} seguir puntero</button>
    </>
  );
};
