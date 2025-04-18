<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi sitio web</title>
    <style>
            @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
      
      /*Variables definidas*/
      :root{
          --pag-bg: #b7b7c1;
          --menu-bg: #234567;
          --text-c: #F6EEEEB0;
          --nav-bg: #052c4a;
          --line: #485460;
          --title-ff: 'Lato';
          --text-ff: "Roboto";
          --size-fz-text: 12px;
          --size-fz-title: 18px;
      }
      
      *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      
      }
      
      body{
          background: var(--pag-bg);
          font-family: var(--text-ff);
          padding: 20px;
      }
      
      /* Menu Hamburguesa*/
      .menu-hamb {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 30px;
          cursor: pointer;
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1001;
      }
      
      .menu-hamb span{
          display: block;
          width: 100%;
          height: 3px;
          background: var(--nav-bg);
          border-radius: 3px;
          transition: all 0.3s ease;
          transform-origin: center;
      }
      
      .nav-menu{
          position: fixed;
          top: 0;
          left: -250px;
          width: 250px;
          height: 100vh;
          background: var(--menu-bg);
          padding: 70px 20px 20px;
          transition: all 0.3s ease;
          z-index: 1000;
      }
      
      .nav-menu ul{
          list-style: none;
      }
      
      .nav-menu ul li{
          margin-bottom: 15px;
      }
      
      .nav-menu ul li a{
          color: var(--text-c);
          text-decoration: none;
          font-size: calc(var(--size-fz-text) * 1.5);
          display: block;
      }
      
      #menu-hamb-check{
          display: none;
      }
      
      #menu-hamb-check:checked ~ .nav-menu{
          left: 0;
      }
      
      #menu-hamb-check:checked ~ .menu-hamb span:nth-child(1){
          transform: translateY(8px) rotate(45deg)
      }
      
      #menu-hamb-check:checked ~ .menu-hamb span:nth-child(2){
          opacity: 0;
          transform: scale(0);
      }
      
      #menu-hamb-check:checked ~ .menu-hamb span:nth-child(3){
          transform: translateY(-8px) rotate(-45deg)
      }
      
      /*header*/
      .header{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
      }
      
      .title{
          font-size: calc(var(--size-fz-title) * 2.2);
          color: var(--nav-bg);
          font-family: var(--title-ff);
          transition: all .3s ease-out;
      }
      
      .title:hover{
          border-bottom: 4px dashed var(--line);
      }
      
      .subtitle{
          font-size: calc(var(--size-fz-text) * 2.2);
          color: var(--nav-bg);
      }
      
      /*line*/
      .line{
          display: block;
          margin: 10px 0;
          width: 99%;
          height: 5px;
          background: var(--nav-bg);
          border-radius: 3px;
      }
      
      /*seccion principal*/
      .principal-containter{
          display: flex;
          flex-direction: column;
          width: 99%;
      } 
      
      /*seccion quien soy*/
      .container-quiensoy {
          display: flex;
          flex-direction: column;
          margin: 5px auto;
          min-height: 300px;
          height: auto;
          box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, 
                      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
          padding: 20px;
          margin: 20px auto;
          text-align: justify;
          background-image: url(../img/seccion1.png);
          background-size: cover;
          background-repeat: no-repeat;
          overflow: hidden;
      }
      
      .container-quiensoy > .subtitle{
          margin: 10px auto;
          font-size: var(--text-ff);
          letter-spacing: 3px;
          font-family: var(--title-ff);
          font-weight: 900;
      }
      
      /*seccion tecnologia*/
      .container-tecnologias{
          margin: 5px auto;
          width: 80%;
          height: auto;
          box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, 
                      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
          padding: 20px;
          margin: 20px auto;
      }
      
      /* grid para arreglar el diseno */
      .cajas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px; /* Espacio entre título y grid */
      }
      .container-actividades > .subtitle{
          display: block;
          width: 100%;
          grid-column: unset;
      }
      
      .container-tecnologias > article{
          margin: 0;
          padding: 15px;
      }
      
      .container-tecnologias .subtitle{
          font-size: calc(var(--size-fz-text) * 1.5);
          text-align: center;
          letter-spacing: 3px;
          margin-bottom: 10px;
      }
      
      .container-tecnologias > .html, .container-tecnologias > .css, .container-tecnologias > .js{
          margin: 0 auto;
          box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 8px -2px, 
                      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px; 
          margin-bottom: 10px;
      }
      
      .html .subtitle2, .css .subtitle2, .js .subtitle2{
          margin: 5px auto;
          text-align: center;
          color: var(--nav-bg);
          transition: all .3s ease;
      }
      
      .img-html:hover{
          filter: drop-shadow(5px 5px 4px #F8DFAE);
      }
      
      .img-css:hover{
          filter: drop-shadow(5px 5px 4px #7DBBEA);
      }
      
      .img-js:hover{
          filter: drop-shadow(5px 5px 4px #DCBC9C);
      }
      
      /*seccion actividades favoritas*/
      .container-actividades{
          display: flex;
          flex-direction: column;
          margin: 5px auto;
          width: 80%;
          height: auto;
          box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, 
                      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
          padding: 20px;
          margin: 20px auto;
      }
      
      /* seccion actividades*/
      .container-actividades .subtitle{
          font-size: calc(var(--size-fz-text)* 1.5);
          color: var(--nav-bg);
          text-align: center;
      }
      
      fieldset{
          margin: 10px 0;
          color: var(--nav-bg);
          border: 2px dashed #052c4a;
      }
      
      input[type='text']{
          width: 88%;
          height: 30px;
          border: none;
          margin: 10px 0;
          margin-left: 15px;
          font-family: var(--text-ff);
          font-weight: 400;
          letter-spacing: 2px;
      }
      
      textarea{
          width: 88%;
          height: 100px;
          border: none;
          margin: 10px 0;
          margin-left: 15px;
          font-family: var(--text-ff);
          font-weight: 400;
          letter-spacing: 2px;
      }
      
      input[type='submit']{
          padding: 8px;
          text-transform: uppercase;
          background: var(--nav-bg);
          color: var(--pag-bg);
          font-weight: 900;
      }
      
      input[type='submit']:hover{
          background-image: linear-gradient(to right top, #dcbc9c, #e9b2a5, #ebacb9, #dcacd1, #bbb1e5, #9abcef, #7ac7ec, #6bcedd, #82d7c9, #a9ddb5, #d2dfaa, #f8dfae);
          color: white;
      }
      
      .actividad{
          margin-top: 10px;
          text-align: right;
          text-transform: uppercase;
          color: var(--nav-bg);
      }
      @media screen and (min-width: 1024px) {
          .nav-menu {
              width: 300px;
              left: -300px;
          }
          
          .principal-containter {
              max-width: 1200px;
              margin: 0 auto;
          }
      }
      
      @media (min-width: 768px) and (max-width: 1023px) {
          .container-quiensoy,
          .container-tecnologias,
          .container-actividades {
              width: 90%;
          }
          
          .container-tecnologias {
              grid-template-columns: repeat(2, 1fr);
          }
      }
      
      @media (max-width: 767px) {
          body {
              padding: 10px;
          }
          
          .container-quiensoy,
          .container-tecnologias,
          .container-actividades {
              width: 95%;
          }
          
          .container-tecnologias {
              grid-template-columns: 1fr;
          }
          
          .menu-hamb {
              top: 10px;
              right: 10px;
          }
      }
      
      /* Mejorar el formulario */
      form {
          display: flex;
          flex-direction: column;
          gap: 15px;
      }
      
      fieldset {
          padding: 10px;
      }
      
      input[type='text'],
      textarea {
          width: 100%;
          margin-left: 0;
          padding: 8px;
      }
      
      input[type='submit'] {
          align-self: flex-start;
          padding: 10px 20px;
      }

    </style>
</head>
<body>
    <!--Navegacion Hamburguesa estos dos se enlazan con for id-->
    <input type="checkbox" id="menu-hamb-check">
    <label for="menu-hamb-check" class="menu-hamb" onclick="activarBarra()">
        <span></span>
        <span></span>
        <span></span>
    </label>
    <nav id="nav-menu" class="nav-menu">
        <ul>
            <li><a href="#quiensoy" onclick="ocultarBarra()">Quien soy</a></li>
            <li><a href="#tecnologias" onclick="ocultarBarra()">Tecnologias</a></li>
            <li><a href="#actividades" onclick="ocultarBarra()">Actividades</a></li>
            <li><a href="#" onclick="ocultarBarra()">Actividades Realizadas</a></li>
        </ul>

    </nav>

    <!-- Header -->
     <header class="header">
        <h1 class="title">AztroGerry-Dev</h1>
        <h2 class="subtitle">Mi Página Web</h2>
     </header>

    <!--Line divisoria-->
    <span class="line"></span>

    <!--Main / seccion quien soy-->
    <main class="principal-containter" id="quiensoy">

        <section class="container-quiensoy">
            <h2 class="subtitle">¿QUIÉN SOY?</h2>
             <p>En este proyecto hablaré un poco de mí, me considero una persona que le gusta estar aprendiendo cosas referentes a la tecnología referente a la creación de Páginas Web, uso de las Inteligencias Artificiales, Desarrolló de Videojuegos, entro otros que permitan resolver problemas de nuestra vida cotidiana.</p>
            <p>Por otra parte me gusta realizar dibujos y el uso de aplicaciones que permitan el desarrollo en 3D como Blender o Maya.</p>
            <p>He trabajado 15 años como docente impartiendo las clases de Matemáticas, enseñanza de las mismas y áreas referentes en programación como el uso de Arduino o la librería de Raylib, desarrollo de algoritmos usando Pseint, entre otros.</p>
        </section>

        <section class="container-tecnologias" id="tecnologias">

            <h2 class="subtitle">MIS TECNOLOGÍAS FAVORITAS</h2>
            <div class="cajas-grid">
                <article class="html">
                    <h3 class="subtitle2">HTML</h3>
                    <img src="./assets/img/html.svg" alt="logo de html" class="img-html" title="lenguaje de marcado que se utiliza para estructurar y desplegar páginas web">
                </article>
                <article class="css">
                    <h3 class="subtitle2">CSS</h3>
                    <img src="./assets/img/css.svg" alt="logo de html" class="img-css" title="lenguaje de programación que se utiliza para definir el diseño de páginas web">
                </article>
                <article class="js">
                    <h3 class="subtitle2">JAVASCRIPT</h3>
                    <img src="./assets/img/js.svg" alt="logo de html" class="img-js" title="lenguaje de programación que se usa para crear contenido dinámico en páginas web">
                </article>
            </div>
        </section>

        <section class="container-actividades" id="actividades">
            <h2 class="subtitle">MIS ACTIVIDADES FAVORITAS</h2>
            <form action="">
                <fieldset>
                    <legend>Ingresar actividades</legend>
                    <input type="text" maxlength="50" name="name" id="name" placeholder="Nombre de la actividad">
                    <br>
                    <textarea maxlength="100" name="message" id="message" placeholder="Descripcion de la imagen"></textarea>
                </fieldset>
                <fieldset>
                    <legend>Ingresar la url</legend>
                    <input type="text" name="img" id="img" placeholder="Nombre de url">
                </fieldset>
                <input type="submit" value="Agregar Actividad">
                <br>
            </form>
                <span class="actividad">Sin actividades agregadas</span>
        </section>

    </main>

     <!--Line divisoria-->
     <span class="line"></span>

    <script>
            "use strict";
        
        // creando una funcion para que se cierre el menu
        // al dar click
        function ocultarBarra() {
          var navBarDes = document.querySelector('.nav-menu');
          navBarDes.style.display = 'none';
        }
        function activarBarra() {
          var navBarAct = document.querySelector('.nav-menu');
          navBarAct.style.display = 'block';
        }
    </script>
</body>
</html>
