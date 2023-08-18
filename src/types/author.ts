export interface AuthorProps {
    id: string;
    attributes: {
        biography?: object;
        booth?: string;
        createdAt?: string;
        fanBox?: string;
        fantia?: string;
        imageUrl?: string;
        name: string;
        naver?: string;
        nicoVideo?: string;
        pixiv?: string;
        skeb?: string;
        tumblr?: string;
        twitter?: string;
        updatedAt?: string;
        version?: number;
        website?: string;
        weibo?: string;
        youtube?: string;
    };
    relationship: Relationships[];
}
