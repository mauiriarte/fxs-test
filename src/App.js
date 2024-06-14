import './App.css';
import NavBar from './components/NavBar/NavBar';
import TabBar from './components/TabBar/TabBar';
import Feed from './components/Feed/Feed';
import { useState, useEffect } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('latest');
  const [posts, setPosts] = useState([]);

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

  return (
    <div className='App'>
      <NavBar />
      <div className='mainsection'>
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Feed activeTab={activeTab} posts={posts} />
      </div>
    </div>
  );
}

export default App;
