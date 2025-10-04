export type ChatMessage = {
    _id: string;
    content: string;
    authorId: string;
    authorName: string;
    channel: 'global';
    createdAt: string;
    updatedAt: string;
};
