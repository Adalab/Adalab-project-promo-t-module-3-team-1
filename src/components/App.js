<<<<<<< HEAD
import '../styles/main.scss';
import cover from '../images/cover.jpeg';
import cover2 from '../images/cover_2.jpeg';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faLaptopCode } from '@fortawesome/fa-solid fa-laptop-code';

function App() {
  return (
    <div className="container">
      <header className="header">
      {/*<FontAwesomeIcon icon={faLaptopCode} style={{color: "#ffffff",}} />*/}
        <p className="header__text">Proyectos Molones</p>
      </header>
      <main className="main">
        <section className="preview">
          <img className="preview__image" src={cover} alt="#" />

          <section className="preview__autor">
            <section className="project info-project">
              <p className="project__subtitle">Personal Project Card</p>
              <hr className="project__line" />

              <h2 className="project__title">Elegant Workspace</h2>
              <p className="project__slogan">Diseños Exclusivos</p>
              <p className="project__desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!
              </p>
              <section className="project__technologies">
                <p className="project__technologies--text">React JS, MongoDB</p>
              </section>
            </section>

            <section className="infoautor info-autor">
              <img className="infoautor__image" src={user} alt="#" />
              <p className="infoautor__job">Full Stack Developer</p>
              <p className="infoautor__name">Emmelie Björklund</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="form__title">Información</h2>

          <section className="form__askinfo ask-info">
            <p className="form__askinfo--subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="form__askinfo--line" />
          </section>

          <fieldset className="form__project">
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
            />
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            />
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo"
            />
            <input
              className="input"
              type="text"
              placeholder="Demo"
              name="demo"
              id="demo"
            />
            <input
              className="input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
            />
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
            ></textarea>
          </fieldset>

          <section className="form__ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="form__autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
            />
          </fieldset>

          <section className="form__buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="form__buttons-img">
            <button className="btn-large" onClick="{handleClickCreateCard}">
              Crear Tarjeta
            </button>
          </section>

          <section className="form__card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="./#" className="" target="_blank" rel="noreferrer">
              {' '}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
=======
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
let data = {
  name:''
  ,slogan:''
  ,repo:''
  ,demo:''
  ,technologies:''
  ,desc:''
  ,author:''
  ,job:''
  ,projImg:''
  ,authImg:''
}
function App() {
  const handleClickCreateCard = (ev) => {
    //ev.preventDefault();
    console.log('Has clicado el boton');
  }
  let [input,setInputs ] = useState (data);
  const handleInputs = (ev) => {
    const inputId = ev.target.id;
    setInputs({...input,[inputId]:ev.target.value});
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
                <p className="project__slogan">Diseños Exclusivos</p>
                <p className="project__desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                  harum laboriosam saepe earum doloribus aperiam, ullam culpa
                  accusantium placeat odit corrupti ipsum!
                </p>
                <section className="project__technologies">
                  <p className="project__technologies--text">React JS, MongoDB</p>
                  <p className="project__technologies--icon"><FontAwesomeIcon icon={faGlobe}/></p>
                  <p className="project__technologies--icon"><FontAwesomeIcon icon={faGithub}/></p>
                </section>
              </section>
              <section className="preview__autor--infoautor infoAutor">
                <img className="infoAutor__image" src={user} alt="#" />
                <p className="infoAutor__job">Full Stack Developer</p>
                <p className="infoAutor__name">Emmelie Björklund</p>
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
                value={input.name}
              />
              <input
                className="form__project--input"
                type="text"
                name="slogan"
                id="slogan"
                onInput={handleInputs}
                placeholder="Slogan"
                value={input.slogan}
              />
              <input
                className="form__project--input"
                type="text"
                name="repo"
                id="repo"
                placeholder="Repo"
                onInput={handleInputs}
                value={input.repo}
              />
              <input
                className="form__project--input"
                type="text"
                placeholder="Demo"
                name="demo"
                id="demo"
                onInput={handleInputs}
                value={input.demo}
              />
              <input
                className="form__project--input"
                type="text"
                placeholder="Tecnologías"
                name="technologies"
                id="technologies"
                onInput={handleInputs}
                value={input.technologies}
              />
              <textarea
                className="form__project--textarea"
                type="text"
                placeholder="Descripción"
                name="desc"
                id="desc"
                onInput={handleInputs}
                value={input.desc}
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
                value={input.author}
              />
              <input
                className="form__autor--input"
                type="text"
                placeholder="Trabajo"
                name="job"
                id="job"
                onInput={handleInputs}
                value={input.job}
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
            <section className="form__card">
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
>>>>>>> dev
