import images from "./img/images.js";

export default [
  {
    title: "Yosoy",
    description:
      "Aplicación de bienestar emocional con check-in diario, seguimiento de estado de ánimo y gestión de usuarios. Desarrollada con arquitectura cliente-servidor y API backend dedicada. Proyecto privado.",
    tech: ["FastAPI", "WebSocket", "Python", "PostgreSQL", "Flutter", "Docker"],
    link: null,
    webLink: null,
    images: [
      { src: images.ImgYosoy, label: "App Móvil" },
      { src: images.ImgYosoyApi, label: "API Backend" },
    ],
    featured: true,
  },
  {
    title: "HydroAlert",
    description:
      "Aplicación móvil desarrollada con Flutter y Dart para el monitoreo y alerta de niveles de agua y condiciones climáticas en tiempo real. Incluye backend con FastAPI y base de datos para almacenamiento histórico de mediciones.",
    tech: ["Flutter", "Dart", "FastAPI", "Python", "PostgreSQL", "Docker"],
    link: "https://github.com/WalterJiron/hydro_alert_app",
    webLink: "https://hydroalertpresentation.vercel.app/",
    images: [
      { src: images.ImgHydroAlert, label: "App Móvil" },
      { src: images.ImgHydroAlertApi, label: "API Backend" },
    ],
    featured: true,
  },
  {
    title: "Sistema de Gestión para una empresa de venta de Básculas (ERP)",
    description:
      "Sistema ERP integral e infraestructura de base de datos en SQL Server 2022 con Docker. Cubre seguridad RBAC, inventario multi-almacén, compras, ventas, garantías, taller técnico y control financiero de caja con triggers, vistas y procedimientos almacenados.",
    tech: ["SQL Server", "T-SQL", "Docker"],
    link: "https://github.com/WalterJiron/DB_Basculas",
    webLink: null,
    images: [
      { src: images.imgBasculas, label: "Sistema ERP" },
    ],
  },
  {
    title: "API de Zoológico",
    description:
      "API RESTful desarrollada con NestJS y SQL Server para la gestión integral de un zoológico: roles, usuarios, animales, hábitats, empleados, itinerarios y zonas. Incluye JWT, roles/permisos y rate-limiting contra DoS.",
    tech: ["NestJS", "TypeScript", "SQL Server", "JWT"],
    link: "https://github.com/WalterJiron/ResAPI_Zoo",
    webLink: null,
    images: [
      { src: images.imgAPIZooNest, label: "Código NestJS" },
    ],
  },
  {
    title: "API de Inventario",
    description:
      "API RESTful con FastAPI y SQL Server bajo arquitectura MVC para la gestión completa de inventarios: almacenes, categorías, movimientos de stock, productos y proveedores.",
    tech: ["FastAPI", "Python", "SQL Server", "MVC"],
    link: "https://github.com/WalterJiron/Inventory_System",
    webLink: null,
    images: [
      { src: images.imgAPIFastAPI, label: "Swagger UI" },
    ],
  },
  {
    title: "Base de Datos de Zoológico",
    description:
      "Diseño de base de datos relacional en SQL Server que cumple las tres formas normales y Boyce-Codd (FNBC). Usa procedimientos almacenados con transacciones e historial de auditoría.",
    tech: ["SQL Server", "T-SQL", "Stored Procedures", "BCNF"],
    link: "https://github.com/WalterJiron/ZOO_Data",
    webLink: null,
    images: [
      { src: images.imgDBZoo, label: "Diagrama ER" },
    ],
  },
];
