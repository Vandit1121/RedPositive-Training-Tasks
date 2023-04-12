import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './state/auth-context';

function App() {

  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login onLogin={ctx.loginHandler} />}
        {ctx.isLoggedIn && <Home onLogout={ctx.logoutHandler} />}
      </main>
      </React.Fragment>
  );
}

export default App;
