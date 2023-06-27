import '../styles/core/reset.scss';
import callToApi from '../services/api';
import { useState } from 'react';
import Header from './Header';
import Preview from './Preview';
import Hero from './Hero';
import Form from './Form';
import Footer from './Footer';

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

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    callToApi(data).then((result) => {
      setServerResponse(result);
      console.log(result.success);
    });
  };
  const handleInputs = (ev) => {
    setData({ ...data, [ev.target.id]: ev.target.value });
  };

  return (
    <div className="container">
      <Header></Header>
      <main className="main">
        <Hero></Hero>
        <div className="main__section">
          <Preview></Preview>
          <Form></Form>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
