import React, { useState } from "react";
import type { DrawerProps } from "antd";
import { Drawer } from "antd";
import styles from "./Drawer.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

const DrawerComponent: React.FC<DrawerComponent> = ({
  isDrawerOpen,
  setDrawerOpen,
  children,
}) => {
  const [placement] = useState<DrawerProps["placement"]>("right");

  const onClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Drawer
        placement={placement}
        closable={false}
        className={styles.drawerMain}
        onClose={onClose}
        open={isDrawerOpen}
        key={placement}
        autoFocus={false}
      >
        <div className={styles.drawerInner}>
          {children}

          <AiOutlineCloseCircle
            color="#fff"
            className={styles.closeIcon}
            size={30}
            onClick={onClose}
          />
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
