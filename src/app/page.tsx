import AuthForm from "@/components/forms/auth-form";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Dashboard from "./dashboard/page";
import Orders from "./dashboard/orders/page";
import Products from "./dashboard/products/page";
import Revenue from "./dashboard/revenue/page";
import Customer from "./dashboard/customers/page";

const SignIn = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-gray-800 to-purple-900">
      <div className="hidden md:block w-1/2 p-10 text-white">
        <h1 className="text-5xl font-bold">Bem-vindo de volta!</h1>
        <p className="mt-4 text-lg">
          Transformando a educação, inspirando o futuro. Por favor, faça login
          para continuar.
        </p>
      </div>
      <Card className="w-full sm:w-[400px] md:w-1/3 rounded-3xl shadow-2xl">
        <CardBody className="gap-7 px-8 py-12">
          <Image
            src="/logowhite.png"
            alt=""
            width={150}
            height={50}
            className="w-3/4 mx-auto"
          />
          <p className="text-gray-500 flex flex-col gap-5">
            <a href="#" className="text-purple-500  text-center">
              Educação na palma da mão!
            </a>
          </p>
          <div className="flex flex-col gap-5">
            <AuthForm />
            <a href="#" className="text-purple-500 text-sm text-center">
              Esqueceu-se da palavra-passe?
            </a>
          </div>
        </CardBody>
      </Card>
    </div>
    // <Dashboard />
    // <Orders/>
    // <Products/>
    // <Revenue />
    // <Customer/>
  );
};

export default SignIn;
