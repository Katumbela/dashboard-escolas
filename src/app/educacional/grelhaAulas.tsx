import Header from "@/components/head";
import aulas from "@/styles/educacional/grelhaAulas.module.css";
import Head from "next/head";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

export default function aulasimentos() {
  return (
    <>
      <Header title="Educacional - Bernardo Manuel"></Header>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <div className={aulas.container}>
        <Top information="Aulas online" pagina="aulason"></Top>
        <div className={aulas.resume}>
          <div className={aulas.info}>
            <Image
              className={aulas.avatar}
              src={"/avatars/manuel.svg"}
              alt="ba2ck"
              width={70}
              height={70}
              priority
            />
            <div className={aulas.inner}>
              <p className={aulas.name}>Bernardo Gelson Manuel</p>
              <p className={aulas.desc}>
                <span className={aulas.cadeira}>
                  Cálculo Diferencial e Integral I
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className={aulas.recents}>
          <h2>
            Disponíveis : <span className={aulas.totalAulas}>40 aulas</span>
          </h2>
          <small><span>400</span> Visualizações</small>
          <Link href="player" className={aulas.content}>
            <div className={aulas.back}></div>
            <div className={aulas.desc}>
              <div className={aulas.cadeiraDet}>
                <p className={aulas.title}>CDI I - CÁP I: Funções</p>
                <p className={aulas.ref}>1º Ano | 20 aulas</p>
                <p className={aulas.prof}>Bernardo Manuel</p>
              </div>
              <div className={aulas.videoR}>
                <small className={aulas.view}>390 visualizações</small>
                <small>|</small>
                <small className={aulas.time}> Há 2 dias</small>
              </div>
            </div>
          </Link>

          <Link href="player" className={aulas.content}>
            <div className={aulas.back}></div>
            <div className={aulas.desc}>
              <div className={aulas.cadeiraDet}>
                <p className={aulas.title}>CDI I - CÁP I: Funções</p>
                <p className={aulas.ref}>1º Ano | 20 aulas</p>
                <p className={aulas.prof}>Bernardo Manuel</p>
              </div>
              <div className={aulas.videoR}>
                <small className={aulas.view}>390 visualizações</small>
                <small>|</small>
                <small className={aulas.time}> Há 2 dias</small>
              </div>
            </div>
          </Link>

          <Link href="player" className={aulas.content}>
            <div className={aulas.back}></div>
            <div className={aulas.desc}>
              <div className={aulas.cadeiraDet}>
                <p className={aulas.title}>CDI I - CÁP I: Funções</p>
                <p className={aulas.ref}>1º Ano | 20 aulas</p>
                <p className={aulas.prof}>Bernardo Manuel</p>
              </div>
              <div className={aulas.videoR}>
                <small className={aulas.view}>390 visualizações</small>
                <small>|</small>
                <small className={aulas.time}> Há 2 dias</small>
              </div>
            </div>
          </Link>

          <Link href="player" className={aulas.content}>
            <div className={aulas.back}></div>
            <div className={aulas.desc}>
              <div className={aulas.cadeiraDet}>
                <p className={aulas.title}>CDI I - CÁP I: Funções</p>
                <p className={aulas.ref}>1º Ano | 20 aulas</p>
                <p className={aulas.prof}>Bernardo Manuel</p>
              </div>
              <div className={aulas.videoR}>
                <small className={aulas.view}>390 visualizações</small>
                <small>|</small>
                <small className={aulas.time}> Há 2 dias</small>
              </div>
            </div>
          </Link>

          <Link href="player" className={aulas.content}>
            <div className={aulas.back}></div>
            <div className={aulas.desc}>
              <div className={aulas.cadeiraDet}>
                <p className={aulas.title}>CDI I - CÁP I: Funções</p>
                <p className={aulas.ref}>1º Ano | 20 aulas</p>
                <p className={aulas.prof}>Bernardo Manuel</p>
              </div>
              <div className={aulas.videoR}>
                <small className={aulas.view}>390 visualizações</small>
                <small>|</small>
                <small className={aulas.time}> Há 2 dias</small>
              </div>
            </div>
          </Link>
        </div>
        <Menu/>
      </div>
    </>
  );
}