import images from "./img/images.js";

export default [
    {
        title: "API de zoológico",
        description: `
                API RESTful desarrollada con NestJS y SQL Server. 
                Permite la gestión de un zoológico: puedes agregar, 
                eliminar (de forma lógica), editar y restaurar roles, 
                usuarios, animales, hábitats, empleados (guías y cuidadores), 
                itinerarios y zonas.
                La API cuenta con autenticación JWT, 
                además de un sistema de roles y permisos. 
                También controla la cantidad de peticiones que realiza un 
                usuario en un tiempo determinado, 
                para evitar ataques de denegación de servicio (DoS).
        `,
        link: "https://github.com/WalterJiron/ResAPI_Zoo",
        image: `${images.imgAPIZooNest}`,
    },
    {
        title: "Base de datos de zoológico",
        description: `
                Base de datos desarrollada con SQL Server. 
                Permite la gestión de un zoológico.
                Cumple con las tres formas normales y además aplica 
                la forma normal de Boyce-Codd (FNBC).
                También hace uso de procedimientos almacenados con transacciones 
                para una mejor integridad de los datos. 
                Además, cuenta con tablas y campos de auditoría 
                para el control de los cambios realizados.
        `,
        link: "https://github.com/WalterJiron/ZOO_Data",
        image: `${images.imgDBZoo}`,
    },
    {
        title: "API de gestión de inventario",
        description: `
                API RESTful desarrollada con FastAPI y SQL Server, 
                utilizando la arquitectura MVC, 
                lo que permite un mejor desarrollo, mantenimiento y escalabilidad 
                de la aplicación. 
                La API permite la gestión completa de un inventario.
        `,
        link: "https://github.com/WalterJiron/Inventory_System",
        image: `${images.imgAPIFastAPI}`,
    },
];
