 
import { Toast } from 'flowbite-react';
import  { useState } from 'react';
import { HiCheck, HiX, HiExclamation, HiInformationCircle } from 'react-icons/hi';

interface ToastMessage {
  _id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

let toastCounter = 0;

const useFlowbiteToasts = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info') => {
    const id = ++toastCounter;
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const showSuccessToast = (message: string) => showToast(message, 'success');
  const showErrorToast = (message: string) => showToast(message, 'error');
  const showWarningToast = (message: string) => showToast(message, 'warning');
  const showInfoToast = (message: string) => showToast(message, 'info');

  const renderToasts = () => (
    <div className="fixed z-50 space-y-2 top-5 right-5">
      {toasts.map((toast) => (
        <Toast key={toast.id}>
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0">
            {toast.type === 'success' && <HiCheck className="w-5 h-5 text-green-500" />}
            {toast.type === 'error' && <HiX className="w-5 h-5 text-red-500" />}
            {toast.type === 'warning' && <HiExclamation className="w-5 h-5 text-yellow-500" />}
            {toast.type === 'info' && <HiInformationCircle className="w-5 h-5 text-blue-500" />}
          </div>
          <div className="ml-3 text-sm font-normal">{toast.message}</div>
          <Toast.Toggle />
        </Toast>
      ))}
    </div>
  );

  return {
    showSuccessToast,
    showErrorToast,
    showWarningToast,
    showInfoToast,
    renderToasts,
  };
};


export default useFlowbiteToasts