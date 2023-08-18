import { AuthorProps } from './author';

export interface Manga {
    id: string;
    title: string;
    genres: string[];
    image: string;
    themes: string[];
    description: object[];
    releaseDate: number;
    status: string;
    chapters: [
        {
            id: string;
            title: string;
            chapterNumber: string;
            releaseDate: string;
        },
    ];
    relationships: Relationships[];
    author: AuthorProps;
}
export interface Chapter {
    img: string;
    page: number;
    headerForImage: string;
}
