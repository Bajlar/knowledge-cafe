import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import BlogPost from './components/BlogPost/BlogPost';
import BlogAnswer from './components/BlogAnswer/BlogAnswer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BlogPost></BlogPost>
      <BlogAnswer></BlogAnswer>
    </div>
  )
}

export default App
