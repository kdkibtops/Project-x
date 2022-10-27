import './App.css';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import SignInPage from './Components/SignInPage/SignInPage';
import RegisterationPage from './Components/RegisterationPage/RegisterationPage';
import DateComponent from './Components/Reusable/TimeKeeping/DateComponent'
import TimeComponent from './Components/Reusable/TimeKeeping/TimeComponent'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import HomePage from './Components/HomePage/HomePage';


function App() {

  const [authenticated, setAuthenticated] = useState();

  useEffect(() => JSON.parse(sessionStorage.getItem('eClinicAuthentication'))
    ? setAuthenticated(JSON.parse(sessionStorage.getItem('eClinicAuthentication')))
    : setAuthenticated(false), [])

  const updateMainAppAuthentication = (authentication) => {
    setAuthenticated(authentication)
  }

  return (
    <BrowserRouter>
      <Header
        authentication={authenticated}
        updateMainAppAuthentication={updateMainAppAuthentication}
      />

      <div id="todayDiv" className="centered-text" >
        <DateComponent />
        <TimeComponent />
      </div>
      <Routes>

        {/* Landing page route */}
        <Route
          exact path=''
          element={
            <>
              <LandingPage
                authentication={authenticated}
                updateMainAppAuthentication={updateMainAppAuthentication}

              />
            </>
          }
        />

        {/* Sign In page route */}
        <Route
          exact path='/signin'
          element={
            <>
              <SignInPage
                authentication={authenticated}
                updateMainAppAuthentication={updateMainAppAuthentication}
              />
            </>
          }
        />

        {/* Registeration page route */}
        <Route
          exact path='/register'
          element={
            <>
              <RegisterationPage />
            </>
          }
        />


        {/* Home page route */}
        <Route
          exact path='/home/*'
          element={
            <>
              <HomePage
                authentication={authenticated}
                updateMainAppAuthentication={updateMainAppAuthentication} />
            </>
          }
        />

      </Routes>
    </BrowserRouter>

  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
