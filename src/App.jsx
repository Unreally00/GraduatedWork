import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { Tabs, Tab } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import { getServices, getData, getLicenses, getCertificates, getContacts, getAdministrations, getShareholders } from './requests';
import { Home, Services, Contacts, Shareholders } from './pages';
import { Header, Footer } from './components';

import { theme } from './theme';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [administration, setAdministration] = useState([]);
  const [shareholders, setShareholders] = useState([]);
  const [services, setServices] = useState([]);
  const [licenses, setLicenses] = useState([]);
  const [certificates, setCertificates] = useState([]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(async () => {
    setContacts(await getData(getContacts, 'contacts'));
    setAdministration(await getData(getAdministrations, 'administrations'));
    setShareholders(await getData(getShareholders, 'shareholders'));
    setServices(await getData(getServices, 'services'));
    setLicenses(await getData(getLicenses, 'licenses'));
    setCertificates(await getData(getCertificates, 'certificates'));
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="#d37326"
            indicatorColor="#d37326"
          >
            <Tab label={<HomeIcon />} to="/" component={Link} />
            <Tab label="Услуги" to="/services" component={Link} />
            <Tab label="Контакты" to="/contacts" component={Link} />
            <Tab label="Для акционеров" to="/shareholders" component={Link} />
          </Tabs>
        </Header>
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route path='/services' element={<Services services={services} licenses={licenses} certificates={certificates} />} />
          {/* <Route path='/shareholders' element={<Shareholders shareholders={shareholders} />} />
          <Route path='/contacts' element={<Contacts contacts={contacts} administration={administration} />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
