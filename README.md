# Esto es un Titulo H1

Puedo agregar link, imagenes, etc.

Puedo destacar un **texto** *cursiva*

Para agregar un link [esto es un link](www.google.com)

Puedo agregar imagenes ![nombre-imagen](ruta de la imagen: img/codigo.jpj)



# Mensajes Privados Codificados
Aplicación para el cifrado de información importante y/o sensible que deba ser protegida. El metodo de cifrado se denomina:

## Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.


## Definición del producto

Se basa en una aplicación web que servirá para que el usuario pueda cifrar y descifrar un texto mediante una clave (_offset_) definida por el mismo.

Va dirigido a personas de empresas que intercambian a diario información relevante y sensible por medios no tan seguros como correo u otras aplicaciones de mensajeria que pudieran requerir un mayor nivel de seguridad de la información, permitiendo al usuario compartir dicha información con la confianza que genera un mensaje encriptado. 

### Interfaz de usuario (UI)

Una interfaz básica y sencilla en una sola pantalla, que aporta:
- Visualización de información cifrada/descifrada a la mano.
- Clave númerica definida por el usuario para mayor identidad con la misma.
- Instrucciones cortas y precisas.
- Facilidad de uso y manipulación por parte del usuario.
- Enfoque en la finalidad de la aplicación, sin distracciones innesarias.

*Imagen de la pantalla*

### Consideraciones Técnicas

La lógica del proyecto esta implementada completamente en JavaScript (ES6),
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e), HTML 5 y CSS 3.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

### Como Usar
Descargar - Instalar - Landing Page
Para obtener mi aplicación desde un navegador se debe crear una nueva rama en el repo con la linea: git push prigin master:gh-pages
y luego desde el siguiente link: nombre-usuario-git.github.io/nombreproyecto/carpeta/index.html
cualquiera podra acceder a tu appweb: GelenMR.github.io/SCL009-Cipher/src/index.html

## Consideraciones generales

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

- Quiénes son los principales usuarios de producto.
- Cuáles son los objetivos de estos usuarios en relación con tu producto.
- Cómo crees que el producto que estás creando está resolviendo sus problemas.

#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.

## Recursos y temas relacionados

Herramientas:
- [GitHub y GitHub Pages](https://guides.github.com/)
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.