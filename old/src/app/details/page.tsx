
"use client"
import { useState, useEffect } from 'react';
import { SchoolService } from '@/services/schools_services';
import type { School } from '@/infra/interfacess';
import { bgs } from '@/utils/image-exporter';
import { FaSpinner } from 'react-icons/fa6';
import { getTotalEnrollments } from '@/utils/get-total-enrollements';
import { FaExclamationCircle } from 'react-icons/fa';
import { routes } from '@/infra';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/header';
import Button from '@/components/global/button/button';
import { Modal } from '@/components/modal/modal';

export default function ViewSchoolDetails() {
  const school_param = useSearchParams();
  const school_id = school_param.get('school')
  const [schools, setSchools] = useState<School>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRequisitesOpen, setIsModalRequisitesOpen] = useState(false);
  const [loadSchools, setLoadSchools] = useState(true)

  useEffect(() => {
    const fetchSchools = async () => {

      const service = new SchoolService();
      const data = await service.getSchoolsById(school_id ? school_id : '');
      setSchools(data);
      setLoadSchools(false)
    };

    fetchSchools();
  }, []);

  const navigate = useRouter()

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 overflow-y-auto bg-white">
      <Image src={bgs.bg_triangles} className="fixed -z-10 top-0 left-0 h-screen opacity-[.2]" alt="" />

      <div className="w-full h-screen max-w-md mx-auto b">
        <Header iconColor='text-white' className='fixed top-0 left-0 right-0 z-50 max-w-md py-5 mx-auto text-white' showLogo={false} title={''} showBackButton={true} />

        <div className='absolute top-0 left-0 right-0 max-w-md mx-auto' style={{ height: "250px", background: `linear-gradient(90deg, #0000008C, #0000008C), url(${schools?.school_cover}) center center`, backgroundSize: "cover" }}>
        </div>
        <div className="container mt-[250px]">
          <h2 className='mb-2 font-extralight text-slate-400'>Informações </h2>



          {
            loadSchools ?
              <div>
                <FaSpinner className='mx-auto my-4 text-2xl animate-spin' />
                <center>
                  <span className="text-xs text-slate-400">Carregando escolas...</span>
                </center>
              </div>
              :
              <div className='z-100'>
                <h1 className="text xl">{schools?.schoolName}</h1>
                <span className="text-sm text-slate-400">{schools?.province}</span><br />
                <span className="text-sm text-slate-400">{getTotalEnrollments(schools?.courses ? schools?.courses : [])} estudantes - Atualmente</span>
                <br />
                <br />
                <p className="text-sm">
                  {schools?.about}
                </p>
                <br />
                <br />
                <Button variant='primary' onClick={() => setIsModalOpen(true)} className='w-full py-3'>Fazer Matrícula</Button>
                <Button variant='outlined' onClick={() => setIsModalRequisitesOpen(true)} className='w-full py-3 mt-3'>Ver Requisitos</Button>
                <br />
                <br />

                <Modal className='max-w-md mx-auto ' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                  <h2> Escolha o curso</h2>
                  <br />
                  <ul>
                    {
                      schools?.courses.map((course, index) => (
                        <li onClick={() => { navigate.push(`${routes.REGISTER_ROUTE}?school=${school_id}&school_name=${schools.schoolName}&chosen_course=${course.course_name}&course=${course._id}`) }} key={index} className='px-5 py-3 my-4 transition-all border-2 cursor-pointer hover:bg-primary/10 hover:font-bold active:text-white active:bg-primary active border-primary rounded-2xl'>
                          {course.course_name}
                        </li>
                      ))
                    }
                  </ul>
                </Modal>

                <Modal className='max-w-md mx-auto ' isOpen={isModalRequisitesOpen} onClose={() => setIsModalRequisitesOpen(false)}>
                  <h2 className='text-lg font-bold text-center'> Requisitos para a inscrição</h2>
                  <br />
                  <div className="bg-violet/20 grid place-content-center items-center mx-auto rounded-full w-[5em] h-[5em]">
                    <FaExclamationCircle className='text-4xl text-violet' />
                  </div>
                  <br />
                  <div className='container'>
                    <ol className='space-y-3 list-decimal w-ful list'>
                      <li >
                        Fotocópia do bilhete de identidade
                      </li>
                      <li>
                        Fotografias (tipo: passe)
                      </li>
                      <li>
                        Declaração do ensino secundário com notas discriminadas
                      </li>
                    </ol>

                    <Button variant='primary' onClick={() => {
                      setIsModalOpen(true);
                      setIsModalRequisitesOpen(false)
                    }} className='w-full py-2 mt-5 text-sm'>Fazer Matrícula</Button>
                  </div>
                </Modal>


              </div>
          }
        </div>
      </div>
    </div>
  );
}
