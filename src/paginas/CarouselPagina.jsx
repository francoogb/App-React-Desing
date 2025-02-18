import { Breadcrumb, Carousel } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import naturaleza from '../../public/img/img1.jpg';
import naturaleza1 from '../../public/img/img2.jpg';
import naturaleza2 from '../../public/img/img3.jpg';
import naturaleza3 from '../../public/img/img4.jpg';

const CarouselPagina = () => {
  // Estado para controlar la altura responsiva
  const [carouselHeight, setCarouselHeight] = useState('420px');

  // Función para ajustar la altura según el ancho de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCarouselHeight('300px');
      } else if (window.innerWidth <= 1024) {
        setCarouselHeight('380px');
      } else {
        setCarouselHeight('420px');
      }
    };

    // Ejecutar al cargar y cuando cambie el tamaño de la ventana
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Estilo común para el contenedor del slide
  const contentStyle = {
    height: carouselHeight,
    background: '#f0f0f0',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    position: 'relative',
  };

  // Estilo común para todas las imágenes
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  };

  // Estilo para la descripción que aparece sobre cada imagen
  const descriptionStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
    color: '#fff',
    padding: '25px 20px 20px',
    textAlign: 'center',
  };

  // Estilo para el contenedor principal
  const containerStyle = {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '15px',
    backgroundColor: '#fcfcfc',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
  };

  return (
    <div className="carousel-page-container" style={containerStyle}>
      <Breadcrumb
        items={[
          {
            title: <Link to="/" style={{ color: '#0056b3', fontWeight: '500' }}>Home</Link>,
          },
          {
            title: <span style={{ color: '#666' }}>Galería</span>,
          },
        ]}
        style={{ margin: '15px 0', fontSize: '15px' }}
      />
      
      <h1 style={{ 
        textAlign: 'center', 
        margin: '25px 0', 
        fontWeight: '700', 
        color: '#1a1a1a', 
        fontSize: 'calc(1.5rem + 0.5vw)',
        letterSpacing: '-0.5px'
      }}>
        Galería de Paisajes Naturales
      </h1>
      
      <Carousel
        autoplay={true}
        autoplaySpeed={5000}
        dotPosition="bottom"
        effect="fade"
        style={{ 
          width: '100%',
          padding: '15px',
          backgroundColor: '#ffffff',
          borderRadius: '10px', 
          boxShadow: '0 3px 15px rgba(0, 0, 0, 0.08)',
          margin: '10px 0 30px',
        }}
      >
        <div>
          <div style={contentStyle}>
            <img 
              src={naturaleza} 
              alt="Montañas Majestuosas" 
              style={imageStyle} 
            />
            <div style={descriptionStyle}>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: window.innerWidth <= 768 ? '18px' : '22px',
                fontWeight: '600',
                textShadow: '1px 1px 3px rgba(0,0,0,0.6)'
              }}>
                Montañas Majestuosas
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.4',
                opacity: '0.9'
              }}>
                Disfruta de impresionantes vistas alpinas en la cordillera más espectacular
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div style={contentStyle}>
            <img 
              src={naturaleza1} 
              alt="Bosques Frondosos" 
              style={imageStyle} 
            />
            <div style={descriptionStyle}>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: window.innerWidth <= 768 ? '18px' : '22px',
                fontWeight: '600',
                textShadow: '1px 1px 3px rgba(0,0,0,0.6)'
              }}>
                Bosques Frondosos
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.4',
                opacity: '0.9'
              }}>
                Explora la belleza y serenidad de los bosques más densos del continente
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div style={contentStyle}>
            <img 
              src={naturaleza2} 
              alt="Atardeceres Mágicos" 
              style={imageStyle} 
            />
            <div style={descriptionStyle}>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: window.innerWidth <= 768 ? '18px' : '22px',
                fontWeight: '600',
                textShadow: '1px 1px 3px rgba(0,0,0,0.6)'
              }}>
                Atardeceres Mágicos
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.4',
                opacity: '0.9'
              }}>
                Contempla la magia del atardecer con colores que transforman el horizonte
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div style={contentStyle}>
            <img 
              src={naturaleza3} 
              alt="Ríos Cristalinos" 
              style={imageStyle} 
            />
            <div style={descriptionStyle}>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: window.innerWidth <= 768 ? '18px' : '22px',
                fontWeight: '600',
                textShadow: '1px 1px 3px rgba(0,0,0,0.6)'
              }}>
                Ríos Cristalinos
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.4',
                opacity: '0.9'
              }}>
                Sumérgete en la claridad y pureza del agua en paisajes de ensueño
              </p>
            </div>
          </div>
        </div>
      </Carousel>
      
      <div style={{ 
        textAlign: 'center', 
        margin: '0 auto 30px', 
        color: '#555', 
        fontSize: 'calc(0.95rem + 0.1vw)',
        maxWidth: '800px',
        lineHeight: '1.6',
        padding: '0 20px'
      }}>
        <p>Explora nuestra exclusiva galería de impresionantes paisajes naturales capturados por fotógrafos profesionales en los rincones más remotos del planeta.</p>
        <p style={{ fontSize: 'calc(0.9rem + 0.1vw)', color: '#777', marginTop: '10px' }}>Actualizado mensualmente con nuevas imágenes de alta resolución.</p>
      </div>
    </div>
  );
};

export default CarouselPagina;