"use client"
import Header from "@/components/head";
import cons from "../../styles/consultsM.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import { selectUser } from "@/store";
import { useAppSelector } from "@/hooks";
import usePeriodicStudentUpdate from "@/hooks/usePeriodicStudentUpdate";
import { routes } from "@/infra";
import { NumberUtils } from "@/utils";
import { MCard } from "@/components/global/m_card/card";

export default function ConsultsM() {

  const student = useAppSelector(selectUser)

  // No componente onde você chama o hook
  const adhesionNumber = student?.adhesionNumber ? String(student.adhesionNumber) : "";
  usePeriodicStudentUpdate({ studentAdhesionNumber: adhesionNumber });


  return (
    <div className={cons.container}>
      <Head>
        {/* <title>Consultas</title> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Header title="Consultas" />
      <Top information="Consultas" pagina="cards"></Top>


      <MCard balance={student?.account!.balance ? student?.account!.balance : 0} card_number={student?.account?.card_number ? student!.account?.card_number : ''} hodler={student!.studentName} provider="MultSchool" />


      <div className={cons.options}>
        <Link href={routes.CONSULT_MOVMENTS_ROUTE} className={cons.op}>
          <div className={cons.circle}>
            <Image
              className={cons.arrow}
              src={"/icons/cons/mov.svg"}
              alt="ba2ck"
              width={25}
              height={25}
              priority
            />
          </div>
          <p>Movimentos</p>
        </Link>
        <Link href="/consultas/payments" className={cons.op}>
          <div className={cons.circle}>
            <Image
              className={cons.arrow}
              src={"/icons/cons/pag.svg"}
              alt="ba2ck"
              width={30}
              height={30}
              priority
            />
          </div>
          <p>Pagamentos</p>
        </Link>
        <Link href="/consultas/infoMulti" className={cons.op}>
          <div className={cons.circle}>
            <Image
              className={cons.arrow}
              src={"/icons/cons/info.svg"}
              alt="ba2ck"
              width={25}
              height={25}
              priority
            />
          </div>
          <p>Informações</p>
        </Link>
      </div>

      <div className={cons.available}>
        <div className={cons.saldo}>
          <div className={cons.inner}>
            <p>Saldo disponível</p>
            <h2 className={cons.amount}>{NumberUtils.formatCurrency(student?.account?.balance ? student?.account?.balance : 0)} </h2>
          </div>
        </div>
        <Link href={routes.CONSULT_CREDITS_ROUTE} className={cons.creditos}>
          <div className={cons.inner}>
            <Image
              className={cons.arrow}
              src={"/icons/cons/pag.svg"}
              alt="ba2ck"
              width={35}
              height={35}
              priority
            />
            <p>Créditos</p>
          </div>
        </Link>
      </div>
      <div className={cons.count}>
        <div className={cons.chart}>
          <Image
            className={cons.arrow}
            src={"/icons/cons/chart.svg"}
            alt="ba2ck"
            width={130}
            height={130}
            priority
          />
        </div>
        <div className={cons.resume}>
          <Image
            className={cons.arrow}
            src={"/icons/cons/bullet.svg"}
            alt="ba2ck"
            width={130}
            height={130}
            priority
          />
        </div>
      </div>
      <Menu></Menu>
    </div>
  );
}
