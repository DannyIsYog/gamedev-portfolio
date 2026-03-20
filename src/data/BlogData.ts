export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: number;
    coverColor: string;
}

const blogData: BlogPost[] = [
    {
        id: "post-1",
        title: "Designing for Fun: What Makes a Game Feel Good",
        excerpt: "A deep dive into game feel and how micro-interactions can transform a mediocre mechanic into something magical. From juice to feedback loops.",
        date: "2024-02-15",
        category: "Game Design",
        readTime: 7,
        coverColor: "#6366f1"
    },
    {
        id: "post-2",
        title: "Building a Voxel Engine from Scratch in C++",
        excerpt: "My experience contributing to CUBOS. — an open source voxel game engine — and what I learned about data-oriented design and ECS architecture.",
        date: "2024-01-08",
        category: "Programming",
        readTime: 12,
        coverColor: "#0891b2"
    },
    {
        id: "post-3",
        title: "Game Jam Survival Guide: 48 Hours to Ship",
        excerpt: "Tips, tricks and war stories from competing in over 15 game jams. How to scope aggressively, prototype fast, and actually finish something.",
        date: "2023-11-20",
        category: "Game Dev",
        readTime: 5,
        coverColor: "#059669"
    }
];

export default blogData;
