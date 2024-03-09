"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const Languaje = () => {
  /** 
  const [handleHeight, setHandleHeight] = useState(false)

  const handleClick = (heightY) => {
    window.scrollTo({
      top: heightY,
      behavior: 'smooth'
    })
  };

  useEffect(() => {
    const actualHeight = window.pageYOffset || document.documentElement.scrollTop;
    localStorage.setItem('actualHeight', actualHeight);
    handleClick(actualHeight)
  }, [handleHeight] )
 **/

  const pathname = usePathname();
  function changeLanguaje(path) {
    const arrayOfRoutes = path.split("/");
    let languaje = arrayOfRoutes[1];
    if (languaje === "en") {
      arrayOfRoutes[1] = "es";
    } else {
      arrayOfRoutes[1] = "en";
    }
    const newPathname = arrayOfRoutes.join("/");
    return newPathname;
  }

  return (
    <div>
      <Link
        /**onClick={() => {setHandleHeight(true)}}**/ href={changeLanguaje(
          pathname
        )}
      >
        ES | EN
      </Link>
    </div>
  );
};
