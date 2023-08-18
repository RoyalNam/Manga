import { AuthorProps } from '@/types/author';
import { Manga } from '@/types/manga';
import { base_url, info_url } from '@/utils/baseUrl';
import axios from 'axios';

const getData = (url?: string, params?: object) => {
    const fetchData = axios.get(`${base_url}${url}`, {
        params: params,
    });
    return fetchData;
};
export const getAuthor = async (id: string) => {
    const resp = await getData(`manga/${id}`);
    const authorRelationship = resp.data.data.relationships.find((relationship: any) => relationship.type === 'author');
    if (authorRelationship) {
        const resp = await getData(`author/${authorRelationship.id}`);
        return resp.data.data;
    }
    return null;
};
export const getInfo = async (id: string) => {
    const fetchData = await axios.get(info_url + 'info/' + id);
    if (fetchData.data) {
        const dataInfo: Manga = fetchData.data;

        // Add author
        const author = await getAuthor(id);
        dataInfo.author = author;
        return dataInfo;
    }
    return null;
};
export const getChapter = (id: string) => {
    const fetchData = axios.get(info_url + 'read/' + id);
    return fetchData;
};
export const getManga = async (params: object) => {
    try {
        const respond = await getData('manga/', params);
        const requests = respond.data.data.map(async (request: Manga) => {
            const data = await getInfo(request.id);
            return data;
        });
        const respAll = await Promise.all(requests);
        console.log('res', respAll);
        return respAll;
    } catch (err) {
        console.error(err);
        return err;
    }
};
export const getOnGoing = () => {
    const data = getManga({ limit: 45, status: ['ongoing'] });
    return data;
};
export const getCompleted = async (offset: number = 1) => {
    const data = getManga({ limit: 45, status: ['completed'], offset: offset });
    return data;
};
export const getHottest = async () => {
    const data = await getManga({ limit: 25, order: { followedCount: 'desc' } });
    return data;
};
export const getAction = async () => {
    // const data = await getData('manga/tag/');
    // const data = await getManga({ includedTags: 'Actions' });
    const response = await axios.get('https://api.mangadex.org/manga', {
        params: {
            limit: 20,
            includedTags: `${['Action']}+`,
        },
    });

    const mangaList = response.data.data;
    // Xử lý các thông tin về mangaList ở đây

    return mangaList;
    // return data;
};
export const HomeData = async () => {
    const data = await Promise.all([getOnGoing(), getCompleted(), getHottest()]);
    console.log('dt', data);

    return data;
};
