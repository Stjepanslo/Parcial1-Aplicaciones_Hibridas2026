export function createPage(content) {
    let html = ""
    html += `<!DOCTYPE html>`
    html += `<html lang="es">`
    html += `<head>`
    html += `<meta charset="UTF-8">`
    html += `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    html += `<title>Mi Portfolio</title>`
    html += `<style>`
    html += `body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }`
    html += `header { background: #333; color: white; padding: 20px; text-align: center; margin-bottom: 30px; }`
    html += `a { color: #0066cc; text-decoration: none; }`
    html += `a:hover { text-decoration: underline; }`
    html += `h1 { color: #333; }`
    html += `</style>`
    html += `</head>`
    html += `<body>`
    html += `<header><h1>Mi Portfolio de Proyectos</h1></header>`
    html += content
    html += `</body>`
    html += `</html>`
    return html
}