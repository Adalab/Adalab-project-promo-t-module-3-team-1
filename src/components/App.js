import '../styles/main.scss';
import cover from '../images/cover.jpeg';
/*import cover2 from '../images/cover_2.jpeg';*/
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function App() {
  const [data, setData] = useState({
    name: '',
    slogan: '',
    technologies: '',
    demo: '',
    repo: '',
    desc: '',
    autor: '',
    job: '',
    image: '',
    photo: ''
  });
  const handleClickCreateCard = (ev) => {
    //ev.preventDefault();
    console.log('Has clicado el boton');
  }
  const handleInputs = (ev) => {
    setData({...data,[ev.target.id]: ev.target.value});
  }
  return (
    <div className="container">
      <header className="header">
        <p className="header__text"><FontAwesomeIcon icon={faLaptopCode} size="2xl" />Proyectos Molones</p>
        <img className='header__logo' src={logo} alt="logo Adalab" />    
      </header>

      <main className="main">
        <section className='main__hero'>
          <h1 className='main__hero--title'>Proyectos Molones</h1>
          <p className='main__hero--subtitle'>Escaparate en línea para recoger ideas a través de la tecnología.</p>
          <button className='main__hero--button'>VER PROYECTOS</button>
        </section>
        
        <div className='main__section'>
          <section className="preview">
            <img className="preview__image" src={cover} alt="#" />
            <section className="preview__autor">
              <section className="preview__autor--infoproject project">
                <p className="project__subtitle">Personal Project Card</p>
                <hr className="project__line" />
                <h2 className="project__title">{data.name || 'Elegante Workspace'} </h2>
                <p className="project__slogan">{data.slogan || 'Diseños Exclusivos'}</p>
                <p className="project__desc">
                  {data.desc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod ullamcorper orci, eget ultricies tellus auctor ac. Duis dignissim lorem eget imperdiet pharetra. Proin consectetur purus non nisi tristique eleifend. Nam sed gravida est.'}
                </p>
                <section className="project__technologies">
                  <p className="project__technologies--text">{data.technologies || 'React JS, MongoDB'}</p>
                  <p className="project__technologies--icon"><FontAwesomeIcon icon={faGlobe}/></p>
                  <p className="project__technologies--icon"><FontAwesomeIcon icon={faGithub}/></p>
                </section>
              </section>
              <section className="preview__autor--infoautor infoAutor">
                <img className="infoAutor__image" src={user} alt="#" />
                <p className="infoAutor__job">{data.job || 'Full Stack Developer'}</p>
                <p className="infoAutor__name">{data.author || 'Emmelie Björklund'}</p>
              </section>
            </section>
          </section>
          <section className="form">
            <h2 className="form__title">Información</h2>
            <section className="form__askinfo">
              <p className="form__askinfo--subtitle">Cuéntanos sobre el proyecto</p>
              <hr className="form__askinfo--line" />
            </section>
            <fieldset className="form__project">
              <input
                className="form__project--input"
                type="text"
                placeholder="Nombre del proyecto"
                name="name"
                id="name"
                onInput={handleInputs}
                value={data.name}
              />
              <input
                className="form__project--input"
                type="text"
                name="slogan"
                id="slogan"
                onInput={handleInputs}
                placeholder="Slogan"
                value={data.slogan}
              />
              <input
                className="form__project--input"
                type="text"
                name="repo"
                id="repo"
                placeholder="Repo"
                onInput={handleInputs}
                value={data.repo}
              />
              <input
                className="form__project--input"
                type="text"
                placeholder="Demo"
                name="demo"
                id="demo"
                onInput={handleInputs}
                value={data.demo}
              />
              <input
                className="form__project--input"
                type="text"
                placeholder="Tecnologías"
                name="technologies"
                id="technologies"
                onInput={handleInputs}
                value={data.technologies}
              />
              <textarea
                className="form__project--textarea"
                type="text"
                placeholder="Descripción"
                name="desc"
                id="desc"
                onInput={handleInputs}
                value={data.desc}
              ></textarea>
            </fieldset>
            <section className="form__askinfo">
              <p className="form__askinfo--subtitle">Cuéntanos sobre la autora</p>
              <hr className="form__askinfo--line" />
            </section>
            <fieldset className="form__autor">
              <input
                className="form__autor--input"
                type="text"
                placeholder="Nombre"
                name="autor"
                id="author"
                onInput={handleInputs}
                value={data.author}
              />
              <input
                className="form__autor--input"
                type="text"
                placeholder="Trabajo"
                name="job"
                id="job"
                onInput={handleInputs}
                value={data.job}
              />
            </fieldset>
            <section className="form__buttons-img">
              <button className="form__buttons-img--btn">Subir foto de proyecto</button>
              <button className="form__buttons-img--btn">Subir foto de autora</button>
            </section>
            <section className="form__buttons-img">
              <button className="form__buttons-img--btnlarge" onClick={handleClickCreateCard}>
                Crear Tarjeta
              </button>
            </section>
            <section className="form__card hidden">
              <span className=""> La tarjeta ha sido creada: </span>
              <a href="./#" className="" target="_blank" rel="noreferrer"> </a>
            </section>
          </section>
        </div>
      </main>
      <footer className="main"> 
         <img className='header__logo' src={logo} alt="logo Adalab" />  
      </footer>
    </div>
  );
}

export default App;