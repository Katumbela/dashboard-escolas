import details from "../../styles/detailsI.module.css";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import { LightButton } from "@/components/buttons";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { FaListAlt } from "react-icons/fa";
import Button from "@/components/global/button/button";
import { routes } from "@/infra";

export default function DetailsI() {
  return (
    <>
      <div className={details.container}>
        <div className={details.bg}>
          <Link href="search" className={'fixed bg-white/50 p-4 left-3 top-3 rounded-full text-lg'}>
            <FaArrowLeft />
          </Link>
          <div className={'bg-primary/90 -bottom-8 right-5 absolute p-4 rounded-full h-[5em] w-[5em] grid items-center place-content-center text-white'}>
            <Link href="/courses" className={details.courses}>
              <div className={details.in}>
                <FaListAlt
                  className="m-auto text-2xl"
                />
                <p className="text-sm">Cursos</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={details.info}>
          <p>Informações</p>
          <h3 className={details.instituicao}>
            ISPTEC - Instituto Superior Politécnico de Tecnologias e Ciências
          </h3>
          <div className={details.location}>
            <Image
              className={details.loc}
              src={"/icons/location.svg"}
              alt="done"
              width={30}
              height={60}
              priority
            />
            <p className={details.txt}>Município da Ingombota, Luanda</p>
          </div>
          <p>
            <span className={`${details.nstudents} ${details.purple}`}>
              6000 estudantes
            </span>{" "}
            - Actualmente
          </p>
          <div className={details.desc}>
            O Instituto Superior Politécnico de Tecnologias e Ciências é uma
            instituição de ensino superior privada localizada no município do
            Talatona, cidade de Luanda, em Angola. A instituição tem como órgão
            de tutela o Ministério do Ensino Superior, Ciência, Tecnologia e
            Inovação.
          </div>
          <br />
          <br />
          <div className={'space-y-4 w-full  '}>
            <Button
              variant="primary"
              className="py-3 w-full"
              link={routes.ENROLLEMENTS_ROUTE}
            >Fazer matrícula</Button>
            <Button
              variant="outlined-black"
              className="py-3 w-full"
            >Ver requisitos</Button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
