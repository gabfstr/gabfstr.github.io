import * as query from './query';

export interface ProjectAuthor {
    name: string;
    link: string | null;
    institutions: number[];
    equal: boolean | null;
}

export interface ProjectButtons {
    arxiv_pdf: string | null;
    arxiv_abs: string | null;
    code: string | null;
    supplementary: string | null;
}

export interface TeaserVideo {
    src: string;
    caption: string | null;
}

export interface CarouselItem {
    src: string;
    caption?: string | null;
    title?: string | null;
}

export interface ProjectFrontmatterData {
    title: string;
    conference: string | null;
    equal_contribution_note: string | null;
    footer_note: string;
    poster_pdf: string | null;
    bibtex: string;

    authors: ProjectAuthor[];
    institutions: string[];

    buttons: ProjectButtons;

    videos: {
        carousel_caption: string | null;
        teaser: TeaserVideo | null;
        carousel: CarouselItem[];
    };
    images: CarouselItem[];
}

export interface ProjectTemplateData {
    slug: string;
    title: string;
    readingTime: {
        text: string;
    };
    body: string;
    
    frontmatter: ProjectFrontmatterData;
}


// Re-export the query for use in gatsby-node (createPages.js)
export const ProjectTemplateQuery = query.ProjectTemplateQuery;