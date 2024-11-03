
"use client"
import Head from "next/head";
import styles from "@/styles/cards.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import CartaoMultischool, {
  CartaoEstudante,
  CartaoEstagiario,
} from "@/components/cards";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";
import { MCard } from "@/components/global/m_card/card";
import { Header } from "@/components/header";
import BottomNav from "@/components/global/bottomNav/bottomNav";

// import "bootstrap-icons/font/bootstrap-icons.css"; // Importando ícones

export default function Cards() {
  const student = useAppSelector(selectUser)

  return (
    <div className={styles.container}>
      <Head>
        <title>Os meus cartões</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <Header title="Os meus cartões" showBackButton={true} />

      <div className={styles.cards}>

        <MCard balance={student?.account!.balance ? student?.account!.balance : 0} card_number={student?.account?.card_number ? student!.account?.card_number : ''} hodler={student!.studentName} provider="MultSchool" />
        <CartaoEstudante></CartaoEstudante>
        <CartaoEstagiario></CartaoEstagiario>
        <br />
        <br /><br />
        <br />
        <br />
      </div>
      <BottomNav />
    </div>
  );
}
