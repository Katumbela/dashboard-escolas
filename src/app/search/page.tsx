"use client"
import { logos } from "@/utils/image-exporter";
import search from "../../styles/search.module.css";
import Image from "next/image";
import { routes } from "@/infra";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { School } from "@/infra/interfacess";
import InputDefault from "@/components/global/input-default/input";
import { FaSearch } from "react-icons/fa";
import { Header } from "@/components/header";
import { SchoolService } from "@/services/schools_services";
import SchoolComponent from "./components/school-component";
import DashCoursesSkeleton from "@/components/global/skeletons/dashboard_courses.skeleton";
import SchoolComponentSkeleton from "@/components/global/skeletons/school-skeleton";

export default function SearchI() {
  const searchParams = useSearchParams();
  const query = searchParams.get('type');

  const [schools, setSchools] = useState<School[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [loadSchools, setLoadSchools] = useState(true)

  useEffect(() => {
    const fetchSchools = async () => {

      const service = new SchoolService();
      const data = await service.getSchoolsByType(query ? query : "iem");
      setSchools(data);
      setFilteredSchools(data);
      setLoadSchools(false)
    };

    fetchSchools();
  }, []);



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
          leftIcon={<FaSearch />}
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Pesquisar escolas..."
          className="w-full p-2 mb-4 bg-white border rounded"
        />

        <div className={'flex justify-between'}>
          <p className={search.purple}>Ordenar por:</p>
          <p>{schools.length} resultado{schools.length <= 1 ? '' : 's'}</p>
        </div>
        <br />

        <div className={''}>

          {
            loadSchools ?
              <>
                <SchoolComponentSkeleton />
              </>
              :
              <>
                {
                  filteredSchools.map((course, i) => (
                    <SchoolComponent data={course} index={i} key={i} />
                  ))
                }
              </>
          }


          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
