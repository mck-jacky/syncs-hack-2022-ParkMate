import React from 'react';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import SearchResult from './pages/SearchResult';
import Searchresult from './pages/SearchResult_';
import Listparking from './pages/ListParking_';
import SearchParking from './pages/SearchParking';
import SearchParkings from './pages/SearchParking_';
import ListParking from './pages/ListParking';
import ListingConfirmed from './pages/ListingConfirmed';
import Payment from './pages/Payment';
import Payments from './pages/Payment_';
import SearchResultForm from './pages/SearchResultForm';
import Main from './pages/Main';
import SearchMatching from './pages/SearchMatching';
import MatchResult from './pages/MatchResult';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/main"
          element={<Main />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/search_result"
          element={<SearchResult />}
        />
        <Route
          path="/search_result_form"
          element={<SearchResultForm />}
        />
        <Route
          path="/list_parking"
          element={<ListParking />}
        />
        <Route
          path="/list_parking_"
          element={<Listparking />}
        />
        <Route
          path="/search_parking"
          element={<SearchParking />}
        />
        <Route
          path="/search_parking_"
          element={<SearchParkings />}
        />
        <Route
          path="/listing_confirmed"
          element={<ListingConfirmed />}
        />
        {/* <Route
          path="/payment"
          element={<Payment />}
        />
        <Route
          path="/payment_"
          element={<Payments />}
        /> */}
        <Route
          path="/matching"
          element={<SearchMatching />}
        />
        <Route
          path="/match_result"
          element={<MatchResult />}
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
