import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Routes, Route } from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<News apiKey={apiKey} country="us" category="general" />} />
        <Route path="/business" element={<News apiKey={apiKey} key={"business"} country="us" category="business" />} />
        <Route path="/entertainment" element={<News apiKey={apiKey} key={"entertainment"} country="us" category="entertainment" />} />
        <Route path="/general" element={<News apiKey={apiKey} key={"general"} country="us" category="general" />} />
        <Route path="/health" element={<News apiKey={apiKey} key={"health"} country="us" category="health" />} />
        <Route path="/science" element={<News apiKey={apiKey} key={"science"} country="us" category="science" />} />
        <Route path="/sports" element={<News apiKey={apiKey} key={"sports"} country="us" category="sports" />} />
        <Route path="/technology" element={<News apiKey={apiKey} key={"technology"} country="us" category="technology" />} />
      </Route>
    </Routes>
  )
}

export default App;