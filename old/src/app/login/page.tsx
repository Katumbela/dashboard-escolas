import { LoginForm } from "@/components"
import { Header } from "@/components/header"



export default function Login()  {

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex h-screen bg-white ">
      <div className="w-full bg-m">
        <div className="container">
          <br />
          <Header showBackButton={true} />
          <br />
          <div className="">
            <h2 className="mb-6 text-4xl font-extrabold ">Vamos começar a jornada!</h2>
            <span className="my-6 text-slate-500">Inicie a sessão na sua conta</span>
            <br />
            <br />
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
