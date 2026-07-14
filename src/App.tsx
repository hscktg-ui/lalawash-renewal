import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Layout } from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import InfraPage from './pages/InfraPage'
import ImpactPage from './pages/ImpactPage'
import ContactPage from './pages/ContactPage'
import NoticePage from './pages/NoticePage'
import NoticeDetailPage from './pages/NoticeDetailPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminNoticesPage from './pages/AdminNoticesPage'
import MallQuotePage from './pages/MallQuotePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="admin" element={<AdminLoginPage />} />
        <Route path="admin/notices" element={<AdminNoticesPage />} />
        <Route path="quote" element={<MallQuotePage />} />
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="infra" element={<InfraPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="notice" element={<NoticePage />} />
          <Route path="notice/:id" element={<NoticeDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
