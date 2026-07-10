import { Outlet } from 'react-router-dom'
import BottomNav from './components/BottomNav'

export default function AppShell() {
  return (
    <div className="min-h-screen bg-[#0a1f0a] text-[#e8d5b8] font-serif">
      <div className="pb-24">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  )
}
