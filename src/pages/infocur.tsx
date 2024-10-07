import infoc from "../styles/infocurs.module.css";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import { LightButton } from "@/components/buttons";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function InfoCur() {
  const router = useRouter()
  return (
    <>
      <div className={infoc.container}>
        <div className={infoc.bg}>
          <div onClick={() => router.back()} className={'fixed bg-white/50 p-4 left-3 top-3 rounded-full text-lg'}>
            <FaArrowLeft />
          </div>
        </div>
        <div className={infoc.info}>
          <div className={infoc.inC}>
            <p className={infoc.title}>Informações</p>
            <h3 className={infoc.instituicao}>Engenharia Informática</h3>
            <p className={infoc.dep}>Rel: DET(Departamento de Eng. e Tecnologias)</p>
          </div>
          <div className={infoc.time}>
            <Image
              className={infoc.loc}
              src={"/icons/time.svg"}
              alt="done"
              width={30}
              height={60}
              priority
            />
            <p className={infoc.txt}>5 anos</p>
          </div>
          <p>
            <span className={`${infoc.nstudents} ${infoc.purple}`}>
              300 estudantes
            </span>{" "}
            - Actualmente
          </p>
          <div className={infoc.desc}>
            O Instituto Superior Politécnico de Tecnologias e Ciências é uma
            instituição de ensino superior privada localizada no município do
            Talatona, cidade de Luanda, em Angola. A instituição tem como órgão
            de tutela o Ministério do Ensino Superior, Ciência, Tecnologia e
            Inovação.
          </div>
          <div className={infoc.btns}>
            <PurpleButton
              description="Fazer matrícula"
              redirect="/matricula"
            ></PurpleButton>
            <LightButton
              description="Ver requisitos"
              redirect="/requisitos"
            ></LightButton>
          </div>
        </div>
      </div>
    </>
  );
}
