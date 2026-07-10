import { Routes, Route } from 'react-router-dom'
import AppShell from '../layout/AppShell'
import Capa from "../pages/Capa";
import Historia from '../pages/Historia'
import Paraninfo from '../pages/Paraninfo'
import Patrono from '../pages/Patrono'
import HomenagensEspeciais from '../pages/Homenagens'
import HomenagensAdministrativas from '../pages/HomenagensAdmin'
import Juramento from '../pages/Juramento'
import Formandos from '../pages/Formandos'
import Falecidos from '../pages/Falecidos'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Capa />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/paraninfo" element={<Paraninfo />} />
        <Route path="/patrono" element={<Patrono />} />
        <Route path="/homenagens" element={<Homenagens Especiais />} />
        <Route path="/homenagens-admin" element={<HomenagensAdministrativas />} />
        <Route path="/juramento" element={<Juramento />} />
        <Route path="/formandos" element={<Formandos />} />
        <Route path="/falecidos" element={<Falecidos />} />
      </Route>
    </Routes>
  )
}
