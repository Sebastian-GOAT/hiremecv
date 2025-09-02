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

export type CVData = {
    fullname: string;
    skills: Skill[];
    languages: Language[];
};