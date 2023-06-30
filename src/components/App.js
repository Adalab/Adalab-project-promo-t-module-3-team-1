import programación from '../images/programacion.jpeg';
/*import cover2 from '../images/cover_2.jpeg';*/
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import sendToApi from '../services/api';
import ls from '../services/LocalStorage';
import {useEffect, useState} from 'react';
import '../styles/core/reset.scss';
import '../styles/core/mixins.scss';
import '../styles/layout/page.scss';
import Header from './Header';
import Preview from './Preview';
import Hero from './Hero';
import Form from './Form';
import Footer from './Footer';
import GetAvatar from './GetAvatar';


function App() {
  const [serverResponse, setServerResponse] = useState({});
  const [data, setData] = useState({
    name: '',
    slogan: '',
    technologies: '',
    demo: '',
    repo: '',
    desc: '',
    autor: '',
    job: '',
    image: 'https://www.itmplatform.com/wp-content/uploads/33664005_m.jpg',
    photo:
      'https://genweb.upc.edu/ca/documentacio/cursos/creacio-i-personalitzacio-de-plantilles/img/user.jpg',
  });
  const [contactList, setContactList] = useState(ls.get('contacts', []));
  useEffect(() => {
    if (ls.get('contacts', null) === null) {
      sendToApi().then((cleanData) => {
        setContactList(cleanData);

        ls.set('contacts', cleanData);
      });
    }
  }, []);
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    sendToApi(data).then((result) => {
      setServerResponse(result);
      console.log(result.success);
    });
  };
  const handleInputs = (ev) => {
    setData({ ...data, [ev.target.id]: ev.target.value });
  };
  const handleChangeForm = (propName, value) => {
    const cloneData = { ...data, [propName]: value};
    setData(cloneData);
  }

  return (
    <div className="container">
      <Header></Header>
      <main className="main">
        <Hero></Hero>
        <div className="main__section">
          <Preview data={data}></Preview>
          <Form handleInputs={handleInputs} data={data} handleClickCreateCard={handleClickCreateCard} serverResponse={serverResponse} handleChangeForm={handleChangeForm}></Form>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
