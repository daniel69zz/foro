export const users = [
  { id: "u1", username: "oziel", name: "Oziel R.", avatarUrl: "avatars/oziel.svg", role: "admin" },
  { id: "u2", username: "andrea", name: "Andrea M.", avatarUrl: "avatars/andrea.svg", role: "moderator" },
  { id: "u3", username: "karen", name: "Karen V.", avatarUrl: "avatars/karen.svg", role: "member" },
  { id: "u4", username: "paulo", name: "Paulo R.", avatarUrl: "avatars/paulo.svg", role: "member" },
  { id: "u5", username: "luis", name: "Luis D.", avatarUrl: "avatars/luis.svg", role: "member" },
  { id: "u6", username: "daniel", name: "Daniel R.", avatarUrl: "avatars/daniel.svg", role: "member" },
  { id: "u7", username: "sofia", name: "Sofía C.", avatarUrl: "avatars/sofia.svg", role: "member" },
  { id: "u8", username: "mario", name: "Mario T.", avatarUrl: "avatars/mario.svg", role: "member" },
];

export const categories = [
  { to: '/', id: "c1", slug: "popular", name: "Popular", description: "Los temas con más interacción y relevancia." },
  { to: '/development', id: "c2", slug: "programacion-y-mas", name: "Programación y más", description: "Frontend, backend, bases de datos, y temas tech." },
  { to: '/gaming', id: "c3", slug: "gaming", name: "Gaming", description: "Juegos, consolas, experiencias multijugador." },
  { to: '/general', id: "c4", slug: "general", name: "General", description: "Vida diaria, universidad, comunidad." },
  { to: '/learning', id: "c5", slug: "aprender", name: "Aprender", description: "Compartir recursos, cursos, experiencias de estudio." },
];


// helpers de fecha
const now = new Date();
function daysAgo(n){ const d = new Date(now); d.setDate(d.getDate()-n); return d.toISOString(); }

function name_user(author){
    const user = users.find(flag => flag.id === author);

    return user.name;
}

function avatar_user(author){
    const user = users.find(flag => flag.id === author);

    return user.avatarUrl;
}

