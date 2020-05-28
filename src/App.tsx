import React from 'react';
import './App.css';
import TitleSlide from './slides/TitleSlide';
import WhatIsSqlSlide from './slides/WhatIsSqlSlide';
import SqlInjectionIntroSlide from './slides/SqlInjectionIntroSlide';
import WhatHappenedSlide from './slides/WhatHappenedSlide';
import AnalysisMethodSlide from './slides/AnalysisMethodSlide';
import TakeawaysSlide from './slides/TakeawaysSlide';
import ReferencesSlide from './slides/ReferencesSlide';

function App() {
  return (
    <div className="App">
      <TitleSlide />
      <WhatIsSqlSlide />
      <SqlInjectionIntroSlide />
      <WhatHappenedSlide />
      <AnalysisMethodSlide />
      <TakeawaysSlide />
      <ReferencesSlide />
    </div>
  );
}

export default App;
