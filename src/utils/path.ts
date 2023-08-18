const path = {
    home: '/',
    new: '/new',
    completed: '/completed',
    genres: `/genres`,
    title: (title: string) => `/title/${title}`,
    viewer: (viewer: string) => `/viewer/${viewer}`,
};
export default path;
