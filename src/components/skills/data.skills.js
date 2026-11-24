import imagenes from "./img/images.js";

class Skill {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }
}

const mainSkills = [
    new Skill("TypeScript", imagenes.iconoTs),
    new Skill("NestJS", imagenes.iconoNestJS),
    new Skill("Python", imagenes.iconoPy),
    new Skill("HTML", imagenes.iconoHtml),
    new Skill("CSS", imagenes.iconoCss),
    new Skill("Git/GitHub", imagenes.iconoGit),
    new Skill("Linux base Debian", imagenes.iconoLinux),
    new Skill("SQL Server", imagenes.iconoSqlServer),
    new Skill("React", imagenes.iconoReact),
    new Skill("Postman", imagenes.iconoPostman),
    new Skill("Dart", imagenes.IconDart),
    new Skill("Flutter", imagenes.IconFlutter),
    new Skill("FastAPI", imagenes.IconFastAPI),
    new Skill("Django", imagenes.IconDjando),
    new Skill("n8n", imagenes.IconN8N),
    new Skill("Next.js", imagenes.IconNextJs),
    new Skill("Docker", imagenes.iconoDocker),
    new Skill("PostgreSQL", imagenes.iconPostgreSQL),
];

export { mainSkills};