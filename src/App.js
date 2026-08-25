import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.css';

import { CursorProvider } from './components/ui/CursorContext';
// import { CustomCursor } from './components/ui/CustomCursor';
import SmoothScroll from './components/ui/SmoothScroll';

import Home from './pages/Home';
import Links from './pages/Links';

import DigitalProducts from './pages/DigitalProducts';

// import DigitalProducts from './pages/DigitalProducts';
// import WebPrototyping from './pages/WebPrototyping';
// import GraphicVisuals from './pages/GraphicVisuals';
// import ExperimentalLab from './pages/ExperimentalLab';

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <CursorProvider>
        {/* <CustomCursor /> */}
        <div className="App">
          {/* <Header /> */}
          
          <AnimatePresence 
            mode="wait" 
            onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/links" element={<Links />} />

              <Route path="/services/digital-products" element={<DigitalProducts />} />
              {/* <Route path="/services/web-prototyping" element={<WebPrototyping />} /> */}
              {/* <Route path="/services/graphic-visuals" element={<GraphicVisuals />} /> */}
              {/* <Route path="/services/experimental-lab" element={<ExperimentalLab />} /> */}
              
              <Route path="/*" element={<Home />} />
            </Routes>
          </AnimatePresence>

        </div>
      </CursorProvider>
    </SmoothScroll>
  );
}

export default App;