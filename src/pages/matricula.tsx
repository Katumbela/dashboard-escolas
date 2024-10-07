import PurpleButton from "@/components/buttons";
import matr from "../styles/matr.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RegistrationForm from "@/components/regForm";


// Definir a interface para os dados do registro
export interface RegistrationData {
  adhesionNumber: number;
  registrationNumber: string;
  studentName: string;
  class: string;
  shift: string;
  phoneNumber: string;
  studentEmail: string;
  course: string;
  identificationNumber: string;
  registrationYear: number;
  password: string;
}

// Definir a interface para os documentos a serem enviados
export interface DocumentData {
  idCard: File | null;
  photo: File | null;
  gradeDeclaration: File | null;
}



export default function Account() {

  //  const { school_id, school_name, course, course_id } = useParams();
  const [step, setStep] = useState<number>(1);
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);

  // Função para processar o formulário de cadastro
  const handleRegistrationSubmit = (data: RegistrationData) => {
    setRegistrationData(data);
    setStep(2); // Avança para o próximo passo
  };

  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 overflow-y-auto bg-white bg-m">
        {step === 1 && <RegistrationForm course_id={1} course={'Engenharia Eletrotécnica'} school_id={2} school_name={'ISPTEC'} onSubmit={handleRegistrationSubmit} />}
        {/*step === 2 && <DocumentUploadForm onSubmit={handleDocumentsSubmit} />*/}
      </div>
    </>
  );
}
