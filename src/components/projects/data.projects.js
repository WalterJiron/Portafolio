import images from "./img/images.js";

export default [
    {
        title: "API de zoologico",
        description: `
                Api Rest Full desarrollada con NestJs y SQL server, 
                permite la gestion de un zoologico. Puede agregar, 
                eliminar (de forma analojica), editar y restaurar roles,
                usuarios, animales, habitats, empleados (Guias, Cuidadores), itinerarios
                y zonas.${"/n"}
                La API cuenta con autenticacion JWT,
                ademas de un sistema de roles y permisos,
                tambien controla la cantidad de peticiones que haces un 
                usuario en un tiempo determinado,
                para evitar ataques de denegacion de servicio (DoS).
        `,
        link: "https://github.com/WalterJiron/ResAPI_Zoo",
        image: `${images.imgAPIZooNest}`,
    },
    {
        title: "Base de datos de zoologico",
        description: `
                Base de datos desarrollada con SQL Server,
                permite la gestion de un zoologico.${"\n"} 
                Hace el cumplimiento de las 3 formas normales a demas hace uso de 
                Boyce-Codd (FNBC).${"\n"} 
                Tambien hace uso de procedimientos almacenados con transacciones, 
                para una mejor integridad de los datos, ademas cuenta con 
                tablas y campos de auditoria para el control de cambios que se realizan.
        `,
        link: "https://github.com/WalterJiron/ZOO_Data",
        image: `${images.imgDBZoo}`,
    },
    {
        title: "API de gestion de inventario",
        description: `
                API Rest Full desarrollada con FastAPI y SQL server
                utilizando la arquitectura MVC, 
                que un mejor desarrollo, mantenimiento y escalabilidad 
                de la aplicacion.${"\n"}
                La API permite la gestion completa de un inventario,
        `,
        link: "https://github.com/WalterJiron/Inventory_System",
        image: `${images.imgAPIFastAPI}`,
    },
];
