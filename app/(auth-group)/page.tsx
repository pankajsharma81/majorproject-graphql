"use client"
import AdminDashboard from '@/components/admin-dashboard'
import { UserContext } from '@/components/contexts/user-context'
import React, { useContext } from 'react'

export default function Home() {
  const {user} = useContext(UserContext)
  return (
    <div>
      <main>
        {user?.role == "admin" && <AdminDashboard/>}
      </main>
    </div>
  )
}
