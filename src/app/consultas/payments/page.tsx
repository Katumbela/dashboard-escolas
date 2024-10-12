"use client"
import pay from "@/styles/consultas/payments.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { routes } from "@/infra";
import { useRouter } from "next/navigation";

export default function Payments() {
  const router = useRouter()
  return (
    <div className={pay.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <div className="block w-full">
        <Header title="Pagamentos" showBackButton={true} />

      </div>
      <div className={pay.lista}>
        <p>Lista de pagamentos</p>
        <div className={pay.items}>
          <div className={pay.row1}>
            <div onClick={() => router.push(routes.PAY_SCHOOL_ROUTE)} className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/cons/payments/uni.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Instituição</p>
              </div>
            </div>
            <Link href="/pagAlim" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/cons/payments/meal.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Alimentação</p>
              </div>
            </Link>
            <Link href="/pagTransp" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/cons/payments/bus.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Transporte</p>
              </div>
            </Link>
          </div>
          <div className={pay.row1}>
            <Link href="/pagCurso" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/cons/payments/room.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Cursos</p>
              </div>
            </Link>
            <Link href="/pagGym" className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/cons/payments/fit.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Fit-student</p>
              </div>
            </Link>
            <div onClick={() => router.push(routes.TRANSFERS_ROUTE)} className={pay.item}>
              <div className={pay.inner}>
                <div className={pay.icon}>
                  <Image
                    className={pay.avatar}
                    src={"/icons/cons/payments/transf.svg"}
                    alt="ba2ck"
                    width={25}
                    height={25}
                    priority
                  />
                </div>
                <p>Transferências</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={pay.pendentes}>
        <p>Pendentes</p>
        <div className={pay.pending}>
          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Propina Julho</p>
              <small>05.07.2524</small>
            </div>
            <div className={pay.amount}>
              <p className={`${pay.price} ${pay.warning}`}>50.000,00 kz</p>
            </div>
          </div>
          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Propina Julho</p>
              <small>05.07.2524</small>
            </div>
            <div className={pay.amount}>
              <p className={`${pay.price} ${pay.warning}`}>50.000,00 kz</p>
            </div>
          </div>
          <div className={pay.details}>
            <div className={pay.icon}>
              <Image
                className={pay.avatar}
                src={"/icons/cons/money.svg"}
                alt="ba2ck"
                width={25}
                height={25}
                priority
              />
            </div>
            <div className={pay.desc}>
              <p>Propina Julho</p>
              <small>05.07.2524</small>
            </div>
            <div className={pay.amount}>
              <p className={`${pay.price} ${pay.warning}`}>50.000,00 kz</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Menu></Menu>
    </div>
  );
}
