"use client";

import { useState } from "react";
import Image from "next/image";

export const Darkmode = () => {
  const [dark, setDark] = useState(false);

  if (dark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <button onClick={() => setDark((prev) => !prev)}>
      {dark ? (
        <Image alt="" src="/icons8-dark-24.png" width={10} height={10} />
      ) : (
        <Image alt="" src="/icons8-sun-30.png" width={10} height={10} />
      )}{" "}
    </button>
  );
};
