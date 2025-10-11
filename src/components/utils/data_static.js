import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { ImFire } from "react-icons/im";

import { AiOutlineLeft, AiOutlineSetting } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { FiCoffee, FiBookOpen } from "react-icons/fi";
import { IoMdTrendingUp } from "react-icons/io";
import { MdLogout } from "react-icons/md";

export const categories = [
  {
    to: "/",
    id: "c1",
    slug: "popular",
    title: "Popular",
    icon: IoMdTrendingUp,
    content: "Los temas con más interacción y relevancia.",
  },
  {
    to: "/development",
    id: "c2",
    slug: "programacion-y-mas",
    title: "Programación y más",
    icon: FaLaptopCode,
    content: "Frontend, backend, bases de datos, y temas tech.",
  },
  {
    to: "/gaming",
    id: "c3",
    slug: "gaming",
    title: "Gaming",
    icon: IoGameControllerOutline,
    content: "Juegos, consolas, experiencias multijugador.",
  },
  {
    to: "/general",
    id: "c4",
    slug: "general",
    title: "General",
    icon: FiCoffee,
    content: "Vida diaria, universidad, comunidad.",
  },
  {
    to: "/learning",
    id: "c5",
    slug: "aprender",
    title: "Aprender",
    icon: FiBookOpen,
    content: "Compartir recursos, cursos, experiencias de estudio.",
  },
];

const LinksNav = [
  {
    label: "Home",
    Icon: AiOutlineHome,
    to: "/a",
  },

  {
    label: "Popular",
    Icon: ImFire,
    to: "/",
  },
];

const linksArray = [
  {
    label: "Popular",
    Icon: IoMdTrendingUp,
    to: "/",
  },
  {
    label: "Programacion y más",
    Icon: FaLaptopCode,
    to: "/development",
  },
  {
    label: "Gaming",
    Icon: IoGameControllerOutline,
    to: "/gaming",
  },
  {
    label: "General",
    Icon: FiCoffee,
    to: "/general",
  },
  {
    label: "Aprender",
    Icon: FiBookOpen,
    to: "/learning",
  },
];

export function links_sidebar() {
  return linksArray;
}

export const secondarylinksArray = [
  {
    label: "Configuración",
    Icon: AiOutlineSetting,
    to: "/configuracion",
  },
  {
    label: "Salir",
    Icon: MdLogout,
    to: "/exit",
  },
];

export function links_sidebar_second() {
  return secondarylinksArray;
}

export const users = [
  {
    id: "u1",
    username: "oziel",
    name: "Oziel R.",
    avatarUrl: "avatars/oziel.svg",
    role: "admin",
  },
  {
    id: "u2",
    username: "andrea",
    name: "Andrea M.",
    avatarUrl: "avatars/andrea.svg",
    role: "moderator",
  },
  {
    id: "u3",
    username: "karen",
    name: "Karen V.",
    avatarUrl: "avatars/karen.svg",
    role: "member",
  },
  {
    id: "u4",
    username: "paulo",
    name: "Paulo R.",
    avatarUrl: "avatars/paulo.svg",
    role: "member",
  },
  {
    id: "u5",
    username: "luis",
    name: "Luis D.",
    avatarUrl: "avatars/luis.svg",
    role: "member",
  },
  {
    id: "u6",
    username: "daniel",
    name: "Daniel R.",
    avatarUrl: "avatars/daniel.svg",
    role: "member",
  },
  {
    id: "u7",
    username: "sofia",
    name: "Sofía C.",
    avatarUrl: "avatars/sofia.svg",
    role: "member",
  },
  {
    id: "u8",
    username: "mario",
    name: "Mario T.",
    avatarUrl: "avatars/mario.svg",
    role: "member",
  },
];

export function links_nav() {
  return LinksNav;
}

export function categ_tipo(tipo) {
  const categ = categories.find((flag) => flag.id === tipo);

  return categ ? categ : null;
}

export function thread_id(id) {
  const thread = threads.find((flag) => flag.id === id);

  return thread ? thread : null;
}

export function thread_tipo(tipo) {
  const hilos = threads.filter((flag) => flag.categoryId === tipo);

  return hilos ? hilos : null;
}

export function name_user(author) {
  const user = users.find((flag) => flag.id === author);

  return user.name;
}

