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
import GuidelinesForImportationPage from './Pages/kenyans-in-diapora/GuidelinesForImportationPage'
import HouseholdGoods from './Pages/kenyans-in-diapora/HouseholdGoods'
import { BusinessGrantPage } from './Pages/kenyans-in-diapora/BusinessGrantPage'
import KenyanOrganizationInGermanyPage from './Pages/kenyans-in-diapora/KenyanOrganizationInGermanyPage'
import OverviewPage from './Pages/commercial-section/OverviewPage'
import TradeRelationsPage from './Pages/commercial-section/TradeRelationsPage'
import ExportProducts from './Pages/commercial-section/ExportProducts'
import InvestmentOpportunityPage from './Pages/commercial-section/InvestmentOpportunityPage'
import TourismResourcesPage from './Pages/Tourism/TourismResourcesPage'
import NaturalTourismResourcesPage from './Pages/Tourism/NaturalTourismResourcesPage'
import CulturalTourismResourcesPage from './Pages/Tourism/CulturalTourismResourcesPage'
import HumanTourismResourcesPage from './Pages/Tourism/HumanTourismResourcesPage'
import CapitalTourismResourcesPage from './Pages/Tourism/CapitalTourismResourcesPage'
import TouristCustomerProfilePage from './Pages/Tourism/TouristCustomerProfilePage'
import GeographicalOriginPage from './Pages/Tourism/GeographicalOriginPage'
import TopicalIssuesPage from './Pages/Tourism/TopicalIssuesPage'
import TravelToKenyaPage from './Pages/travel-information/TravelToKenyaPage'
import PublicHolidays from './Pages/travel-information/PublicHolidays'
import ContactPage from './Pages/ContactPage'
import ForeignAffairsPage from './Pages/qiuck-access/ForeignAffairsPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
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
          <Route path='/guidelines-for-importation' element={<GuidelinesForImportationPage />} />
          <Route path='/household-goods' element={<HouseholdGoods />} />
          <Route path='/business-grant' element={<BusinessGrantPage />} />
          <Route path='/organizations-in-germany' element={<KenyanOrganizationInGermanyPage />} />

          {/* Commercial Section */}
          <Route path='/overview' element={<OverviewPage />} />
          <Route path='/trade-relations' element={<TradeRelationsPage />} />
          <Route path='/export-products' element={<ExportProducts />} />
          <Route path='/investment' element={<InvestmentOpportunityPage />} />

          {/* Tourism */}
          <Route path='/tourism-resources' element={<TourismResourcesPage />} />
          <Route path='/natural-resources' element={<NaturalTourismResourcesPage />} />
          <Route path='/cultural-resources' element={<CulturalTourismResourcesPage />} />
          <Route path='/human-resources' element={<HumanTourismResourcesPage />} />
          <Route path='/capital-resources' element={<CapitalTourismResourcesPage />} />
          <Route path='/tourist-customer-profile' element={<TouristCustomerProfilePage />} />
          <Route path='/geographical-origin' element={<GeographicalOriginPage />} />
          <Route path='/topical-issues' element={<TopicalIssuesPage />} />

          {/* Travel Information */}
          <Route path='/travel-to-kenya' element={<TravelToKenyaPage />} />
          <Route path='/public-holidays' element={<PublicHolidays />} />

          {/* Quick Access */}
          <Route path='/foreign-affairs' element={<ForeignAffairsPage />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
