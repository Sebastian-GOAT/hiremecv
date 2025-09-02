type SkillLevel = string;

type Skill = {
    title: string;
    level: SkillLevel;
};

type LanguageLevel =
    | 'A1'
    | 'A2'
    | 'B1'
    | 'B2'
    | 'C1'
    | 'C2';

type Language = {
    title: string;
    level: LanguageLevel
};

type Contact = {
    title: string;
    link?: string;
};

type Education = {
    title: string;
    major: string;
    degree: string;
    startDate: Date;
    endDate: Date;
};

type Expirience = {
    title: string;
    role: string;
    startDate: Date;
    endDate?: Date;
};

type Project = {
    title: string;
};

export type CVData = {
    fullname: string;
    position: string;
    contact: Contact[];
    education: Education[];
    expirience: Expirience[];
    skills: Skill[];
    projects: Project[];
    languages: Language[];
    interests: string[];
    summary: string;
};