export function avatar_user(author) {
  const user = users.find((flag) => flag.id === author);

  return user.avatarUrl;
}

export function comments_post(id) {
  const comms = threads.find((flag) => flag.id === id);
  return comms ? comms.comments : null;
}

export function slug_id(id) {
  const s = threads.find((flag) => flag.id === id);

  return s ? s.slug : null;
}

export function hearts_id(id) {
  const hearts = thread_id(id).upvotes;
  return hearts ? hearts : null;
}

export function messages_id(id) {
  const messages = thread_id(id).repliesCount;
  return messages ? messages : null;
}

export const threads = [
  {
    id: "t1",
    categoryId: "c1",
    imgCard: avatar_user("u6"),
    title: "Experiencias con becas UCB y cómo mantenerlas",
    slug: "becas-ucb-experiencias",
    authorId: name_user("u6"),
    tags: ["ucb", "becas", "organizacion"],
    views: 812,
    upvotes: 54,
    repliesCount: 9,
    content:
      "Consejos para mantener beca: plan de estudio, tutorías, seguimiento de notas, comunicación con docentes.",
    comments: [
      {
        id: "t1c1",
        authorId: "u2",
        upvotes: 8,
        content: "Arma un calendario visible y repasa notas cada semana.",
      },
      {
        id: "t1c2",
        authorId: "u7",
        upvotes: 3,
        content: "No dejes materias 'relleno', pesan en el promedio.",
      },
      {
        id: "t1c3",
        authorId: "u5",
        upvotes: 5,
        content:
          "Además de cumplir con el promedio, algo que me ayudó fue participar en actividades extracurriculares. Los encargados de becas valoran mucho cuando ven compromiso con la universidad más allá de las clases. Intento involucrarme en clubes o voluntariados, eso también te da puntos en la renovación.",
      },
      {
        id: "t1c4",
        authorId: "u1",
        upvotes: 7,
        content:
          "Un consejo clave: mantén comunicación constante con tu tutor o con la oficina de becas. Muchas veces hay plazos o actualizaciones que no se anuncian en todos los canales. Si te anticipas y consultas cada cierto tiempo, te evitas sorpresas desagradables al final del semestre.",
      },
      {
        id: "t1c5",
        authorId: "u3",
        upvotes: 3,
        content:
          "Yo también tengo beca y algo que me funcionó es organizar mi semestre en una hoja de cálculo con pesos de cada materia y fechas de entrega. Cuando ves todo visualmente, es más fácil priorizar las materias que más afectan tu promedio. La clave está en planificar desde el primer día.",
      },
      {
        id: "t1c6",
        authorId: "u8",
        upvotes: 4,
        content:
          "No te confíes en las primeras notas del semestre. A veces uno empieza fuerte y después se relaja, y eso termina costando. Trato de mantener un ritmo constante revisando mis avances cada dos semanas. La constancia vale más que estudiar solo antes de los exámenes.",
      },
      {
        id: "t1c7",
        authorId: "u6",
        upvotes: 6,
        content:
          "Otra cosa que me funcionó fue estudiar en grupo. Nos reunimos con compañeros que también tienen beca y hacemos repasos antes de los parciales. Además de aprender mejor, sirve como motivación porque todos queremos mantenerla. El apoyo mutuo es muy importante.",
      },
    ],
  },
  {
    id: "t2",
    categoryId: "c1",
    imgCard: avatar_user("u6"),
    title: "Trigger de stock en PostgreSQL para taller automotriz",
    slug: "trigger-stock-postgresql-popular",
    authorId: name_user("u6"),
    tags: ["postgresql", "trigger", "transacciones"],
    views: 640,
    upvotes: 41,
    repliesCount: 7,
    content:
      "Busco validar stock antes de descontar y bloquear ventas sin inventario. ¿Trigger en DB o lógica en backend?",
    comments: [
      {
        id: "t2c1",
        authorId: "u5",
        upvotes: 6,
        content: "En DB para consistencia transversal.",
      },
      {
        id: "t2c2",
        authorId: "u1",
        upvotes: 8,
        content:
          "Implementar el control de stock directamente en la base de datos es una excelente idea. Los triggers garantizan que ninguna transacción deje el inventario en valores negativos, sin importar desde qué aplicación se acceda. Es una forma robusta de mantener integridad sin depender del backend.",
      },
      {
        id: "t2c3",
        authorId: "u3",
        upvotes: 5,
        content:
          "Yo lo hice de forma similar en un proyecto de farmacia. Lo importante es validar tanto antes como después del UPDATE o DELETE. Así evitas inconsistencias cuando se eliminan registros por error. También recomiendo registrar los movimientos de stock en una tabla aparte, tipo 'historial'.",
      },
      {
        id: "t2c4",
        authorId: "u6",
        upvotes: 6,
        content:
          "Si lo haces en la base, asegúrate de manejar bien las transacciones. En talleres automotrices suele haber operaciones simultáneas (venta, reparación, pedido), y un mal manejo del trigger puede bloquear filas por demasiado tiempo. Lo ideal es que el trigger sea rápido y haga validaciones simples.",
      },
      {
        id: "t2c5",
        authorId: "u5",
        upvotes: 4,
        content:
          "En mi caso combino validaciones en el backend con triggers para seguridad extra. El backend me ayuda a dar mensajes más claros al usuario, mientras que el trigger evita errores críticos si alguien intenta modificar directamente la base de datos. Es como una doble capa de protección.",
      },
    ],
  },
  {
    id: "t3",
    categoryId: "c1",
    imgCard: avatar_user("u1"),
    title: "Mejores prácticas para repos separados: React + Node",
    slug: "mejores-practicas-react-node-repos",
    authorId: name_user("u1"),
    tags: ["react", "node", "arquitectura"],
    views: 523,
    upvotes: 33,
    repliesCount: 6,
    content:
      "Front en Vite, back en Express, CORS y .env por entorno. ¿Recomiendan PNPM/Turbo para monorepo?",
    comments: [
      {
        id: "t3c1",
        authorId: "u3",
        upvotes: 4,
        content:
          "Si son repos separados, define un proxy dev y CI independientes.",
      },
      {
        id: "t3c2",
        authorId: "u5",
        upvotes: 6,
        content:
          "Tener el frontend y backend en repos separados facilita mucho los despliegues. Por ejemplo, puedes hacer un deploy del frontend a Vercel y del backend a Render sin que dependan uno del otro. Solo tienes que cuidar las variables de entorno y las rutas base para que no haya errores CORS.",
      },
      {
        id: "t3c3",
        authorId: "u7",
        upvotes: 5,
        content:
          "Yo prefiero monorepos solo cuando los equipos trabajan muy juntos. Si el proyecto crece y los servicios son independientes, separarlos da más flexibilidad. En mi experiencia, usar GitHub Actions en cada repo ayuda a automatizar builds y mantener consistencia sin perder independencia.",
      },
      {
        id: "t3c4",
        authorId: "u8",
        upvotes: 4,
        content:
          "Otro detalle: si los separas, usa una estructura clara para comunicación entre ambos. En mi foro personal, tengo un archivo `api.js` en el frontend con todas las rutas del backend definidas, así no tengo que cambiar endpoints por todo el código cada vez que hay cambios.",
      },
    ],
  },
  {
    id: "t4",
    categoryId: "c1",
    imgCard: avatar_user("u4"),
    title: "Newsvendor para donuts: cuantil óptimo rápido",
    slug: "newsvendor-donuts-popular",
    authorId: name_user("u4"),
    tags: ["newsvendor", "io2", "estadistica"],
    views: 491,
    upvotes: 29,
    repliesCount: 5,
    content:
      "Cu = costo de quedarse corto; Co = costo de excedente. SL = Cu / (Cu + Co).",
    comments: [
      {
        id: "t4c1",
        authorId: "u3",
        upvotes: 5,
        content: "Luego busca el cuantil en la CDF de la distribución.",
      },
      {
        id: "t4c2",
        authorId: "u6",
        upvotes: 4,
        content:
          "Me encantó este ejercicio. Algo que muchos olvidan es calcular correctamente el costo de quedarse corto (Cu) y el de excedente (Co). Si esos valores no reflejan bien la realidad del negocio, el resultado del modelo no sirve. Siempre recomiendo hacer primero un pequeño análisis financiero realista.",
      },
      {
        id: "t4c3",
        authorId: "u3",
        upvotes: 3,
        content:
          "Otra forma útil de entenderlo es graficar el nivel de inventario vs probabilidad de demanda. Así puedes ver visualmente en qué punto se igualan los costos marginales de exceso y escasez. Esa intuición ayuda mucho para no depender solo de las fórmulas.",
      },
      {
        id: "t4c4",
        authorId: "u8",
        upvotes: 2,
        content:
          "Yo implementé el modelo en Excel con una distribución normal y usé la función `NORM.S.INV()` para encontrar el cuantil. Es más rápido que calcularlo manualmente y puedes ajustar fácilmente si cambian los parámetros. Ideal para presentaciones o reportes rápidos.",
      },
    ],
  },
  {
    id: "t5",
    categoryId: "c1",
    imgCard: avatar_user("u1"),
    title: "Showcase: LoginCard responsive (sombras y paddings)",
    slug: "showcase-logincard-responsive",
    authorId: name_user("u1"),
    tags: ["ui", "responsive", "css"],
    views: 455,
    upvotes: 25,
    repliesCount: 4,
    content:
      "Estoy ajustando sombras por breakpoint y paddings fluidos. ¿Feedback visual?",
    comments: [
      {
        id: "t5c1",
        authorId: "u2",
        upvotes: 2,
        content: "Reduce la sombra en mobile; en desktop puede ser más suave.",
      },
      {
        id: "t5c2",
        authorId: "u2",
        upvotes: 4,
        content:
          "Visualmente está genial. Me parece buena idea mantener una sombra ligera en mobile y aumentarla en pantallas grandes. Así no se ve tan pesado. También puedes usar `clamp()` para ajustar los paddings de forma fluida sin usar muchos media queries.",
      },
      {
        id: "t5c3",
        authorId: "u6",
        upvotes: 5,
        content:
          "A mí me ayudó usar variables CSS para definir los colores de sombra según el tema. Si tu foro tiene modo claro/oscuro, puedes jugar con opacidades en rgba() para lograr profundidad sin cambiar de color base. Le da una sensación más profesional.",
      },
      {
        id: "t5c4",
        authorId: "u5",
        upvotes: 3,
        content:
          "También puedes probar con `box-shadow` doble: una más suave y difusa y otra más concentrada. Eso da sensación de elevación real. Y en cuanto al padding, prueba con porcentajes o unidades relativas (rem) para que no se vea tan apretado en pantallas pequeñas.",
      },
    ],
  },

  // ===== Programación y más (c2) =====
  {
    id: "t6",
    categoryId: "c2",
    imgCard: avatar_user("u5"),
    title: "¿Monorepo o repos separados para microservicios?",
    slug: "monorepo-o-repos-separados",
    authorId: name_user("u5"),
    tags: ["arquitectura", "devops", "ci/cd"],
    views: 211,
    upvotes: 17,
    repliesCount: 3,
    content:
      "Pros/Contras: compartir librerías, versionado, pipelines, independencia de deploy.",
    comments: [
      {
        id: "t6c1",
        authorId: "u1",
        upvotes: 3,
        content: "Monorepo simplifica shared libs con cambios coordinados.",
      },
      {
        id: "t6c2",
        authorId: "u6",
        upvotes: 6,
        content:
          "He probado ambos enfoques y sinceramente depende del tamaño del equipo. Un monorepo ayuda al inicio, cuando todos los servicios comparten dependencias o librerías comunes. Pero cuando los equipos crecen y los ciclos de release son distintos, los repos separados dan mucha más libertad. Lo importante es mantener convenciones de commits y pipelines CI/CD bien definidos.",
      },
      {
        id: "t6c3",
        authorId: "u7",
        upvotes: 4,
        content:
          "En mi empresa usamos monorepo con Nx y fue un alivio. Tenemos más de diez microservicios que comparten código base, y poder verlos todos juntos acelera la revisión de PRs. Sin embargo, hay que tener cuidado con los tiempos de build, que se vuelven lentos si no configuras caché o tareas por workspace.",
      },
      {
        id: "t6c4",
        authorId: "u3",
        upvotes: 5,
        content:
          "Los repos separados tienen sentido cuando cada microservicio tiene un equipo dedicado o usa tecnologías distintas. Por ejemplo, si uno está en Node y otro en Go, no tiene sentido forzarlos a compartir entorno. Al final, lo importante es estandarizar interfaces de comunicación (REST, gRPC, mensajería).",
      },
    ],
  },
  {
    id: "t7",
    categoryId: "c2",
    imgCard: avatar_user("u7"),
    title: "Styled-components + CSS Modules: ¿mezclar o separar?",
    slug: "styled-components-cssmodules",
    authorId: name_user("u7"),
    tags: ["css", "styled-components", "ux"],
    views: 186,
    upvotes: 12,
    repliesCount: 3,
    content:
      "Criterio: componentes reutilizables → styled; estilos de página → modules. ¿Qué opinan?",
    comments: [
      {
        id: "t7c1",
        authorId: "u4",
        upvotes: 2,
        content: "Evitar mezclar ambos en el mismo componente.",
      },
      {
        id: "t7c2",
        authorId: "u5",
        upvotes: 3,
        content:
          "Personalmente prefiero separar responsabilidades: uso styled-components para componentes reutilizables (botones, badges, inputs) y CSS Modules para páginas específicas donde no vale la pena generar componentes nuevos. Así mantengo el código limpio y evito que los estilos globales se mezclen.",
      },
      {
        id: "t7c3",
        authorId: "u1",
        upvotes: 4,
        content:
          "Coincido. Además, styled-components te permite usar props para modificar estilos dinámicamente sin necesidad de condicionales extra en el JSX. Por ejemplo, puedes pasar un `primary` y cambiar el color sin duplicar clases. Eso hace el código más legible, especialmente en proyectos grandes como un foro.",
      },
      {
        id: "t7c4",
        authorId: "u8",
        upvotes: 2,
        content:
          "Si vas a usar ambos, intenta no mezclarlos dentro del mismo componente. He visto bugs por diferencias en la precedencia del CSS. Una buena práctica es usar un prefijo común en las clases de los módulos y limitar los styled a componentes visuales puros.",
      },
    ],
  },
  {
    id: "t8",
    categoryId: "c2",
    imgCard: avatar_user("u5"),
    title: "Índices compuestos vs parciales en PostgreSQL",
    slug: "indices-compuestos-vs-parciales",
    authorId: name_user("u5"),
    tags: ["postgresql", "indices", "rendimiento"],
    views: 238,
    upvotes: 18,
    repliesCount: 4,
    content:
      "Filtrado por fecha, usuario, estado. ¿Compuesto (fecha,usuario,estado) o parciales?",
    comments: [
      {
        id: "t8c1",
        authorId: "u3",
        upvotes: 4,
        content:
          "Evalúa selectividad con EXPLAIN ANALYZE y patrón de consultas.",
      },
      {
        id: "t8c2",
        authorId: "u6",
        upvotes: 5,
        content:
          "Los índices parciales son increíbles cuando tienes muchas filas con valores repetidos o con un campo booleano de estado. En mi caso, usé uno parcial con `WHERE estado = 'activo'` y reduje los tiempos de consulta en un 40%. Pero cuidado: si cambian mucho las condiciones, puede volverse ineficiente.",
      },
      {
        id: "t8c3",
        authorId: "u4",
        upvotes: 3,
        content:
          "Los compuestos siguen siendo más seguros cuando tienes filtros combinados (fecha, usuario, estado). Pero hay que revisar la selectividad de cada columna. No sirve indexar todo si uno de los campos apenas tiene variación. El comando `EXPLAIN ANALYZE` te da una idea de cuál conviene más.",
      },
      {
        id: "t8c4",
        authorId: "u3",
        upvotes: 2,
        content:
          "También recomiendo usar `pg_stat_user_indexes` para monitorear el uso real de los índices. A veces creas uno pensando que optimiza y nunca se usa. En ese caso solo estás gastando espacio y ralentizando los inserts.",
      },
    ],
  },
  {
    id: "t9",
    categoryId: "c2",
    imgCard: avatar_user("u1"),
    title: "Node/Express: estructura mínima limpia para APIs",
    slug: "node-express-estructura-minima",
    authorId: name_user("u1"),
    tags: ["node", "express", "api"],
    views: 179,
    upvotes: 13,
    repliesCount: 3,
    content:
      "Rutas → controladores → servicios → capa DB. Middlewares para auth, logs y manejo de errores.",
    comments: [
      {
        id: "t9c1",
        authorId: "u2",
        upvotes: 2,
        content: "Agrega rate-limit para demo pública.",
      },
      {
        id: "t9c2",
        authorId: "u7",
        upvotes: 5,
        content:
          "La estructura en capas es lo mejor que puedes hacer para escalar. Yo uso `routes → controllers → services → db`. Los controladores solo manejan req/res, y la lógica pesada va en los servicios. Si lo combinas con middlewares para logging y validación, mantener tu API se vuelve mucho más simple.",
      },
      {
        id: "t9c3",
        authorId: "u3",
        upvotes: 3,
        content:
          "También recomiendo usar un middleware global para capturar errores y devolver respuestas uniformes. Con Express puedes envolver los controladores en una función `tryCatch` y así evitar que se caiga el servidor por un throw no controlado. Es un patrón sencillo pero salva proyectos.",
      },
      {
        id: "t9c4",
        authorId: "u6",
        upvotes: 4,
        content:
          "Si trabajas con autenticación, separa el módulo de JWT en su propio archivo y usa middlewares como `verifyToken`. No mezcles lógica de auth con lógica de negocio. Esa separación hace la diferencia cuando el proyecto crece o agregas otros sistemas.",
      },
    ],
  },
  {
    id: "t10",
    categoryId: "c2",
    imgCard: avatar_user("u3"),
    title: "CORS y .env correctamente configurados en dev/prod",
    slug: "cors-y-env-dev-prod",
    authorId: name_user("u3"),
    tags: ["seguridad", "cors", "config"],
    views: 162,
    upvotes: 11,
    repliesCount: 2,
    content:
      "Permitir origen del front en dev; en prod usa whitelist y variables de entorno.",
    comments: [
      {
        id: "t10c1",
        authorId: "u6",
        upvotes: 1,
        content: "Proxy en Vite simplifica en local.",
      },
      {
        id: "t10c2",
        authorId: "u5",
        upvotes: 4,
        content:
          "En desarrollo puedes permitir todos los orígenes con `app.use(cors())`, pero en producción define explícitamente tu dominio. Si lo dejas abierto, cualquier sitio puede hacer peticiones a tu backend. Es un error muy común en proyectos nuevos y cuesta caro si alguien lo explota.",
      },
      {
        id: "t10c3",
        authorId: "u6",
        upvotes: 3,
        content:
          "Además, evita poner variables sensibles en `.env` del frontend. Todo lo que compiles con React acaba siendo público. Solo deben ir ahí cosas como URLs, pero nunca claves de API o tokens. En backend sí puedes guardar credenciales, pero con permisos limitados.",
      },
      {
        id: "t10c4",
        authorId: "u2",
        upvotes: 2,
        content:
          "Un tip práctico: usa la librería `dotenv-flow` si manejas varios entornos (dev, staging, prod). Te permite definir múltiples archivos `.env` y cargar el adecuado automáticamente. Así evitas errores al hacer despliegues.",
      },
    ],
  },

  // ===== Gaming (c3) =====
  {
    id: "t11",
    categoryId: "c3",
    imgCard: avatar_user("u8"),
    title: "Setup híbrido: estudiar y jugar sin distraerte",
    slug: "setup-hibrido-estudio-gaming",
    authorId: name_user("u8"),
    tags: ["productividad", "setup", "gaming"],
    views: 221,
    upvotes: 15,
    repliesCount: 4,
    content:
      "Monitor vertical para docs, Pomodoro 50/10, atajos en VS Code y lista de bloqueo.",
    comments: [
      {
        id: "t11c1",
        authorId: "u7",
        upvotes: 2,
        content: "Desactiva notificaciones durante focus.",
      },
    ],
  },
  {
    id: "t12",
    categoryId: "c3",
    imgCard: avatar_user("u4"),
    title: "Baldur’s Gate 3 vs Elden Ring: ¿cuál recomiendas?",
    slug: "bg3-vs-eldenring",
    authorId: name_user("u4"),
    tags: ["rpg", "soulslike", "opinion"],
    views: 304,
    upvotes: 19,
    repliesCount: 6,
    content:
      "Busco campaña cooperativa vs desafío singleplayer. ¿Cuál encaja mejor para fin de semana?",
    comments: [
      {
        id: "t12c1",
        authorId: "u5",
        upvotes: 3,
        content:
          "BG3 si te gusta el rol con decisiones; ER por combate y exploración.",
      },
    ],
  },
  {
    id: "t13",
    categoryId: "c3",
    imgCard: avatar_user("u7"),
    title: "¿Gamepads o teclado+mouse para shooters?",
    slug: "gamepad-o-teclado-mouse-shooters",
    authorId: name_user("u7"),
    tags: ["perifericos", "fps", "confort"],
    views: 167,
    upvotes: 10,
    repliesCount: 3,
    content: "Ergonomía vs precisión: ¿qué recomiendan para largas sesiones?",
    comments: [
      {
        id: "t13c1",
        authorId: "u1",
        upvotes: 2,
        content: "Para FPS: teclado+mouse por precisión; pad en third-person.",
      },
    ],
  },
  {
    id: "t14",
    categoryId: "c3",
    imgCard: avatar_user("u2"),
    title: "Optimizar OBS para streaming sin perder FPS",
    slug: "optimizar-obs-streaming",
    authorId: name_user("u2"),
    tags: ["streaming", "obs", "rendimiento"],
    views: 194,
    upvotes: 12,
    repliesCount: 3,
    content:
      "Encoder por hardware (NVENC/AMF), bitrate estable y escenas livianas.",
    comments: [
      {
        id: "t14c1",
        authorId: "u8",
        upvotes: 2,
        content: "Limita filtros de pos-proceso, comen GPU.",
      },
    ],
  },
  {
    id: "t15",
    categoryId: "c3",
    imgCard: avatar_user("u3"),
    title: "Top juegos cooperativos locales para PC",
    slug: "top-coop-local-pc",
    authorId: name_user("u3"),
    tags: ["coop", "pc", "recomendaciones"],
    views: 181,
    upvotes: 14,
    repliesCount: 4,
    content:
      "Overcooked 2, It Takes Two, Cuphead, A Way Out. ¿Otros imprescindibles?",
    comments: [
      {
        id: "t15c1",
        authorId: "u6",
        upvotes: 3,
        content: "Lovers in a Dangerous Spacetime 👌",
      },
    ],
  },

  // ===== General (c4) =====
  {
    id: "t16",
    categoryId: "c4",
    imgCard: avatar_user("u8"),
    title: "Café de viernes: comparte tu setup de productividad",
    slug: "cafe-viernes-setup",
    authorId: name_user("u8"),
    tags: ["productividad", "setup", "of-topic"],
    views: 205,
    upvotes: 13,
    repliesCount: 5,
    content:
      "Audífonos, atajos, snacks, fondos de pantalla. ¡Comparte foto o lista!",
    comments: [
      {
        id: "t16c1",
        authorId: "u7",
        upvotes: 2,
        content: "Modo Focus en el celular es clave.",
      },
    ],
  },
  {
    id: "t17",
    categoryId: "c4",
    imgCard: avatar_user("u3"),
    title: "¿Cómo les fue en los parciales de IO2?",
    slug: "parciales-io2-experiencias",
    authorId: name_user("u3"),
    tags: ["io2", "uni", "parciales"],
    views: 147,
    upvotes: 9,
    repliesCount: 3,
    content:
      "¿Qué temas sintieron más complicados? EOQ con faltantes, newsvendor, árboles de decisión.",
    comments: [
      {
        id: "t17c1",
        authorId: "u1",
        upvotes: 1,
        content: "El newsvendor me tomó por sorpresa por la varianza.",
      },
    ],
  },
  {
    id: "t18",
    categoryId: "c4",
    imgCard: avatar_user("u2"),
    title: "Apps de hábitos que realmente te funcionaron",
    slug: "apps-de-habitos-recomendaciones",
    authorId: name_user("u2"),
    tags: ["habitos", "productividad", "apps"],
    views: 139,
    upvotes: 8,
    repliesCount: 2,
    content:
      "Busco algo simple, recordatorios y rachas. ¿Alguna gratis sin anuncios invasivos?",
    comments: [
      {
        id: "t18c1",
        authorId: "u5",
        upvotes: 2,
        content: "Loop Habit Tracker es ligero y sin ads.",
      },
    ],
  },
  {
    id: "t19",
    categoryId: "c4",
    imgCard: avatar_user("u6"),
    title: "¿Cómo organizan su semana de entregas?",
    slug: "organizar-semana-entregas",
    authorId: name_user("u6"),
    tags: ["planificacion", "universidad", "tiempo"],
    views: 132,
    upvotes: 7,
    repliesCount: 2,
    content:
      "Yo marco deadlines en un calendario y reservo bloques de 90 min. ¿Qué hacen ustedes?",
    comments: [
      {
        id: "t19c1",
        authorId: "u4",
        upvotes: 1,
        content: "Dejo un buffer de 24h por imprevistos.",
      },
    ],
  },
  {
    id: "t20",
    categoryId: "c4",
    imgCard: avatar_user("u7"),
    title: "Recomendaciones de cafeterías cerca de la U",
    slug: "cafeterias-cerca-de-la-u",
    authorId: name_user("u7"),
    tags: ["ucb", "cafeterias", "recomendaciones"],
    views: 156,
    upvotes: 10,
    repliesCount: 3,
    content: "Buen WiFi, mesas cómodas y que no cierren temprano. ¿Ideas?",
    comments: [
      {
        id: "t20c1",
        authorId: "u8",
        upvotes: 2,
        content: "Busca las que tienen enchufes en paredes laterales.",
      },
    ],
  },

  // ===== Aprender (c5) =====
  {
    id: "t21",
    categoryId: "c5",
    imgCard: avatar_user("u3"),
    title: "EOQ con faltantes: guía para PPT en 1 slide",
    slug: "eoq-con-faltantes-ppt",
    authorId: name_user("u3"),
    tags: ["eoq", "presentacion", "io2"],
    views: 121,
    upvotes: 11,
    repliesCount: 3,
    content:
      "Slide: supuestos, fórmulas clave, gráfico inventario vs tiempo, ejemplo corto, sensibilidad.",
    comments: [
      {
        id: "t21c1",
        authorId: "u2",
        upvotes: 3,
        content: "Incluye intuición del backorder y costo total.",
      },
    ],
  },
  {
    id: "t22",
    categoryId: "c5",
    imgCard: avatar_user("u7"),
    title: "Guía rápida de NoSQL: cuándo sí, cuándo no",
    slug: "guia-rapida-nosql",
    authorId: name_user("u7"),
    tags: ["nosql", "arquitectura", "mongodb"],
    views: 133,
    upvotes: 12,
    repliesCount: 3,
    content:
      "Casos: catálogos con esquema variable, eventos, caching; evita si necesitas JOINs complejos ACID.",
    comments: [
      {
        id: "t22c1",
        authorId: "u5",
        upvotes: 2,
        content: "Valida patrones de acceso antes de elegir.",
      },
    ],
  },
  {
    id: "t23",
    categoryId: "c5",
    imgCard: avatar_user("u4"),
    title: "Newsvendor paso a paso con Normal(μ, σ)",
    slug: "newsvendor-normal-paso-a-paso",
    authorId: name_user("u4"),
    tags: ["newsvendor", "estadistica", "decision"],
    views: 142,
    upvotes: 13,
    repliesCount: 4,
    content:
      "Calcula SL, busca z en CDF normal, Q* = μ + zσ. Muestra gráfico con el cuantil.",
    comments: [
      {
        id: "t23c1",
        authorId: "u1",
        upvotes: 3,
        content: "Agrega ejemplo con números redondos.",
      },
    ],
  },
  {
    id: "t24",
    categoryId: "c5",
    imgCard: avatar_user("u5"),
    title: "SQL intermedio: subconsultas y CTEs con ejemplos",
    slug: "sql-intermedio-subconsultas-ctes",
    authorId: name_user("u5"),
    tags: ["sql", "cte", "subqueries"],
    views: 176,
    upvotes: 14,
    repliesCount: 3,
    content:
      "CTEs para legibilidad, subconsultas correlacionadas con cuidado. Usa EXPLAIN.",
    comments: [
      {
        id: "t24c1",
        authorId: "u3",
        upvotes: 2,
        content: "Incluye índices adecuados para filtros.",
      },
    ],
  },
  {
    id: "t25",
    categoryId: "c5",
    imgCard: avatar_user("u2"),
    title: "Git para la U: flujo simple con PRs",
    slug: "git-flujo-simple-prs",
    authorId: name_user("u2"),
    tags: ["git", "colaboracion", "flujo"],
    views: 167,
    upvotes: 12,
    repliesCount: 2,
    content:
      "Ramas feature → PR → revisión → merge. Pull frecuente de main para evitar conflictos.",
    comments: [
      {
        id: "t25c1",
        authorId: "u6",
        upvotes: 2,
        content: "Protege main con revisiones mínimas.",
      },
    ],
  },
];
