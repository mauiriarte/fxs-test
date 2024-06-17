import './App.css';
import NavBar from './components/NavBar/NavBar';
import TabBar from './components/TabBar/TabBar';
import Feed from './components/Feed/Feed';
import { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import { DropdownProvider } from './contexts/DropdownContext';

function App() {
  const [activeTab, setActiveTab] = useState('latest');
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c'
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
        <NavBar />
        <div className='mainsection'>
          <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
          <Feed activeTab={activeTab} posts={posts} />
          <Dropdown />
        </div>
      </div>
    </DropdownProvider>
  );
}

export default App;
