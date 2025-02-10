import React, { ReactNode } from "react";
import { SwipeableHandlers } from "react-swipeable";

interface IModalWrapperProps {
  children: ReactNode;
  handler: SwipeableHandlers;
  open: boolean;
  filter: { filter: any; height: number };
}

const ModalWrapper = ({
  children,
  handler,
  open,
  filter,
}: IModalWrapperProps) => {
  return (
    <>
      <div
        {...handler}
        className={`content ${open ? "open" : "closed"}`}
        style={{ height: `${filter?.height}px` }}
      >
        {open && <>{children}</>}
      </div>
      {open && <div className="overlay"></div>}
    </>
  );
};
export default ModalWrapper;
