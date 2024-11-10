"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { ZodAuthSchema } from "@/lib/zod-schemas/schema";
import { motion as m } from "framer-motion";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

function AuthForm() {
  const [isPassword, setIsPassword] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [signInLoading, setSignInIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof ZodAuthSchema>>({
    resolver: zodResolver(ZodAuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSignIn(data: z.infer<typeof ZodAuthSchema>) {
    setError(null);
    setSignInIsLoading(true);

    try {
      // Simulação de credenciais de login
      const validCredentials = {
        email: "admin@example.com",
        password: "admin123",
      };

      if (
        data.email === validCredentials.email &&
        data.password === validCredentials.password
      ) {
        toast.success("Autenticação realizada com sucesso. Redirecionando...");
        router.replace("/dashboard");
      } else {
        throw new Error("Credenciais inválidas.");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setSignInIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignIn)}>
        {/* Campo de email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormControl>
                <Input
                  placeholder="Nome de utilizador"
                  {...field}
                  radius="sm"
                  size="sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo de password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-7">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Palavra-passe"
                  radius="sm"
                  size="sm"
                  autoComplete="no"
                  endContent={
                    isPassword ? (
                      <Eye
                        className="h-5 w-5 cursor-pointer text-gray-400"
                        onClick={() => setIsPassword(false)}
                      />
                    ) : (
                      <EyeOff
                        className="h-5 w-5 cursor-pointer text-gray-400"
                        onClick={() => setIsPassword(true)}
                      />
                    )
                  }
                  type={isPassword ? "password" : "text"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mensagem de erro */}
        {error ? (
          <m.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="mt-3 block h-5 text-center text-xs font-medium text-destructive dark:text-red-500"
          >
            {error}
          </m.span>
        ) : (
          <span className="mt-3 block h-5" />
        )}

        {/* Botões de ação */}
        <div className="mt-5 flex flex-col gap-3 ">
          <Button
            isLoading={signInLoading}
            color="primary"
            isDisabled={signInLoading}
            radius="full"
            type="submit"
            className=" bg-purple-500"
          >
            Fazer login
          </Button>
          {/* <Button
            color="primary"
            isDisabled={signInLoading}
            radius="full"
            onClick={() =>
              handleSignIn({
                email: "guest.admin@mail.com",
                password: "admin123",
              })
            }
            variant="light"
            type="button"
          >
            Entrar como convidado
          </Button> */}
        </div>
      </form>
    </Form>
  );
}

export default AuthForm;
