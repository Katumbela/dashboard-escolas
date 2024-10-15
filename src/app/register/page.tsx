"use client"

import { useState } from "react";
import RegistrationForm from "@/components/regForm";
import { useSearchParams } from "next/navigation";


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

  const matricula = useSearchParams();
  const school_id = matricula.get('school')
  const school_name = matricula.get('school_name')
  const course = matricula.get('chosen_course')
  const course_id = matricula.get('course')
  const [step, setStep] = useState<number>(1)
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);

  // Função para processar o formulário de cadastro
  const handleRegistrationSubmit = (data: RegistrationData) => {
    setRegistrationData(data);
    setStep(2); // Avança para o próximo passo
  };

  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 max-w-md mx-auto overflow-y-auto bg-white bg-m">
        {step === 1 && <RegistrationForm course_id={course_id ? course_id : ''} course={course ? course : ''} school_id={school_id ? school_id : ''} school_name={school_name ? school_name : ''} onSubmit={handleRegistrationSubmit} />}
        {/*step === 2 && <DocumentUploadForm onSubmit={handleDocumentsSubmit} />*/}
      </div>
    </>
  );
}
