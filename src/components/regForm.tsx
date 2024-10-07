import { useState } from "react";
import InputDefault from "./global/input-default/input";
import Button from "./global/button/button";
import { Header } from "./header";
import { AlertUtils, RANDOM_CODE } from "@/utils";
import SelectDefault from "./select-default/select-default";
import { StudentService } from "@/services/student_service";
import type { Student } from "@/infra/interfacess";
import { FaCheck } from "react-icons/fa6";
import { routes } from "@/infra";
import type { RegistrationData } from "@/pages/matricula";
import { useRouter } from "next/navigation";


// Props que o componente vai receber
interface RegistrationFormProps {
  onSubmit: (data: RegistrationData) => void;
  school_id: number
  school_name: string
  course: string
  course_id: number
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ course_id, school_id, course, school_name }) => {
  const [formData, setFormData] = useState<Student>({
    adhesionNumber: RANDOM_CODE,
    registrationNumber: "",
    studentName: "",
    class: "",
    shift: "",
    phoneNumber: "",
    studentEmail: "",
    course: course,
    identificationNumber: "",
    registrationYear: new Date().getFullYear() - 3,
    password: "",
  });
  const [registered, setRegistered] = useState(false)
  const [loading, setLoading] = useState(false)
  //const [error, setError] = useState('')
  const navigate = useRouter()


  const handleSubmit = async () => {
    const student = new StudentService();
    const requiredFields = [
      formData.registrationNumber,
      formData.studentName,
      formData.class,
      formData.shift,
      formData.phoneNumber,
      formData.identificationNumber,
      formData.registrationYear,
      formData.password,
    ];

    const areRequiredFieldsFilled = requiredFields.every((field) => {
      if (typeof field === 'string') {
        return field.trim() !== "";
      }
      return field !== null && field !== undefined;
    });

    if (!areRequiredFieldsFilled) {
      AlertUtils.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);
    try {
      // Primeiro, cria o estudante
      const studentData = await student.createStudent(formData);
      if (!studentData) {
        AlertUtils.error(studentData.statusCode);

      }
      // Se a criação do estudante for bem-sucedida, então matricula
      const enrollData = {
        studentId: studentData.id,
        schoolId: school_id,
        courseId: course_id,
        enrolledAt: new Date(),
      };

      await student.enrollStudent(enrollData);
      console.log(studentData);
      setRegistered(true);
    } catch (error: any) {
      console.log(error.message);
      AlertUtils.error('Este aluno ou conta já existe. Por favor, verifique os dados ou faça login.');

      // Verifica se o erro é um conflito de duplicação
      if (error.response && error.response.status === 409) {
        AlertUtils.error('Este aluno ou conta já existe. Por favor, verifique os dados.');
      } else {
        AlertUtils.error('Ocorreu um erro ao tentar criar sua conta, tente novamente!');
      }
    } finally {

      // setLoading(false);
    }
  };



  return (
    <>
      <div className="mt-2 ">
        <Header showBackButton={true} />
      </div>
      {
        registered ?
          <>
            <div className="grid items-center h-[calc(100vh-10rem)] place-content-center">

              <div>
                <div className="mx-auto rounded-full bg-green-500/30 h-[7em] grid items-center place-content-center w-[7em]">
                  <FaCheck className="text-5xl" />
                </div>
                <br />
                <h2 className="text-2xl font-bold text-center text-green-600">Registro Bem Sucedido</h2>
                <br />
                <center className="w-[70%] mx-auto">
                  <span className="text-slate-500">Seu registro foi feito com sucesso, verifique seu email para confirmar sua conta</span>

                  <Button className="w-full py-2 mt-8 " onClick={() => navigate.push(routes.LOGIN_ROUTE)}>Fazer Login</Button>

                </center>

              </div>
            </div>
          </>
          :
          <div className="container py-3">
            <div className="flex flex-col gap-2 mb-2">
              <h2 className="text-4xl font-bold">Dê os seus primeiros passos </h2>
              <span className="text-slate-500">Junte-se à nossa comunidade e comece a sua jornada connosco</span>
              <b className="text-primary">{school_name}</b>
            </div><InputDefault
              disabled
              className="my-4"
              type="text"
              name="adhesionNumber"
              value={formData.adhesionNumber}
              onChange={(e) => setFormData({ ...formData, adhesionNumber: Number(e.target.value) })}
              placeholder="Número de Adesão"
              required
            />

            <InputDefault
              className="my-4"
              disabled={loading}
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
              placeholder="Número de Processo (opcional)"
              required
            />

            <InputDefault
              className="my-4"
              type="text"
              disabled={loading}
              name="studentName"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              placeholder="Nome Completo"
              required
            />

            <InputDefault
              className="my-4"
              type="text"
              disabled={loading}
              name="class"
              value={formData.class}
              onChange={(e) => setFormData({ ...formData, class: e.target.value })}
              placeholder="Turma"
              required
            />

            <SelectDefault
              className="py-2"
              disabled={loading}
              name="shift"
              value={formData.shift}
              onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
              options={[
                { value: 'manhã', label: 'Manhã' },
                { value: 'tarde', label: 'Tarde' },
                { value: 'noite', label: 'Noite' },
              ]}
              placeholder="Selecione o turno"
              required
            />

            <InputDefault
              className="my-4"
              disabled={loading}
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              placeholder="Telefone"
              required
            />

            <InputDefault
              className="my-4"
              disabled={loading}
              type="email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={(e) => setFormData({ ...formData, studentEmail: e.target.value })}
              placeholder="Email do Aluno (Opcional)"
            />

            <InputDefault
              disabled
              className="my-4"
              type="text"
              name="course"

              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              placeholder="Curso"
              required
            />

            <InputDefault
              className="my-4"
              disabled={loading}
              type="text"
              name="identificationNumber"
              value={formData.identificationNumber}
              onChange={(e) => setFormData({ ...formData, identificationNumber: e.target.value })}
              placeholder="Número de Identificação"
              required
            />

            <InputDefault
              className="my-4"
              type="number"
              disabled={loading}
              name="registrationYear"
              value={formData.registrationYear}
              onChange={(e) => setFormData({ ...formData, registrationYear: Number(e.target.value) })}
              placeholder="Ano de Matrícula"
              required
            />

            <InputDefault
              className="my-4"
              type="password"
              disabled={loading}
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Senha"
              required
            />

            <Button loading={loading} disabled={loading} className="w-full py-2 mt-8 " onClick={handleSubmit}>Cadastrar</Button>

            <br />
          </div>
      }
    </>
  );
};

export default RegistrationForm;
