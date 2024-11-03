"use client";

import "./global.css";
import { persistor, selectUser, store } from '@/store';
import { Provider } from 'react-redux';
import { ModalProvider } from '@/contexts';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { useAppSelector } from "@/hooks";
import usePeriodicStudentUpdate from "@/hooks/usePeriodicStudentUpdate";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ModalProvider>
              {children}
              <Toaster />
            </ModalProvider>
          </PersistGate>
        </Provider>
      </body>
    </html >
  );
}
