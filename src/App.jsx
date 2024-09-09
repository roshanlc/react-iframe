import { useEffect, useState } from 'react'
import './App.css'

// isValidUrl returns whether a provided url is valid or not
const isValidUrl = urlString => {
  try {
    return Boolean(new URL(urlString));
  }
  catch (e) {
    console.log(e)
    return false;
  }
}


function App() {
  const url = "https://roshan.local";
  const [userUrl, setUserUrl] = useState(url);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get('url');
    if (paramValue !== "" && isValidUrl(paramValue)) {
      setUserUrl(paramValue);
    }
  }, [])
  return (
    <>
      <div>
        <iframe src={userUrl}// 31483
          height="1000px"
          width="1000px"
        />
      </div>

    </>
  )
}

export default App
