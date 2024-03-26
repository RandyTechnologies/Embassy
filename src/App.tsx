import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CulturePage from './Pages/about-kenya/CulturePage'
import MediaPage from './Pages/about-kenya/MediaPage'
import GeographyPage from './Pages/about-kenya/GeographyPage'
import PeoplePage from './Pages/about-kenya/PeoplePage'
import HomePage from './Pages/HomePage'
import HistoryPage from './Pages/about-kenya/HistoryPage'
import FrequentlyAQs from './Pages/special-pages/FrequentlyAQsPage'
import RecievingPassportAfterBiometricsPage from './Pages/special-pages/RecievingPassportAfterBiometricsPage'
import TheKenyanGovernmentPage from './Pages/kenyan-government/TheKenyanGovernmentPage'
import OfficialVisitsPage from './Pages/bilateral-relations/OfficialVisitsPage'
import DevCop from './Pages/bilateral-relations/DevCop'
import CulturalRelations from './Pages/bilateral-relations/CulturalRelations'
import TheEmbassyPage from './Pages/the-embassy/TheEmbassyPage'
import ConsularPage from './Pages/consular-section/ConsularPage'
import EtaPage from './Pages/consular-section/EtaPage'
import MarriagePage from './Pages/consular-section/MarriagePage'
import PermitsAndPassesPage from './Pages/consular-section/PermitsAndPassesPage'
import FilmPermitPage from './Pages/consular-section/FilmPermitPage'
import RepatriationPage from './Pages/consular-section/ RepatriationPage'
import LegalizationOfDocumentsPage from './Pages/consular-section/LegalizationOfDocumentsPage'
import KenyaDiasporaRemittancePage from './Pages/kenyans-in-diapora/KenyaDiasporaRemittancePage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* About Links */}
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/geography" element={<GeographyPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/media" element={<MediaPage />} />

          {/* Special Pages Links */}
          <Route path="/faqs" element={<FrequentlyAQs />} />
          <Route path="/recieving-passport-after-biometrics" element={<RecievingPassportAfterBiometricsPage />} />

          {/* The Kenyan Government Pages */}
          <Route path="/the-kenyan-government" element={<TheKenyanGovernmentPage />} />

          {/* Bilateral Relations */}
          <Route path="/official-visits" element={<OfficialVisitsPage />} />
          <Route path="/dev-cop" element={<DevCop />} />
          <Route path="/cultural-relations" element={<CulturalRelations />} />

          {/* The Embassy */}
          <Route path="/the-embassy" element={<TheEmbassyPage />} />

          {/* Consular Section */}
          <Route path="/consular" element={<ConsularPage />} />
          <Route path="/eta-page" element={<EtaPage />} />
          <Route path="/marriage" element={<MarriagePage />} />
          <Route path="/permits" element={<PermitsAndPassesPage />} />
          <Route path="/film-permit" element={<FilmPermitPage />} />
          <Route path="/repatriation" element={<RepatriationPage />} />
          <Route path="/legal-docs" element={<LegalizationOfDocumentsPage />} />

          {/* Kenyans in Dispora */}
          <Route path='/kenya-diapora-remittance-survey' element={<KenyaDiasporaRemittancePage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
