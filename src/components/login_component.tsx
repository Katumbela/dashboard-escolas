"use client"
import { useAppDispatch } from '@/hooks'
import { login } from '@/services'
import { loginSuccess } from '@/store'
import { AlertUtils, showErrorToast, showSuccessToast } from '@/utils'
import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa6'
import InputDefault from './global/input-default/input'
import Button from './global/button/button'
import { routes } from '@/infra'
import { HiLockOpen, HiUser } from 'react-icons/hi'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { setLocalStorage } from '@/utils/local-storage'

export const LoginForm = () => {
  const [adhesionNumber, setAdhesionNumber] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { access_token, student } = await login(adhesionNumber, password)
      const studentDoc = student
      console.log(studentDoc)
      if (access_token && student) {
        dispatch(loginSuccess({ access_token, student }))
        //console.log(access_token)
        setLocalStorage('token', access_token)
        showSuccessToast('login efectuado com sucesso')
        setLoading(false)
        window.location.href = routes.HOME_ROUTE
        return
      }
      else {
        setLoading(false)

        toast.error("Credenciais inválidas, tente novamente")

      }



      // Redirecionar aqui ou fazer algo após o login bem-sucedido

    } catch (error) {

      setLoading(false)
      showErrorToast('Erro ao efetuar login')
      console.error('Erro no login:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <InputDefault
          leftIcon={<HiUser />}
          id="adhesion"
          type="text"
          value={adhesionNumber}
          onChange={(e) => setAdhesionNumber(e.target.value)}
          placeholder='Nº de Adesão'
          className="w-full p-2 border"
          required
        />
      </div>
      <div>
        <InputDefault
          leftIcon={<HiLockOpen />}
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border"
          placeholder='Palavra passe'
          required
        />
      </div>
      <br />
      <Button disabled={loading} type="submit" className="w-full py-3 mt-8 text-white disabled:bg-slate-400">
        {
          loading ?
            <>
              <div className="flex gap-2 ">
                <FaSpinner className='my-auto animate-spin' />
                <span className="my-auto">
                  Entrando
                </span>
              </div>
            </>
            :
            'Entrar'
        }
      </Button>
      <br />
      <center>
        <span className="font-medium text-primary">Esqueci-me do PIN de acesso</span>
        <br />
        <span>Não possui uma conta ? <Link href={routes.STEPONE_ROUTE} className="underline text-primary">Criar uma conta</Link></span>
      </center>
    </form>
  )
}

