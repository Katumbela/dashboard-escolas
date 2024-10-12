"use client"

import info from "@/styles/consultsM.module.css";
import info2 from "@/styles/consultas/infoM.module.css";
import Head from "next/head";
import Top from "@/components/top";
import cards from "@/styles/cards.module.css";
import Menu from "@/components/menu";
import CartaoMultischool from "@/components/cards";
import { selectUser } from "@/store";
import { useAppSelector } from "@/hooks";
import { MCard } from "@/components/global/m_card/card";
import { Header } from "@/components/header";

export default function InfoMulti() {

  const student = useAppSelector(selectUser)

  return (
    <>
      <div className={"container"}>
        <Head>
          {/* <title>Consultas</title> */}
          <link
            rel="cardsheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </Head>
        <Header className="mt-6" showLogo={false} showBackButton={true} title="Informações Multischool" />

        <div className={``}>
          <div  >

            <MCard clickable={false} balance={student?.account!.balance ? student?.account!.balance : 0} card_number={student?.account?.card_number ? student!.account?.card_number : ''} hodler={student!.studentName} provider="MultSchool" />

          </div>
          <br />
          <br />

          <div className={`container `}>
            <div className={info2.items}>
              <p className={info2.dark_g}>Tipo de conta</p>
              <p className={`${info2.primary} ${info2.name}`}>Estudante</p>
            </div>
            <div className={info2.items}>
              <p className={info2.dark_g}>Número de conta</p>
              <p className={`${info2.primary} ${info2.anolec}`}>
                {student?.account?.account_number}
              </p>
            </div>
            <div className={info2.items}>
              <p className={info2.dark_g}>Titular</p>
              <p className={`${info2.primary} ${info2.semestre}`}>
                {student?.studentName}
              </p>
            </div>
            <div className={info2.items}>
              <p className={info2.dark_g}>IBAN</p>
              <p className={`${info2.primary} ${info2.anoA}`}>
                -------------------
              </p>
            </div>

            <div className={info2.items}>
              <p className={info2.dark_g}>Estado</p>
              <p className={`${info2.success} ${info2.curso}`}>Disponível</p>
            </div>
            <div className={info2.items}>
              <p className={info2.dark_g}>Banco</p>
              <p className={`${info2.blue} ${info2.turma}`}>
                ------------------
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Menu></Menu>
      </div>
    </>
  );
}
