import React from 'react';
import '../styles/components/Extra.css'

const Extra = () => {
    return (  
        <div className='Extra'>
            <div className='aboutus'>
                <h2>Sobre nosotros</h2>
                <span>En Temazcalli, somos un equipo apasionado que se dedica a la creación de productos nutricionales innovadores y saludables. Nuestro proyecto se centra en el desarrollo de una barra complementaria única, basada en el diente de león, una planta con propiedades nutricionales y medicinales. Nos encontramos en Morelos, México, y estamos comprometidos en ofrecer una alternativa natural y deliciosa para aquellos que buscan mejorar su bienestar y cuidar de su salud. Nuestra barra, conocida como Temazcalli, combina cuidadosamente los beneficios del diente de león con ingredientes seleccionados, brindando una opción nutritiva y sabrosa para quienes desean llevar un estilo de vida saludable. En Temazcalli, nos enorgullece proporcionar productos de calidad que contribuyan al bienestar de nuestros clientes.</span>
                <img src="https://i.postimg.cc/j5Z653Ky/temazcalli-1.jpg" alt="temazcalli" />
            </div>
            <div className='mercado'>
                <h2>Principal mercado</h2>
                <ul>
                    <li>Gimnasios</li>
                    <li>Escuelas</li>
                    <li>Tiendas naturistas</li>
                </ul>
            </div>
            <div className='redes'>
                <h2>Encuentranos en:</h2>
                <a href="https://www.facebook.com/profile.php?id=100054203813744&mibextid=ZbWKwL">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                </a>
            </div>
        </div>
    );
}
 
export default Extra;