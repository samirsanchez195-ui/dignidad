# Memorial Ciudadano del Pueblo Colombiano • Landing Page de Coadyuvancia

Plataforma cívica y jurídica para visibilizar el **Memorial de Apoyo y Respaldo Ciudadano como Coadyuvantes** a la impugnación formulada por el ilustre jurista y exjuez penal de la República, **Doctor Gabriel Jorge Triana Perdomo**, ante la Sala de Casación Civil de la Honorable Corte Suprema de Justicia (Radicado N° 11001-2203-000-2026-03364-00).

---

## 🏛️ Información del Trámite Constitucional

- **Trámite**: Segunda Instancia - Acción de Tutela.
- **Radicado Oficial**: `11001-2203-000-2026-03364-00`.
- **Corporación Judicial**: Sala de Casación Civil de la Honorable Corte Suprema de Justicia.
- **Fallo Impugnado**: Sentencia de primera instancia del 19 de agosto de 2026 de la Sala Quinta de Decisión Civil del Tribunal Superior del Distrito Judicial de Bogotá.
- **Accionados**: Consejo Nacional Electoral (CNE), Registraduría Nacional del Estado Civil, Fiscalía General de la Nación.
- **Vinculado**: Abelardo Gabriel de la Espriella Otero (actual Presidente de la República de Colombia) y otros.
- **Accionante Principal**: Dr. Gabriel Jorge Triana Perdomo (Exjuez penal por 41 años, calificación de Excelencia 97/100, preseleccionado para Magistrado de la Corte Suprema en 2020).
- **Figura Legal**: Coadyuvancia ciudadana conforme al **Artículo 13 del Decreto 2591 de 1991**.
- **Formulario Oficial de Google Forms**: [https://forms.gle/UrTeZuqjvCvnhndD7](https://forms.gle/UrTeZuqjvCvnhndD7)

---

## 🚀 Características de la Landing Page

1. **Diseño Institucional y de Alto Impacto**:
   - Paleta solemne azul marino, dorado de justicia y rojo cívico.
   - Tipografía adaptada con fuentes sans-serif modernas (`Plus Jakarta Sans`) y tipografía jurídica (`Merriweather` / `Cinzel`).
   - Totalmente responsiva para smartphones, tablets y computadores de escritorio.

2. **Exposición de Motivos Dinámica e Interactiva**:
   - Acordeones desplegables con las 6 causales jurídicas completas (vulneración colectiva, discurso de deshumanización, irregularidades electorales e impunidad penal, acto de posesión ilegal, transgresiones de los primeros 21 días de gobierno y el perjuicio irremediable).
   - Botón para desplegar o colapsar todos los motivos simultáneamente.

3. **Canal de Firma y Coadyuvancia**:
   - Acceso directo al formulario oficial de Google Forms.
   - Código QR generado para escanear y firmar desde teléfonos móviles.
   - Ventana modal integrada para responder dentro del sitio.

4. **Kit de Difusión Inmediata**:
   - Botón de **WhatsApp** con mensaje formateado listo para reenviar a grupos y contactos.
   - Botones para **X (Twitter)**, **Telegram** y **Facebook**.
   - Botón de **Copiar Enlace** al portapapeles con notificación toast flotante.

5. **Lector Oficial del Memorial y Descarga**:
   - Cabecera facsimilar del memorial judicial radicado el 1 de septiembre de 2026.
   - Formato optimizado para impresión judicial limpia (`Ctrl + P` o botón "Imprimir / Guardar como PDF") sin barras de navegación ni menús.

---

## 💻 Cómo Visualizar y Ejecutar Localmente

### Opción 1: Abrir directamente en el navegador
Hacer doble clic en el archivo `index.html` o abrirlo con Chrome, Safari, Firefox o Edge.

### Opción 2: Iniciar un servidor local ligero
Desde la terminal en esta carpeta:
```bash
python3 -m http.server 8080
```
Luego ingresar a:
```
http://localhost:8080
```

---

## 🌐 Cómo Publicar en Internet (Hosting Gratuito)

- **Vercel / Netlify**: Arrastrar la carpeta `triana` a la interfaz web de [Netlify Drop](https://app.netlify.com/drop) o ejecutar `npx vercel`.
- **GitHub Pages**: Crear un repositorio en GitHub, subir estos archivos y activar GitHub Pages en la rama `main`.
- **Cloudflare Pages**: Conectar el repositorio o subir la carpeta estática.

---

## 📁 Estructura del Proyecto

```
triana/
├── index.html              # Estructura principal y contenido íntegro del memorial
├── styles.css              # Estilos visuales, temas, fuentes y hoja de impresión
├── app.js                  # Lógica de acordeones, modales, contadores y difusión
├── images.jpeg             # Ilustración editorial de la justicia y Plaza de Bolívar
├── documento_cabecera.png  # Cabecera facsimilar oficial del memorial radicado
└── README.md               # Documentación y guía del proyecto
```
