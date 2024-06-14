import './App.css';
import NavBar from './components/NavBar/NavBar';
import TabBar from './components/TabBar/TabBar';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('latest');

  return (
    <div className='App'>
      <NavBar />
      <div className='mainsection'>
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
