import '../styles/main.scss';
import cover from '../images/cover.jpeg';
/*import cover2 from '../images/cover_2.jpeg';*/
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
import { useState } from 'react';

function App() {
  const [name,setName] = useState('');

  const handleInputName = (ev) => {
    setName(ev.target.value);
  };


  return (
    <div className="container">
      <header className="header">
        <p className="header__text">Proyectos Molones</p>
        <img src={logo} alt="logo Adalab" />    
      </header>

      <main className="main">
        <section>
          <h1>Proyectos Molones</h1>
          <p>Escaparate en línea para recoger ideas a través de la tecnología.</p>
          <button>VER PROYECTOS</button>
        </section>
        
        <div className='main__section'>
          <section className="preview">
            <img className="preview__image" src={cover} alt="#" />
            <section className="preview__autor">
              <section className="preview__autor--infoproject project">
                <p className="project__subtitle">Personal Project Card</p>
                <hr className="project__line" />
                <h2 className="project__title">{name || 'Elegante Workspace'} </h2>
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
                onInput={handleInputName}
                value={name}
              />
              <input
                className="form__project--input"
                type="text"
                name="slogan"
                id="slogan"
                placeholder="Slogan"
              />
              <input
                className="form__project--input"
                type="text"
                name="repo"
                id="repo"
                placeholder="Repo"
              />
              <input
                className="form__project--input"
                type="text"
                placeholder="Demo"
                name="demo"
                id="demo"
              />
              <input
                className="form__project--input"
                type="text"
                placeholder="Tecnologías"
                name="technologies"
                id="technologies"
              />
              <textarea
                className="form__project--textarea"
                type="text"
                placeholder="Descripción"
                name="desc"
                id="desc"
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
                id="autor"
              />
              <input
                className="form__autor--input"
                type="text"
                placeholder="Trabajo"
                name="job"
                id="job"
              />
            </fieldset>
            <section className="form__buttons-img">
              <button className="form__buttons-img--btn">Subir foto de proyecto</button>
              <button className="form__buttons-img--btn">Subir foto de autora</button>
            </section>
            <section className="form__buttons-img">
              <button className="form__buttons-img--btnlarge" onClick="{handleClickCreateCard}">
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
    </div>
  );
}

export default App;
