import { logos } from "@/utils/image-exporter";
import search from "../styles/search.module.css";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/infra";
import { useRouter } from "next/navigation";
import { SchoolService } from "@/services/schools_services";
import { useEffect, useState } from "react";
import type { School } from "@/infra/interfacess";
import InputDefault from "@/components/global/input-default/input";
import { FaSearch } from "react-icons/fa";
import { Header } from "@/components/header";

export default function SearchI() {

  const [schools, setSchools] = useState<School[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [loadSchools, setLoadSchools] = useState(true)
  /*
    useEffect(() => {
      const fetchSchools = async () => {
  
        const service = new SchoolService();
        const data = await service.getSchoolsByType(schoolType ? schoolType : "iem");
        setSchools(data);
        setFilteredSchools(data);
        setLoadSchools(false)
      };
  
      fetchSchools();
    }, []);
  
   
  */

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = schools.filter(school =>
      school.schoolName.toLowerCase().includes(term)
    );
    setFilteredSchools(filtered);
  };


  const router = useRouter()
  return (
    <>
      <div className={'container'}>

        <Header className='py-5' showLogo={false} title={'Instituições de Ensino Médio'} showBackButton={true} />
        <h2 className='mb-2'>Buscar Escolas</h2>


        <InputDefault
          type="text"
          leftIcon={FaSearch}
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Pesquisar escolas..."
          className="w-full p-2 mb-4 bg-white border rounded"
        />

        <div className={'flex justify-between'}>
          <p className={search.purple}>Ordenar por:</p>
          <p>290 resultados</p>
        </div>
        <br />

        <div className={''}>

          {
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} onClick={() => router.push(routes.DETAILS_ROUTE)}>
                <div className="flex my-3 gap-3 p-4 bg-white shadow rounded-2xl">
                  <Image src={logos.isptec} className='w-[3em] h-[3em]' alt="" />
                  <div>
                    <h3 className="text-lg font-bold">  ISPTEC - Instituto Superior Politécnico de Tecnologias e
                      Ciências</h3>
                    <div className="flex gap-2 text-sm">
                      <p>8 Cursos </p>
                      <span>-</span>
                      <p>Luanda</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }


          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
