import React from 'react';
import DashBoard from './components/dashboard/dashBoard';
import DataScience from './components/SubCategories/dataScience';
import Analytics from './components/SubCategories/analytics'
import Testing from './components/SubCategories/testing';
import Mobile from './components/SubCategories/mobile';
import Cloud from './components/SubCategories/cloud';
import UI from './components/SubCategories/ui';
import CyberSecurity from './components/SubCategories/cyberSecurity';
import QuizInterface from './components/quiz/quizInterface/quizInterface';
import Counter from './components/quiz/counter/counter';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <DashBoard/> */}
      {/* <DataScience/> */}
      {/* <Analytics/> */}
      {/* <Testing/> */}
      {/* <Mobile/> */}
      {/* <Cloud/> */}
      {/* <UI/> */}
      {/* <CyberSecurity/> */}
      <QuizInterface/>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
