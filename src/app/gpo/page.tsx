"use client"

import { useState } from 'react';

export default function GPO() {
  const [amount, setAmount] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const paymentData = {
        amount: amount,             // A quantia de pagamento
        user_id: "USER_123456",   // O ID do usuário
        user_account: "123456789" // A conta do usuário (caso necessário)
      };

      const response = await fetch('https://multischooll-api-nest.vercel.app/payment/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log("Pagamento iniciado com sucesso:", responseData);

      // Atualiza o token ou qualquer outro dado necessário
      setToken(responseData.id);
    } catch (error) {
      console.error("Erro ao iniciar pagamento:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen bg-white">


      {token ? (
        <div className="w-full h-full mt-0">
          <button className='px-5 py-3 text-white bg-red-500' onClick={() => setToken("")}>Repetir Pagamento / Cancelar</button>
          <iframe
            className="w-full h-full"
            src={`https://cerpagamentonline.emis.co.ao/online-payment-gateway/webframe/frame?token=${token}`}
          >
          </iframe>
        </div>
      ) :
        <>

          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2 text-lg font-medium">Insira a quantia:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-64 px-4 py-2 border rounded-md"
              placeholder="Ex: 10.00"
            />
          </div>
          <button
            onClick={handlePayment}
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
            disabled={loading}
          >
            {loading ? 'Processando...' : 'Pagar'}
          </button>
        </>
      }
    </div>
  );
}
