import { routes } from "@/infra";
import type { School } from "@/infra/interfacess";
import { logos } from "@/utils/image-exporter";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface SchoolComponentProps {
  data: School
  index?: number
}

export function SchoolComponent({ data }: SchoolComponentProps) {
  const router = useRouter()
  return (
    <div onClick={() => router.push(routes.DETAILS_ROUTE + "?school=" + data._id)}>
      <div className="flex gap-3 p-4 my-3 bg-white shadow rounded-2xl">
        <Image src={logos.isptec} className='w-[3em] h-[3em]' alt="" />
        <div>
          <h3 className="text-lg font-bold">  {data.schoolName}</h3>
          <div className="flex gap-2 text-sm">
            <p>{data.courses.length} </p>
            <span>-</span>
            <p>{data.province}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolComponent;