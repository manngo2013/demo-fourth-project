import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.scss';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.appContent}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
