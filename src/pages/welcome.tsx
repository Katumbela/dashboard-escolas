import Header from "../components/head";
import PurpleButton from "../components/buttons";
import { LightButton } from "../components/buttons";
import welcome from "../styles/welcome.module.css";
import Link from "next/link";
import Button from "@/components/global/button/button";
import { useRouter } from "next/navigation";


export default function Welcome() {


  const navigate = useRouter()

  return (
    <>
      <Header title="Multischool AO" />
      <div className={welcome.container}>
        <div className={welcome.text}>
          <h1>Bem-vindo ao Multischool Angola</h1>
          <p className="text-red-500">
            Facilitamos a gestão da sua vida acadêmica com soluções que quebram
            o convencional!
          </p>
        </div>
        <div className={'z-50 pb-6 mx-auto justify-center text-center mt-auto space-y-5'}>

          <Button
            className="py-2 w-full" variant="primary"
          >Fazer login</Button>
          <LightButton
            description="Inscrever-me"
            redirect="/explore"
          ></LightButton>
          <Link href="/explore" prefetch={true} className={welcome.link}>
            Explorar instituições de ensino
          </Link>

        </div>
      </div>
    </>
  );
}
