import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import BlogPost from './components/BlogPost/BlogPost';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BlogPost></BlogPost>
    </div>
  )
}

export default App
