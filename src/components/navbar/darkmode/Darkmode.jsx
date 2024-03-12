"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./darkmode.module.css"

export const Darkmode = () => {
  const [dark, setDark] = useState(() => {
    const savedState = localStorage.getItem('dark');
    return savedState ? JSON.parse(savedState) : '';
  });

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(dark));
  }, [dark]);

  if (dark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <button className={styles.imgContainer} onClick={() => setDark((prev) => !prev)}>
      {dark ? (
        <Image  alt="" src="/icons/dark.svg" width={12} height={12} />
      ) : (
        <Image alt="" src="/icons/light.svg" width={14} height={14} />
      )}
    </button>
  );
};
