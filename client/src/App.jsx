import './App.css';
import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile.jsx';
import EditProfile from './components/profile-forms/EditProfile.jsx';
import { AddExperience } from './components/profile-forms/AddExperience.jsx';
import { AddEducation } from './components/profile-forms/AddEducaiton.jsx';
import Profiles from './components/profiles/Profiles.jsx';
import Profile from './components/profile/Profile.js';
import PrivateRoute from './components/routing/PrivateRoute';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import store from './store';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='*' element={null} />
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profiles' element={<Profiles />} />
              <Route path='/profile/:id' element={<Profile />} /> 
              <Route
                path='/dashboard'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path='/create-profile'
                element={
                  <PrivateRoute>
                    <CreateProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path='/edit-profile'
                element={
                  <PrivateRoute>
                    <EditProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path='/add-experience'
                element={
                  <PrivateRoute>
                    <AddExperience />
                  </PrivateRoute>
                }
              />
              <Route
                path='/add-education'
                element={
                  <PrivateRoute>
                    <AddEducation />
                  </PrivateRoute>
                }
              />
              <Route path='*' element={null} />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
