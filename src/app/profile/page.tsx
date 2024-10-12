"use client"
import { Header } from "@/components/header";
import candidatura from "@/styles/perfil.module.css";
import Head from "next/head";
import QRCode from 'qrcode';
import Menu from "@/components/menu";
import Image from "next/image";
import { useAppSelector } from "@/hooks";
import usePeriodicStudentUpdate from "@/hooks/usePeriodicStudentUpdate";
import { selectUser } from "@/store";
import { useRouter } from "next/navigation";
import { users } from "@/utils/image-exporter";
import { useEffect, useState } from "react";

export default function ResultadosBolsas() {

  const student = useAppSelector(selectUser)
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);


  // No componente onde você chama o hook
  const adhesionNumber = student?.adhesionNumber ? String(student.adhesionNumber) : "";
  usePeriodicStudentUpdate({ studentAdhesionNumber: adhesionNumber });

  const router = useRouter()
  const studentInfo = student
    ? `Name: ${student.studentName}, Account: ${student.account?.account_number}. Generated By MultiSchool System`
    : 'No student info available';



  useEffect(() => {
    if (studentInfo) {
      // Gerar o QR Code com base nas informações do estudante
      QRCode.toDataURL(studentInfo)
        .then((url: string) => setQrCodeUrl(url))
        .catch((err: any) => console.error(err));
    }
  }, [studentInfo]);

  return (
    <>
      <Header title="Meu Perfil  " showBackButton={true} showLogo={false} />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Head>
      <br />
      <div className={candidatura.container}>

        <div className={candidatura.foto}>
          <Image src={users.user_default} width={130} height={130} className="h-[5em] rounded-full border-2 border-primary w-[5em]" alt="" />

          <h2 className="mb-4">{student?.studentName}</h2>
          <br />
        </div>
        <div className={candidatura.info}>
          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Número de estudante</p>
            <p className={`${candidatura.primary} ${candidatura.estnum}`}>
              {student?.adhesionNumber}
            </p>
          </div>

          {/* <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Nome</p>
            <p className={`${candidatura.primary} ${candidatura.name}`}>
              Ana Correia de Assis Diogo
            </p>
          </div> */}

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Curso</p>
            <p className={` ${candidatura.curso}`}>{student?.course ? student?.course : '--------------'}</p>
          </div>

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Média anual</p>
            <p className={`${candidatura.primary} ${candidatura.semestre}`}>
              15 valores
            </p>
          </div>

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Idade</p>
            <p className={`${candidatura.primary} ${candidatura.anolec}`}>
              22 anos
            </p>
          </div>

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Data da candidatura</p>
            <p className={`${candidatura.primary} ${candidatura.anoA}`}>
              17/09/24 às 10h:40:30
            </p>
          </div>

          <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Estado</p>
            <p className={`${candidatura.success} ${candidatura.turma}`}>
              Aprovado
            </p>
          </div>
        </div>
        <div className={candidatura.qrcode}>
          <div className={candidatura.qrcode}>
            {/* Verificar se o QR Code foi gerado e exibir */}
            {qrCodeUrl ? (
              <Image src={qrCodeUrl} width={150} height={150} alt="QR Code" />
            ) : (
              <p>Carregando QR Code...</p>
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Menu></Menu>
      </div>

      <br />
      <br />
      <br />
    </>
  );
}
