import './App.css';
import React, { useState, useEffect } from 'react'
const axios = require('axios')

function App() {
  const [url, setUrl] = useState('')
  const [link, setLink] = useState('')

  const handleChange = (e) => {
    setUrl(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(url)
    axios.post('http://localhost:5000/api/shorten', {
      url: url
    }).then ((res) => {
      console.log(res.data)
      setLink(res.data.hash)
    })
  }

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="url" placeholder="url to shorten..." onChange={handleChange}/>
          <input type="submit" value="Shorten!"/>
        </div>
        <div>
          {
              link && <a id="result">http://localhost:5000/{link}</a>
          }
        </div>
      </form>
    </div>
  );
}

export default App;
