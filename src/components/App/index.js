// == Import
import { useState } from 'react';
import {
  Routes, Route, useParams, NavLink,
} from 'react-router-dom';
import './styles.css';

function User() {
  const params = useParams();

  return (
    <div>
      Je suis le composant User, le UserId est : {params.userId},
      et le TeacherId est : {params.teacherId}
    </div>
  );
}
// == Composant
function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="app">
      {/* <nav>
        <Link to="/">Acceuil</Link> &nbsp;
        <Link to="/user/42/84">User</Link> &nbsp;
        <Link to="/zazou">Zazou</Link>
      </nav> */}
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'link--active' : '')}
          to="/"
        >Acceuil
        </NavLink> &nbsp;
        <NavLink
          className={({ isActive }) => (isActive ? 'link--active' : '')}
          to="/user/42/84"
        >User
        </NavLink> &nbsp;
        <NavLink
          className={({ isActive }) => (isActive ? 'link--active' : '')}
          to="/zazou"
        >Zazou
        </NavLink>
      </nav>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <Routes>
        <Route path="/" element={<p>Hello World!</p>} />
        <Route path="/user/:userId/:teacherId" element={<User />} />
        <Route path="/zazou" element={<p>Bisous Zazou</p>} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
