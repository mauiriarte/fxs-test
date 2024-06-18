import './App.css';
import LeftMenu from './components/LeftMenu/LeftMenu';
import NavBar from './components/NavBar/NavBar';
import TabBar from './components/TabBar/TabBar';
import Feed from './components/Feed/Feed';
import { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import { DropdownProvider } from './contexts/DropdownContext';
import RightColumn from './components/RightColumn/RighColumn';

function App() {
  const [activeTab, setActiveTab] = useState('latest');
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://fxsfrontend.fxstreet.workers.dev'
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownProvider>
      <div className='App'>
        <LeftMenu />
        <main>
          <NavBar />
          <div className='display'>
            <div className='maincolumn'>
              <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
              <Feed activeTab={activeTab} posts={posts} />
              <Dropdown />
            </div>
            <RightColumn className='widgets' />
          </div>
        </main>
      </div>
    </DropdownProvider>
  );
}

export default App;
