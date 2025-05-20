# 🐉 Dragon Ball Finder

They say that to find the legendary Dragon Balls, you must first know the characters who live in this universe...  
This app helps you begin that journey: searching and discovering the characters of **Dragon Ball** 🌍

## 🖼️ Screenshots (Landing & Finder)

**Landing Page**  
<img src="./public/landing.png" alt="Landing page" width="300" />

**Finder Page**  
<img src="./public/finder.png" alt="Finder page" width="300" />

### ✨ Current Features

- Search for characters by **name** in real time.
- View a **card** with image, description, and base power (_ki_).
- Navigate between a **custom landing page** and the search page, guided by Kinto, the magic cloud ☁️.

### 📌 Upcoming Improvements

I’m working beyond the 2-hour limit to add a new feature: **ki range filtering** (`From` / `To`).  
Following an iterative approach inspired by Agile/Scrum methodologies, I delivered a first functional and usable version of the application. This way, the app can already be explored while evolving through incremental updates.

**Additional improvement:**  
After the initial 2-hour version, I continued working on the codebase to improve its structure.  
I split the main search page (`FinderPage`) into **reusable components** (`SearchForm`, `CharacterList`, `CharacterItem`, and `BackToHome`).

## 🧱 Reusable Structure

The landing page is based on my own **project template**, which I use as a starting point for new applications.  
It helps me reuse styles, structure, and logic quickly, keeping the code clean and easy to update.

## 🛠 Technologies Used

- **React + Vite** – Main stack used to build and run the app.
- **React Router** – For navigation between landing and search views.
- **Fetch API** – To get character data from the API.
- **CSS Flexbox** – To arrange and align page elements.
- **Dragon Ball API** – Data source used: [https://web.dragonball-api.com/documentation](https://web.dragonball-api.com/documentation)
- **Git (with branches)** – I use `dev` for development and `main` as the stable production branch.
- **GitHub Pages** – Used to deploy the app statically from the `/docs` folder, generated with Vite.
- **Documentation and resources** – I relied on the official documentation for React and Vite, development guides from Bluuweb, and ChatGPT to organize components and solve specific questions during development.

## 📚 Resources

This project uses a **small personal development guide** that helps me start new applications quickly and consistently.  
It includes a basic set of styles, reusable components, utility functions like `fetch` and logic for forms or filters, among others.  
Thanks to this, I can focus on functionality without starting everything from scratch.

## 🚀 Deployment

The app is deployed using **GitHub Pages**.  
I use a script already configured to build the project with Vite and move the output files to the `/docs` folder, so GitHub can serve them from the `main` branch.

Good luck on your journey!  
Kame... hame... ha! 🔥🐉

---

# 🐉 Dragon Ball Finder

Dicen que para encontrar las legendarias bolas de dragón, primero debes conocer bien a los personajes que habitan su universo...  
Esta aplicación te permite empezar ese viaje: buscando y descubriendo a los personajes de **Dragon Ball** 🌍

## 🖼️ Capturas (Landing y Buscador)

**Landing Page**  
<img src="./public/landing.png" alt="Landing page" width="300" />

**Página de búsqueda**  
<img src="./public/finder.png" alt="Finder page" width="300" />

### ✨ Funcionalidades actuales

- Buscar personajes por **nombre** en tiempo real.
- Ver una **carta desplegable** con imagen, descripción y poder base (_ki_).
- Navegar entre una **landing page personalizada** y el buscador, guiado por Kinto, la nube mágica ☁️.

### 📌 Próximas mejoras

Estoy trabajando fuera del límite de 2h para implementar el **filtro por rango de Ki** (`From` / `To`).  
Siguiendo un enfoque iterativo inspirado en metodologías Agile/Scrum, he entregado una primera versión funcional y utilizable de la aplicación. De este modo, la aplicación ya puede disfrutarse mientras evoluciona con nuevas entregas incrementales.

**Mejora adicional:**  
Después de la versión inicial realizada en 2 horas, continué trabajando en la base de código para mejorar su estructura.  
Separé la página principal de búsqueda (`FinderPage`) en **componentes reutilizables** (`SearchForm`, `CharacterList`, `CharacterItem` y `BackToHome`).

## 🧱 Reutilización de estructura

La landing está basada en una **plantilla de desarrollo propia**, que utilizo como punto de partida para nuevos proyectos.  
Esto me permite **reutilizar estilos, estructura y lógica** de forma eficiente y mantener el código limpio y escalable.

## 🛠 Tecnologías utilizadas

- **React + Vite** – Stack principal del proyecto. Vite permite desarrollar y compilar aplicaciones React de forma rápida y moderna.
- **React Router** – Para la navegación entre la landing page y el buscador.
- **Fetch API** – Para obtener los datos de los personajes desde la API.
- **CSS Flexbox** – Para estructurar y alinear los elementos visualmente.
- **Dragon Ball API** – Fuente de datos utilizada: [https://web.dragonball-api.com/documentation](https://web.dragonball-api.com/documentation)
- **Git (con ramas)** – Uso de `dev` para desarrollo y `main` como rama estable para producción.
- **GitHub Pages** – Usado para desplegar la aplicación desde la carpeta `/docs`, generada con Vite.
- **Documentación y recursos** – Me apoyé en la documentación oficial de React y Vite, las guías para desarrollo de Bluuweb, y ChatGPT para organizar componentes y resolver dudas específicas durante el desarrollo.

## 📚 Recursos

Este proyecto utiliza una **pequeña guía de desarrollo propia**.  
Incluye una pequeña muestra de estilos base, componentes reutilizables, funciones como `fetch`, lógica para formularios o filtros, entre otras. Gracias a esto, puedo centrarme en la funcionalidad sin tener que empezar desde cero cada vez.

## 🚀 Deploy

Uso un script para construir el proyecto con Vite y mover los archivos generados a la carpeta `/docs`, desde donde GitHub publica el contenido en la rama `main`.

¡Suerte en tu búsqueda!  
Kame... hame... ¡ha! 🔥🐉
