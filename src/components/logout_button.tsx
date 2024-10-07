import { useAppDispatch } from '@/hooks'
import { logout } from '@/store'
import React from 'react'

export const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
      Logout
    </button>
  )
}
