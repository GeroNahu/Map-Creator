import React from "react";
import "../Styles/drawer.css";
const windowsWidth = window.innerWidth;

const Drawer = ({
  drawerPosition,
  setDrawerPosition,
  platform,
  divToolsContainerWidth,
  transition,
  setTransition,
}) => {
  function handleDrag(e) {
    const coord = e.changedTouches?.[0]?.clientX || e.clientX;
    if (coord !== 0)
      setDrawerPosition(
        Math.max(Math.min(divToolsContainerWidth, windowsWidth - coord), 0)
      );
  }
  const handleTransition = () => {
    setTransition(false);
  };
  const handleDragStart = () => {
    return handleTransition();
  };
  const handleDragEnd = (e) => {
    const coord = e.changedTouches?.[0]?.clientX || e.clientX;
    setTransition(true);
    setDrawerPosition(
      e.view.innerWidth - coord > divToolsContainerWidth / 2
        ? Math.max(divToolsContainerWidth, 0)
        : Math.min(divToolsContainerWidth, 0)
    );
  };
  return (
    <div
      className="drawer"
      onDragStart={() => handleDragStart()}
      onDrag={handleDrag}
      onDragEnd={(e) => {
        e.preventDefault();
      }}
      onTouchStart={() => handleDragStart()}
      onTouchMove={handleDrag}
      onTouchEnd={handleDragEnd}
      style={{
        display: platform === "Windows" ? "none" : "flex",
        right: `${drawerPosition}px`,
        transition: transition ? "400ms linear" : "none",
      }}
    >
      <span className="drawerIcon1" />
      <span className="drawerIcon2" />
    </div>
  );
};
export default Drawer;
