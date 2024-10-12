import { useState } from "react";
import explore from "../../styles/explore.module.css";
import Image from "next/image";
import { PurpleButton2 } from "@/components/buttons";
import { InstitutionCard } from "@/components/institute-card/institute-card";
import { bgs } from "@/utils/image-exporter";
import { Header } from "@/components/header";
import Button from "@/components/global/button/button";
import { routes } from "@/infra";


export default function Explore() {
  const [selectedOption, setSelectedOption] = useState("Angola");

  const [checked, setChecked] = useState('iem')

  return (
    <>
      <div className={'container'}>
        <Header showBackButton={true} />

        <h2 className="text-2xl font-extrabold text-center">Selecione uma opção</h2>
        <br />
        <br />
        <div className="container flex justify-center gap-5 text-white ">
          <InstitutionCard
            title="IEM - Instituições do Ensino Medio"
            description="Instituições do Ensino Médio"
            available="980"
            backgroundImage={bgs.school_choose_1.src}
            checked={checked === 'iem'}
            onClick={() => setChecked('iem')}
          />
          <InstitutionCard
            title="IES - Instituições do Ensino Superior"
            description="Instituições do Ensino Superior"
            available="130"
            backgroundImage={bgs.school_choose_2.src}
            checked={checked === 'ies'}
            onClick={() => setChecked('ies')}
          />
        </div>
        <br />
        <div className={explore.info}>
          <div className={explore.content}>
            {checked === "iem" ? (
              <>
                <h4>Explore opções de ensino médio!</h4>
                <div className={'flex gap-2 my-3'}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={20}
                    height={40}
                    priority
                  />
                  <p className="my-auto">Preparação Acadêmica</p>
                </div>
                <div className={'flex gap-2 my-3'}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={20}
                    height={40}
                    priority
                  />
                  <p className="my-auto">Apoio e Orientação</p>
                </div>
                <div className={'flex gap-2 my-3'}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={20}
                    height={40}
                    priority
                  />
                  <p className="my-auto">Ambiente de Crescimento</p>
                </div>
              </>
            ) : (
              <>
                <h4>Explore opções de ensino superior!</h4>
                <div className={'flex gap-2 my-3'}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={20}
                    height={40}
                    priority
                  />
                  <p className="my-auto">Especialização</p>
                </div>
                <div className={'flex gap-2 my-3'}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={20}
                    height={40}
                    priority
                  />
                  <p className="my-auto">Oportunidades de Carreira</p>
                </div>
                <div className={'flex gap-2 my-3'}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={20}
                    height={40}
                    priority
                  />
                  <p className="my-auto">Pesquisa e Inovação</p>
                </div>
                <div className={'flex gap-2 my-3'}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={20}
                    height={40}
                    priority
                  />
                  <p className="my-auto">Experiência Universitária</p>
                </div>
                <div className={'flex gap-2 my-3'}>
                  <Image
                    className={explore.logo}
                    src={"/icons/done.svg"}
                    alt="done"
                    width={20}
                    height={40}
                    priority
                  />
                  <p className="my-auto">Desenvolvimento Profissional</p>
                </div>
              </>
            )}
          </div>
          <div className={explore.btn}>
            <Button
              className="py-3 w-full"
              link={routes.SEARCH_SCHOOL_ROUTE}            >
              Explorar
            </Button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
