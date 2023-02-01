import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { Contacts } from './pages/Contacts/Contacts';

export const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};
