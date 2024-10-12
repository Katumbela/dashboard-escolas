"use client"
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles2 from "@/styles/inicio.module.css";
import styles from "@/styles/cards.module.css";
import Menu from "@/components/menu";
import CartaoMultischool, { CartaoEstudante } from "@/components/cards";
import InstituicaoResume, { MultischoolResume } from "@/components/resumeHome";
import { useAppSelector } from "@/hooks";
import { selectUser } from "@/store";
import { NavBar } from "@/components";
import { MCard } from "@/components/global/m_card/card";
import { TransactionList } from "@/components/global/transactionTable/transactrionTable";
import type { Transaction } from "@/infra/interfacess";
import { TransactionService } from "@/services/transactions_services";
import usePeriodicStudentUpdate from "@/hooks/usePeriodicStudentUpdate";


export const responsiveCarouselDashboard = {
  superLargeDesktop: {
    breakpoint: { max: 2200, min: 1286 },
    items: 1,
    gap: 20
  },
  desktop: {
    breakpoint: { max: 1285, min: 800 },
    items: 1,
    gap: 20
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function HomeLoggedIn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % 2),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2),
  });

  const student = useAppSelector(selectUser)

  // No componente onde você chama o hook
  const adhesionNumber = student?.adhesionNumber ? String(student.adhesionNumber) : "";
  usePeriodicStudentUpdate({ studentAdhesionNumber: adhesionNumber });


  const TransactsService = new TransactionService()

  // Função assíncrona para buscar as transações
  async function getTransacts() {
    if (student?.account?._id) {
      const datas = await TransactsService.getTransactionsByAccount(student.account._id);
      return datas;
    }
    return [];
  }

  // useEffect para buscar as transações ao carregar o componente
  useEffect(() => {
    async function fetchTransactions() {
      const transacts = await getTransacts();
      console.log(transacts);
      setTransactions(transacts); // Atualizando o estado com as transações
    }

    fetchTransactions();
  }, []);

  return (
    <div  >
      {" "}
      < Head >
        <title>Os meus cartões</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head >
      <NavBar title={` ${student?.studentName}`} />

      {
        /*
      <Carousel
          responsive={responsiveCarouselDashboard}
          autoPlaySpeed={6000}
          showDots={false}
          renderDotsOutside={true}
          infinite={true}
          autoPlay={true}
       
        >
        */
      }

      <MCard balance={student?.account!.balance ? student?.account!.balance : 0} card_number={student?.account?.card_number ? student!.account?.card_number : ''} hodler={student!.studentName} provider="MultSchool" />

      <div className="container">
        <TransactionList transactions={transactions} />
        <br />
      </div>
      <br />


      <div className="hidden">

        <div className={styles2.carouselContainer} {...handlers}>
          <div
            className={`${styles2.carousel} ${styles.cards} ${styles2.cards}`}
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20
                }px))`,
            }}
          >
            <div
              className={`${styles2.cardWrapper} ${currentIndex === 0 ? styles2.activeCard : ""
                }`}
            >
              <CartaoMultischool />
            </div>

            <div
              className={`${styles2.cardWrapper} ${currentIndex === 1 ? styles2.activeCard : ""
                }`}
            >
              <CartaoEstudante />
            </div>
          </div>
        </div>
        {/* Resumo */}
        <div className={styles2.resume}>
          <ul>
            {currentIndex === 0 && (
              <>
                <MultischoolResume />
              </>
            )}

            {currentIndex === 1 && (
              <>
                <InstituicaoResume></InstituicaoResume>
              </>
            )}
          </ul>
        </div>
      </div>


      {
        /*
         </Carousel>
        */
      }
      {/* Menu */}
      <Menu />
    </div >
  );
}
