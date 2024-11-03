"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import splash from "@/styles/splash.module.css";
import Header from "@/components/head";
import { useAppSelector } from "@/hooks";
import { selectIsAuthenticated } from "@/store";
import { useRouter } from "next/navigation";


export default function Home() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  return (
    <>
      <Header title="Multischool AO" />
      {showSplash ? (
        <Splash isAuthenticated={isAuthenticated} />
      ) : (
        <div className={splash.container}>
          <Image
            className={splash.icon}
            src={"/img/logo.svg"}
            alt="Logotipo Multischool AO"
            width={150}
            height={150}
            priority
          />
        </div>
      )}
    </>
  );
}

export function Splash({ isAuthenticated }: { isAuthenticated: boolean }) {

  const router = useRouter()


  useEffect(() => {
    if (isAuthenticated) {
      router.push('/home'); // Redireciona para /home se estiver autenticado
    } else {
      const timer = setTimeout(() => {
        router.push('/welcome'); // Redireciona para /welcome se não estiver autenticado
      }, 10);

      return () => clearTimeout(timer); // Limpa o timer quando o componente for desmontado ou se o estado mudar
    }
  }, [isAuthenticated]); // Adiciona isAuthenticated como dependência

  return (
    <>
      <div className={splash.container_s}>
        <Image src={"/img/white.png"} alt="" width={210} height={90} priority />
      </div>
    </>
  );
}
