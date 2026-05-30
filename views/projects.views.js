import { createPage } from "../page/utils.js"

export function homePage() {
    const sections = [
        { slug: "web", nombre: "Páginas Web" },
        { slug: "landing", nombre: "Landing Page" },
        { slug: "ecommerce", nombre: "E-commerce" },
        { slug: "cursos", nombre: "Cursos" },
        { slug: "material", nombre: "Material Pedagógico" }
    ]
    
    let html = "<h2>Selecciona una categoría:</h2>"
    html += "<ul>"
    sections.forEach(section => {
        html += `<li><a href="/proyectos/${section.slug}">${section.nombre}</a></li>`
    })
    html += "</ul>"
    
    return createPage(html)
}

export function createProyectosList(proyectos, section) {
    let html = `<h2>Proyectos - ${section}</h2>`
    html += `<a href="/">← Volver al menú</a>`
    html += "<ul>"
    
    if (proyectos.length === 0) {
        html += "<li>No hay proyectos en esta categoría</li>"
    } else {
        proyectos.forEach(proyecto => {
            html += `<li>`
            html += `<h3>${proyecto.name}</h3>`
            html += `<p>${proyecto.description}</p>`
            html += `<a href="/proyecto/${proyecto._id}">Ver más</a>`
            html += `</li>`
        })
    }
    
    html += "</ul>"
    return createPage(html)
}

export function createProyectoPage(proyecto) {
    let html = `<h2>${proyecto.name}</h2>`
    html += `<img src="${proyecto.img}" width="400" alt="${proyecto.name}">`
    html += `<p>${proyecto.description}</p>`
    html += `<p><strong>Tecnologías:</strong> ${proyecto.technologies.join(", ")}</p>`
    html += `<p><a href="${proyecto.link}" target="_blank">Ver proyecto</a></p>`
    html += `<a href="/">← Volver al menú</a>`
    
    return createPage(html)
}

export function create404Page() {
    let html = "<h1>404 - Página no encontrada</h1>"
    html += `<a href="/">← Volver al menú</a>`
    
    return createPage(html)
}