// 25 hilos (5 por categoría) usando: c1=Popular, c2=Programación y más, c3=Gaming, c4=General, c5=Aprender
export const threads = [
  {
    id: "t1",
    categoryId: "c1",
    avatar_img: avatar_user("u6"),
    title: "Experiencias con becas UCB y cómo mantenerlas",
    slug: "becas-ucb-experiencias",
    authorId: name_user("u6"),
    createdAt: daysAgo(12),
    updatedAt: daysAgo(8),
    tags: ["ucb","becas","organizacion"],
    views: 812, upvotes: 54, repliesCount: 9,
    content: "Consejos para mantener beca: plan de estudio, tutorías, seguimiento de notas, comunicación con docentes.",
    comments: [
      { id: "t1c1", authorId: "u2", createdAt: daysAgo(12), upvotes: 8, content: "Arma un calendario visible y repasa notas cada semana.", children: [] },
      { id: "t1c2", authorId: "u7", createdAt: daysAgo(9), upvotes: 3, content: "No dejes materias 'relleno', pesan en el promedio.", children: [] }
    ]
  },
  {
    id: "t2",
    categoryId: "c1",
    avatar_img: avatar_user("u6"),
    title: "Trigger de stock en PostgreSQL para taller automotriz",
    slug: "trigger-stock-postgresql-popular",
    authorId: name_user("u6"),
    createdAt: daysAgo(10),
    updatedAt: daysAgo(7),
    tags: ["postgresql","trigger","transacciones"],
    views: 640, upvotes: 41, repliesCount: 7,
    content: "Busco validar stock antes de descontar y bloquear ventas sin inventario. ¿Trigger en DB o lógica en backend?",
    comments: [
      { id: "t2c1", authorId: "u5", createdAt: daysAgo(10), upvotes: 6, content: "En DB para consistencia transversal.", children: [] },
    ]
  },
  {
    id: "t3",
    categoryId: "c1",
    avatar_img: avatar_user("u1"),
    title: "Mejores prácticas para repos separados: React + Node",
    slug: "mejores-practicas-react-node-repos",
    authorId: name_user("u1"),
    createdAt: daysAgo(5),
    updatedAt: daysAgo(3),
    tags: ["react","node","arquitectura"],
    views: 523, upvotes: 33, repliesCount: 6,
    content: "Front en Vite, back en Express, CORS y .env por entorno. ¿Recomiendan PNPM/Turbo para monorepo?",
    comments: [
      { id: "t3c1", authorId: "u3", createdAt: daysAgo(5), upvotes: 4, content: "Si son repos separados, define un proxy dev y CI independientes.", children: [] },
    ]
  },
  {
    id: "t4",
    categoryId: "c1",
    avatar_img: avatar_user("u4"),
    title: "Newsvendor para donuts: cuantil óptimo rápido",
    slug: "newsvendor-donuts-popular",
    authorId: name_user("u4"),
    createdAt: daysAgo(20),
    updatedAt: daysAgo(19),
    tags: ["newsvendor","io2","estadistica"],
    views: 491, upvotes: 29, repliesCount: 5,
    content: "Cu = costo de quedarse corto; Co = costo de excedente. SL = Cu / (Cu + Co).",
    comments: [
      { id: "t4c1", authorId: "u3", createdAt: daysAgo(20), upvotes: 5, content: "Luego busca el cuantil en la CDF de la distribución.", children: [] },
    ]
  },
  {
    id: "t5",
    categoryId: "c1",
    avatar_img: avatar_user("u1"),
    title: "Showcase: LoginCard responsive (sombras y paddings)",
    slug: "showcase-logincard-responsive",
    authorId: name_user("u1"),
    createdAt: daysAgo(4),
    updatedAt: daysAgo(2),
    tags: ["ui","responsive","css"],
    views: 455, upvotes: 25, repliesCount: 4,
    content: "Estoy ajustando sombras por breakpoint y paddings fluidos. ¿Feedback visual?",
    comments: [
      { id: "t5c1", authorId: "u2", createdAt: daysAgo(3), upvotes: 2, content: "Reduce la sombra en mobile; en desktop puede ser más suave.", children: [] },
    ]
  },

  // ===== Programación y más (c2) =====
  {
    id: "t6",
    categoryId: "c2",
    avatar_img: avatar_user("u5"),
    title: "¿Monorepo o repos separados para microservicios?",
    slug: "monorepo-o-repos-separados",
    authorId: name_user("u5"),
    createdAt: daysAgo(9),
    updatedAt: daysAgo(6),
    tags: ["arquitectura","devops","ci/cd"],
    views: 211, upvotes: 17, repliesCount: 3,
    content: "Pros/Contras: compartir librerías, versionado, pipelines, independencia de deploy.",
    comments: [
      { id: "t6c1", authorId: "u1", createdAt: daysAgo(8), upvotes: 3, content: "Monorepo simplifica shared libs con cambios coordinados.", children: [] },
    ]
  },
  {
    id: "t7",
    categoryId: "c2",
    avatar_img: avatar_user("u7"),
    title: "Styled-components + CSS Modules: ¿mezclar o separar?",
    slug: "styled-components-cssmodules",
    authorId: name_user("u7"),
    createdAt: daysAgo(3),
    updatedAt: daysAgo(3),
    tags: ["css","styled-components","ux"],
    views: 186, upvotes: 12, repliesCount: 3,
    content: "Criterio: componentes reutilizables → styled; estilos de página → modules. ¿Qué opinan?",
    comments: [
      { id: "t7c1", authorId: "u4", createdAt: daysAgo(3), upvotes: 2, content: "Evitar mezclar ambos en el mismo componente.", children: [] },
    ]
  },
  {
    id: "t8",
    categoryId: "c2",
    avatar_img: avatar_user("u5"),
    title: "Índices compuestos vs parciales en PostgreSQL",
    slug: "indices-compuestos-vs-parciales",
    authorId: name_user("u5"),
    createdAt: daysAgo(8),
    updatedAt: daysAgo(6),
    tags: ["postgresql","indices","rendimiento"],
    views: 238, upvotes: 18, repliesCount: 4,
    content: "Filtrado por fecha, usuario, estado. ¿Compuesto (fecha,usuario,estado) o parciales?",
    comments: [
      { id: "t8c1", authorId: "u3", createdAt: daysAgo(8), upvotes: 4, content: "Evalúa selectividad con EXPLAIN ANALYZE y patrón de consultas.", children: [] },
    ]
  },
  {
    id: "t9",
    categoryId: "c2",
    avatar_img: avatar_user("u1"),
    title: "Node/Express: estructura mínima limpia para APIs",
    slug: "node-express-estructura-minima",
    authorId: name_user("u1"),
    createdAt: daysAgo(2),
    updatedAt: daysAgo(1),
    tags: ["node","express","api"],
    views: 179, upvotes: 13, repliesCount: 3,
    content: "Rutas → controladores → servicios → capa DB. Middlewares para auth, logs y manejo de errores.",
    comments: [
      { id: "t9c1", authorId: "u2", createdAt: daysAgo(1), upvotes: 2, content: "Agrega rate-limit para demo pública.", children: [] },
    ]
  },
  {
    id: "t10",
    categoryId: "c2",
    avatar_img: avatar_user("u3"),
    title: "CORS y .env correctamente configurados en dev/prod",
    slug: "cors-y-env-dev-prod",
    authorId: name_user("u3"),
    createdAt: daysAgo(5),
    updatedAt: daysAgo(4),
    tags: ["seguridad","cors","config"],
    views: 162, upvotes: 11, repliesCount: 2,
    content: "Permitir origen del front en dev; en prod usa whitelist y variables de entorno.",
    comments: [
      { id: "t10c1", authorId: "u6", createdAt: daysAgo(4), upvotes: 1, content: "Proxy en Vite simplifica en local.", children: [] },
    ]
  },

  // ===== Gaming (c3) =====
  {
    id: "t11",
    categoryId: "c3",
    avatar_img: avatar_user("u8"),
    title: "Setup híbrido: estudiar y jugar sin distraerte",
    slug: "setup-hibrido-estudio-gaming",
    authorId: name_user("u8"),
    createdAt: daysAgo(6),
    updatedAt: daysAgo(6),
    tags: ["productividad","setup","gaming"],
    views: 221, upvotes: 15, repliesCount: 4,
    content: "Monitor vertical para docs, Pomodoro 50/10, atajos en VS Code y lista de bloqueo.",
    comments: [
      { id: "t11c1", authorId: "u7", createdAt: daysAgo(6), upvotes: 2, content: "Desactiva notificaciones durante focus.", children: [] },
    ]
  },
  {
    id: "t12",
    categoryId: "c3",
    avatar_img: avatar_user("u4"),
    title: "Baldur’s Gate 3 vs Elden Ring: ¿cuál recomiendas?",
    slug: "bg3-vs-eldenring",
    authorId: name_user("u4"),
    createdAt: daysAgo(14),
    updatedAt: daysAgo(12),
    tags: ["rpg","soulslike","opinion"],
    views: 304, upvotes: 19, repliesCount: 6,
    content: "Busco campaña cooperativa vs desafío singleplayer. ¿Cuál encaja mejor para fin de semana?",
    comments: [
      { id: "t12c1", authorId: "u5", createdAt: daysAgo(13), upvotes: 3, content: "BG3 si te gusta el rol con decisiones; ER por combate y exploración.", children: [] },
    ]
  },
  {
    id: "t13",
    categoryId: "c3",
    avatar_img: avatar_user("u7"),
    title: "¿Gamepads o teclado+mouse para shooters?",
    slug: "gamepad-o-teclado-mouse-shooters",
    authorId: name_user("u7"),
    createdAt: daysAgo(7),
    updatedAt: daysAgo(7),
    tags: ["perifericos","fps","confort"],
    views: 167, upvotes: 10, repliesCount: 3,
    content: "Ergonomía vs precisión: ¿qué recomiendan para largas sesiones?",
    comments: [
      { id: "t13c1", authorId: "u1", createdAt: daysAgo(7), upvotes: 2, content: "Para FPS: teclado+mouse por precisión; pad en third-person.", children: [] },
    ]
  },
  {
    id: "t14",
    categoryId: "c3",
    avatar_img: avatar_user("u2"),
    title: "Optimizar OBS para streaming sin perder FPS",
    slug: "optimizar-obs-streaming",
    authorId: name_user("u2"),
    createdAt: daysAgo(11),
    updatedAt: daysAgo(9),
    tags: ["streaming","obs","rendimiento"],
    views: 194, upvotes: 12, repliesCount: 3,
    content: "Encoder por hardware (NVENC/AMF), bitrate estable y escenas livianas.",
    comments: [
      { id: "t14c1", authorId: "u8", createdAt: daysAgo(10), upvotes: 2, content: "Limita filtros de pos-proceso, comen GPU.", children: [] },
    ]
  },
  {
    id: "t15",
    categoryId: "c3",
    avatar_img: avatar_user("u3"),
    title: "Top juegos cooperativos locales para PC",
    slug: "top-coop-local-pc",
    authorId: name_user("u3"),
    createdAt: daysAgo(13),
    updatedAt: daysAgo(13),
    tags: ["coop","pc","recomendaciones"],
    views: 181, upvotes: 14, repliesCount: 4,
    content: "Overcooked 2, It Takes Two, Cuphead, A Way Out. ¿Otros imprescindibles?",
    comments: [
      { id: "t15c1", authorId: "u6", createdAt: daysAgo(13), upvotes: 3, content: "Lovers in a Dangerous Spacetime 👌", children: [] },
    ]
  },

  // ===== General (c4) =====
  {
    id: "t16",
    categoryId: "c4",
    avatar_img: avatar_user("u8"),
    title: "Café de viernes: comparte tu setup de productividad",
    slug: "cafe-viernes-setup",
    authorId: name_user("u8"),
    createdAt: daysAgo(6),
    updatedAt: daysAgo(6),
    tags: ["productividad","setup","of-topic"],
    views: 205, upvotes: 13, repliesCount: 5,
    content: "Audífonos, atajos, snacks, fondos de pantalla. ¡Comparte foto o lista!",
    comments: [
      { id: "t16c1", authorId: "u7", createdAt: daysAgo(6), upvotes: 2, content: "Modo Focus en el celular es clave.", children: [] },
    ]
  },
  {
    id: "t17",
    categoryId: "c4",
    avatar_img: avatar_user("u3"),
    title: "¿Cómo les fue en los parciales de IO2?",
    slug: "parciales-io2-experiencias",
    authorId: name_user("u3"),
    createdAt: daysAgo(9),
    updatedAt: daysAgo(8),
    tags: ["io2","uni","parciales"],
    views: 147, upvotes: 9, repliesCount: 3,
    content: "¿Qué temas sintieron más complicados? EOQ con faltantes, newsvendor, árboles de decisión.",
    comments: [
      { id: "t17c1", authorId: "u1", createdAt: daysAgo(8), upvotes: 1, content: "El newsvendor me tomó por sorpresa por la varianza.", children: [] },
    ]
  },
  {
    id: "t18",
    categoryId: "c4",
    avatar_img: avatar_user("u2"),
    title: "Apps de hábitos que realmente te funcionaron",
    slug: "apps-de-habitos-recomendaciones",
    authorId: name_user("u2"),
    createdAt: daysAgo(7),
    updatedAt: daysAgo(7),
    tags: ["habitos","productividad","apps"],
    views: 139, upvotes: 8, repliesCount: 2,
    content: "Busco algo simple, recordatorios y rachas. ¿Alguna gratis sin anuncios invasivos?",
    comments: [
      { id: "t18c1", authorId: "u5", createdAt: daysAgo(7), upvotes: 2, content: "Loop Habit Tracker es ligero y sin ads.", children: [] },
    ]
  },
  {
    id: "t19",
    categoryId: "c4",
    avatar_img: avatar_user("u6"),
    title: "¿Cómo organizan su semana de entregas?",
    slug: "organizar-semana-entregas",
    authorId: name_user("u6"),
    createdAt: daysAgo(5),
    updatedAt: daysAgo(4),
    tags: ["planificacion","universidad","tiempo"],
    views: 132, upvotes: 7, repliesCount: 2,
    content: "Yo marco deadlines en un calendario y reservo bloques de 90 min. ¿Qué hacen ustedes?",
    comments: [
      { id: "t19c1", authorId: "u4", createdAt: daysAgo(4), upvotes: 1, content: "Dejo un buffer de 24h por imprevistos.", children: [] },
    ]
  },
  {
    id: "t20",
    categoryId: "c4",
    avatar_img: avatar_user("u7"),
    title: "Recomendaciones de cafeterías cerca de la U",
    slug: "cafeterias-cerca-de-la-u",
    authorId: name_user("u7"),
    createdAt: daysAgo(10),
    updatedAt: daysAgo(9),
    tags: ["ucb","cafeterias","recomendaciones"],
    views: 156, upvotes: 10, repliesCount: 3,
    content: "Buen WiFi, mesas cómodas y que no cierren temprano. ¿Ideas?",
    comments: [
      { id: "t20c1", authorId: "u8", createdAt: daysAgo(9), upvotes: 2, content: "Busca las que tienen enchufes en paredes laterales.", children: [] },
    ]
  },

  // ===== Aprender (c5) =====
  {
    id: "t21",
    categoryId: "c5",
    avatar_img: avatar_user("u3"),
    title: "EOQ con faltantes: guía para PPT en 1 slide",
    slug: "eoq-con-faltantes-ppt",
    authorId: name_user("u3"),
    createdAt: daysAgo(9),
    updatedAt: daysAgo(8),
    tags: ["eoq","presentacion","io2"],
    views: 121, upvotes: 11, repliesCount: 3,
    content: "Slide: supuestos, fórmulas clave, gráfico inventario vs tiempo, ejemplo corto, sensibilidad.",
    comments: [
      { id: "t21c1", authorId: "u2", createdAt: daysAgo(9), upvotes: 3, content: "Incluye intuición del backorder y costo total.", children: [] },
    ]
  },
  {
    id: "t22",
    categoryId: "c5",
    avatar_img: avatar_user("u7"),
    title: "Guía rápida de NoSQL: cuándo sí, cuándo no",
    slug: "guia-rapida-nosql",
    authorId: name_user("u7"),
    createdAt: daysAgo(11),
    updatedAt: daysAgo(10),
    tags: ["nosql","arquitectura","mongodb"],
    views: 133, upvotes: 12, repliesCount: 3,
    content: "Casos: catálogos con esquema variable, eventos, caching; evita si necesitas JOINs complejos ACID.",
    comments: [
      { id: "t22c1", authorId: "u5", createdAt: daysAgo(11), upvotes: 2, content: "Valida patrones de acceso antes de elegir.", children: [] },
    ]
  },
  {
    id: "t23",
    categoryId: "c5",
    avatar_img: avatar_user("u4"),
    title: "Newsvendor paso a paso con Normal(μ, σ)",
    slug: "newsvendor-normal-paso-a-paso",
    authorId: name_user("u4"),
    createdAt: daysAgo(15),
    updatedAt: daysAgo(15),
    tags: ["newsvendor","estadistica","decision"],
    views: 142, upvotes: 13, repliesCount: 4,
    content: "Calcula SL, busca z en CDF normal, Q* = μ + zσ. Muestra gráfico con el cuantil.",
    comments: [
      { id: "t23c1", authorId: "u1", createdAt: daysAgo(15), upvotes: 3, content: "Agrega ejemplo con números redondos.", children: [] },
    ]
  },
  {
    id: "t24",
    categoryId: "c5",
    avatar_img: avatar_user("u5"),
    title: "SQL intermedio: subconsultas y CTEs con ejemplos",
    slug: "sql-intermedio-subconsultas-ctes",
    authorId: name_user("u5"),
    createdAt: daysAgo(3),
    updatedAt: daysAgo(2),
    tags: ["sql","cte","subqueries"],
    views: 176, upvotes: 14, repliesCount: 3,
    content: "CTEs para legibilidad, subconsultas correlacionadas con cuidado. Usa EXPLAIN.",
    comments: [
      { id: "t24c1", authorId: "u3", createdAt: daysAgo(2), upvotes: 2, content: "Incluye índices adecuados para filtros.", children: [] },
    ]
  },
  {
    id: "t25",
    categoryId: "c5",
    avatar_img: avatar_user("u2"),
    title: "Git para la U: flujo simple con PRs",
    slug: "git-flujo-simple-prs",
    authorId: name_user("u2"),
    createdAt: daysAgo(4),
    updatedAt: daysAgo(4),
    tags: ["git","colaboracion","flujo"],
    views: 167, upvotes: 12, repliesCount: 2,
    content: "Ramas feature → PR → revisión → merge. Pull frecuente de main para evitar conflictos.",
    comments: [
      { id: "t25c1", authorId: "u6", createdAt: daysAgo(4), upvotes: 2, content: "Protege main con revisiones mínimas.", children: [] },
    ]
  },
];

