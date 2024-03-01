"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Languaje = () => {

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
     return newPathname
  }
  
    return <div>
    <Link href={changeLanguaje(pathname)} >ES | EN</Link>
  </div>;
};
