import { Post } from "../interfaces/post.interface";

// Dummy Data
export const POSTS: Post[] = [
    {
        id: 1,
        title: 'Getting Started',
        content: 'This is my first post explaining why I started this project and what I aim to build.',
        authorName: 'Sayan',
        createdAt: new Date('2025-01-01'),
    },
    {
        id: 2,
        title: 'Why TypeScript Matters',
        content: 'TypeScript catches bugs early, improves readability, and scales better than plain JavaScript.',
        authorName: 'Sayan',
        createdAt: new Date('2025-01-03'),
    },
    {
        id: 3,
        title: 'Understanding REST APIs',
        content: 'REST APIs follow stateless communication, clear endpoints, and proper HTTP methods.',
        authorName: 'Sayan',
        createdAt: new Date('2025-01-05'),
    },
    {
        id: 4,
        title: 'Common Backend Mistakes',
        content: 'Skipping validation, ignoring error handling, and poor database indexing kill performance.',
        authorName: 'Sayan',
        createdAt: new Date('2025-01-08'),
    },
    {
        id: 5,
        title: 'Why Clean Code Wins',
        content: 'Readable code beats clever code. If it is hard to read, it is hard to maintain.',
        authorName: 'Sayan',
        createdAt: new Date('2025-01-10'),
    },
    {
        id: 6,
        title: 'Debugging Like a Pro',
        content: 'Stop guessing. Use logs, breakpoints, and isolate the problem logically.',
        authorName: 'Sayan',
        createdAt: new Date('2025-01-12'),
    },
    {
        id: 7,
        title: 'Learning the Hard Way',
        content: 'Tutorials give confidence. Building projects gives skill. There is a difference.',
        authorName: 'Sayan',
        createdAt: new Date('2025-01-15'),
    },
    {
        id: 8,
        title: 'Performance Is a Feature',
        content: 'If your app is slow, users do not care how good your UI or logic is.',
        authorName: 'Sayan',
        createdAt: new Date('2025-01-18'),
    },
];
