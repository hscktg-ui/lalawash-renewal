import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Layout } from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import HistoryPage from './pages/HistoryPage'
import CertHygienePage from './pages/CertHygienePage'
import InfraPage from './pages/InfraPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ContactPage from './pages/ContactPage'
import HowToPage from './pages/HowToPage'
import FaqPage from './pages/FaqPage'
import NoticePage from './pages/NoticePage'
import NoticeDetailPage from './pages/NoticeDetailPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminNoticesPage from './pages/AdminNoticesPage'
import MallQuotePage from './pages/MallQuotePage'
import FuneralSpecsPage from './pages/FuneralSpecsPage'
import FestivalSpecsPage from './pages/FestivalSpecsPage'
import SikpanSpecsPage from './pages/SikpanSpecsPage'
import CupSpecsPage from './pages/CupSpecsPage'
import KidsSpecsPage from './pages/KidsSpecsPage'
import { PrivacyPage, TermsPage } from './pages/LegalPage'

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
          <Route path="about/history" element={<HistoryPage />} />
          <Route path="about/cert" element={<CertHygienePage />} />
          <Route path="about/branches" element={<InfraPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/funeral/specs" element={<FuneralSpecsPage />} />
          <Route path="services/festival/specs" element={<FestivalSpecsPage />} />
          <Route path="services/sikpan/specs" element={<SikpanSpecsPage />} />
          <Route path="services/cup/specs" element={<CupSpecsPage />} />
          <Route path="services/kids-tray/specs" element={<KidsSpecsPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="notice" element={<NoticePage />} />
          <Route path="notice/:id" element={<NoticeDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="contact/how" element={<HowToPage />} />
          <Route path="contact/faq" element={<FaqPage />} />
          <Route path="legal/terms" element={<TermsPage />} />
          <Route path="legal/privacy" element={<PrivacyPage />} />
          {/* legacy redirects */}
          <Route path="infra" element={<Navigate to="/about/branches" replace />} />
          <Route path="impact" element={<Navigate to="/about/history" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
