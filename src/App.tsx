import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CulturePage from './Pages/about-kenya/CulturePage'
import MediaPage from './Pages/about-kenya/MediaPage'
import GeographyPage from './Pages/about-kenya/GeographyPage'
import PeoplePage from './Pages/about-kenya/PeoplePage'
import HomePage from './Pages/HomePage'
import HistoryPage from './Pages/about-kenya/HistoryPage'
import FrequentlyAQs from './Pages/special-pages/FrequentlyAQs'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* About Links */}
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/geograpgy" element={<GeographyPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/media" element={<MediaPage />} />

          {/* Special Pages Links */}
          <Route path="/faqs" element={<FrequentlyAQs />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
