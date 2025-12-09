import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  
  // Opciones del menú de navegación
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'galeria', label: 'Galería', icon: '🖼️' },
    { id: 'eventos', label: 'Eventos', icon: '🎪' },
    { id: 'regalos', label: 'Lista de Regalos', icon: '🎁' },
    { id: 'contacto', label: 'Contacto', icon: '✉️' }
  ];
  
  // Contenido para cada sección
  const renderContent = () => {
    switch(activeTab) {
      case 'inicio':
        return (
          <div className="section-content">
            <h2 className="text-center mb-4">¡Feliz Navidad! 🎄</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="card holiday-card">
                  <div className="card-body">
                    <h5 className="card-title">Bienvenidos a la Temporada Navideña</h5>
                    <p className="card-text">Disfruta de la magia de la Navidad con nosotros. En este sitio encontrarás información sobre eventos, galerías de fotos y mucho más para celebrar esta época especial.</p>
                    <p className="card-text">La Navidad es un tiempo para compartir, reflexionar y pasar momentos inolvidables con nuestros seres queridos.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card holiday-card">
                  <div className="card-body">
                    <h5 className="card-title">🎅 Próximos Eventos Destacados</h5>
                    <ul className="holiday-list">
                      <li>24 de Diciembre - Nochebuena Familiar</li>
                      <li>25 de Diciembre - Celebración de Navidad</li>
                      <li>31 de Diciembre - Despedida de Año</li>
                      <li>5 de Enero - Visita de los Reyes Magos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button className="btn btn-holiday">¡Descubre la Magia Navideña!</button>
            </div>
          </div>
        );
      case 'galeria':
        return (
          <div className="section-content">
            <h2 className="text-center mb-4">Galería Navideña 🖼️</h2>
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="col-md-4 mb-4">
                  <div className="gallery-item">
                    <div className="gallery-img-placeholder">
                      {item === 1 && '🎄'}
                      {item === 2 && '🎅'}
                      {item === 3 && '🦌'}
                      {item === 4 && '🌟'}
                      {item === 5 && '🎁'}
                      {item === 6 && '☃️'}
                    </div>
                    <p className="text-center mt-2">Imagen navideña {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'eventos':
        return (
          <div className="section-content">
            <h2 className="text-center mb-4">Eventos Navideños 🎪</h2>
            <div className="card holiday-card mb-4">
              <div className="card-body">
                <h5 className="card-title">Calendario de Eventos Diciembre 2025</h5>
                <div className="table-responsive">
                  <table className="table table-hover holiday-table">
                    <thead>
                      <tr>
                        <th>Fecha</th>
                        <th>Evento</th>
                        <th>Hora</th>
                        <th>Lugar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>15 Dic</td>
                        <td>Mercado Navideño</td>
                        <td>10:00 - 20:00</td>
                        <td>Plaza Central</td>
                      </tr>
                      <tr>
                        <td>20 Dic</td>
                        <td>Concierto de Villancicos</td>
                        <td>18:00 - 21:00</td>
                        <td>Iglesia Principal</td>
                      </tr>
                      <tr>
                        <td>24 Dic</td>
                        <td>Cena de Nochebuena</td>
                        <td>20:00 - 00:00</td>
                        <td>Salón Comunitario</td>
                      </tr>
                      <tr>
                        <td>25 Dic</td>
                        <td>Celebración de Navidad</td>
                        <td>12:00 - 18:00</td>
                        <td>Parque Municipal</td>
                      </tr>
                      <tr>
                        <td>31 Dic</td>
                        <td>Fiesta de Fin de Año</td>
                        <td>22:00 - 02:00</td>
                        <td>Plaza Principal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      case 'regalos':
        return (
          <div className="section-content">
            <h2 className="text-center mb-4">Lista de Regalos 🎁</h2>
            <div className="row">
              <div className="col-md-8">
                <div className="card holiday-card">
                  <div className="card-body">
                    <h5 className="card-title">Ideas para Regalos Navideños</h5>
                    <ul className="holiday-list">
                      <li>Libros interesantes 📚</li>
                      <li>Ropa de invierno 🧥</li>
                      <li>Juegos de mesa 🎲</li>
                      <li>Productos de belleza 💄</li>
                      <li>Artículos de cocina 🍳</li>
                      <li>Plantas decorativas 🌱</li>
                      <li>Velas aromáticas 🕯️</li>
                      <li>Chocolates artesanales 🍫</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card holiday-card">
                  <div className="card-body">
                    <h5 className="card-title">Consejos para Regalar</h5>
                    <p>1. Piensa en los gustos de la persona</p>
                    <p>2. Considera regalos útiles</p>
                    <p>3. No es necesario gastar mucho</p>
                    <p>4. Lo hecho a mano tiene valor especial</p>
                    <p>5. Acompaña con una tarjeta personalizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contacto':
        return (
          <div className="section-content">
            <h2 className="text-center mb-4">Contacto Navideño ✉️</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="card holiday-card">
                  <div className="card-body">
                    <h5 className="card-title">Información de Contacto</h5>
                    <p><strong>Dirección:</strong> Calle Navidad, #123, Ciudad Felicidad</p>
                    <p><strong>Teléfono:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> contacto@navidadfeliz.com</p>
                    <p><strong>Horario de atención:</strong> Lunes a Viernes 9:00 - 18:00</p>
                    <div className="mt-4">
                      <h6>Síguenos en redes sociales:</h6>
                      <div className="social-icons">
                        <span className="social-icon">📘</span>
                        <span className="social-icon">📷</span>
                        <span className="social-icon">🐦</span>
                        <span className="social-icon">📺</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card holiday-card">
                  <div className="card-body">
                    <h5 className="card-title">Envíanos un Mensaje</h5>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="tu@email.com" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="message" rows="3" placeholder="Escribe tu mensaje..."></textarea>
                      </div>
                      <button type="submit" className="btn btn-holiday">Enviar Mensaje</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App holiday-theme">
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark holiday-nav">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="nav-brand-icon">🎄</span> Navidad 2025
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <button 
                    className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <span className="nav-icon">{item.icon}</span> {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container mt-4 mb-5">
        <div className="holiday-header text-center p-4 mb-4 rounded">
          <h1 className="display-5">¡Felices Fiestas! 🎅</h1>
          <p className="lead">Disfruta de la magia de la Navidad con nuestra página especial</p>
        </div>
        
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="holiday-footer text-center p-3">
        <div className="container">
          <p className="mb-0">🎄 ¡Que tengas una Feliz Navidad y un Próspero Año Nuevo! 🎅</p>
          <p className="small mt-2"> 2025 Página Navideña - Osvaldo Joaquin Saravia Chipana </p>
        </div>
      </footer>
    </div>
  );
}

export default App;