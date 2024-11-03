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

          <div className="container px-4 mx-auto">
            <div className="grid justify-center grid-cols-2 gap-4 place-content-center">
              <div className="flex flex-col">
                <p className="font-medium text-gray-600">Tipo de conta</p>
                <p className="font-semibold text-blue-600">Estudante</p>
              </div>

              <div className="flex flex-col">
                <p className="font-medium text-gray-600">Número de conta</p>
                <p className="font-semibold text-blue-600">{student?.account?.account_number}</p>
              </div>

              <div className="flex flex-col">
                <p className="font-medium text-gray-600">Titular</p>
                <p className="font-semibold text-blue-600">{student?.studentName}</p>
              </div>

              <div className="flex flex-col">
                <p className="font-medium text-gray-600">IBAN</p>
                <p className="font-semibold text-blue-600">-------------------</p>
              </div>

              <div className="flex flex-col">
                <p className="font-medium text-gray-600">Estado</p>
                <p className="font-semibold text-green-600">Disponível</p>
              </div>

              <div className="flex flex-col">
                <p className="font-medium text-gray-600">Banco</p>
                <p className="font-semibold text-blue-600">------------------</p>
              </div>
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
