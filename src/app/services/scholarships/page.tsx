import { Header } from "@/components/header";
import bolsas from "@/styles/services/bolsas/bolsas.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import InputDefault from "@/components/global/input-default/input";
import { FaSearch } from "react-icons/fa";

export default function BolsasEstudo() {
  return (
    <div className={bolsas.container}>
      <Head>
        <link
          rel="cardsheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <div className="block w-full"><Header title="Bolsas de estudo disponíveis" showBackButton={true} />

      </div>
      <div className={bolsas.top}>
        <p>Bolsas de estudo</p>
        <h2>30 disponíveis</h2>
      </div>

      <InputDefault
        leftIcon={<FaSearch />}
        className="w-full"
        type="text"
        placeholder="Pesquisar por descrição"

      />

      <div className={bolsas.list}>
        <div className={bolsas.top}>
          <p>Selecione uma opção</p>
          <p>Prazo</p>
        </div>
        <div className={bolsas.credL}>
          <Link href="verBolsa" className={bolsas.inner}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p className={bolsas.in}>Kwik invest: Bolsa est...</p>
            <p>10/10/24</p>
          </Link>
          <Link href="verBolsa" className={bolsas.inner}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p className={bolsas.in}>Kwik invest: Bolsa est...</p>
            <p>10/10/24</p>
          </Link>
          <Link href="verBolsa" className={bolsas.inner}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p className={bolsas.in}>Kwik invest: Bolsa est...</p>
            <p>10/10/24</p>
          </Link>
          <Link href="verBolsa" className={bolsas.inner}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p className={bolsas.in}>Kwik invest: Bolsa est...</p>
            <p>10/10/24</p>
          </Link>
          <Link href="verBolsa" className={bolsas.inner}>
            <Image src={"/icons/kwik.svg"} width={60} height={60} alt="" />
            <p className={bolsas.in}>Kwik invest: Bolsa est...</p>
            <p>10/10/24</p>
          </Link>
        </div>
      </div>

      <Menu></Menu>
    </div>
  );
}
