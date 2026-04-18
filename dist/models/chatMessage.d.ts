export type ChatMessage = {
    _id: string;
    content: string;
    authorId: string;
    authorName: string;
    channel: 'global' | `team:${string}`;
    createdAt: string;
    updatedAt: string;
};
