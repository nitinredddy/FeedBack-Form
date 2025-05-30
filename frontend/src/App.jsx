import './App.css'
import FeedBack from './components/FeedBack.jsx'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import FetchFeedbacks from './components/FetchFeedbacks.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/feedback' element={<FeedBack/>}/>
          <Route path='/all-feedbacks' element={<FetchFeedbacks/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
