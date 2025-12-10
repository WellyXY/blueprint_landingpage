export interface Post {
    id: string;
    type: "image" | "video" | "text";
    content: string;
    thumbnail?: string; // For videos
    caption: string;
    likes: number;
    comments: number;
}

export interface Character {
    id: string;
    name: string;
    username: string;
    role: string;
    bio: string;
    avatar: string;
    followers: string;
    following: string;
    posts: Post[];
}

export const characters: Character[] = [
    {
        id: "kai",
        name: "Kai",
        username: "kai_cyber",
        role: "Cyberpunk Guide",
        bio: "Neon lights and sleepless nights. 🌃\nNavigator of the Undercity.\nHacking reality one node at a time.",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
        followers: "12.5K",
        following: "420",
        posts: [
            {
                id: "p1",
                type: "image",
                content: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
                caption: "View from the safehouse. The rain never stops here. 🌧️ #cyberpunk #neotokyo",
                likes: 1240,
                comments: 45
            },
            {
                id: "p2",
                type: "image",
                content: "https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&w=800&q=80",
                caption: "New gear acquired. Ready for the next run.",
                likes: 892,
                comments: 32
            },
            {
                id: "p3",
                type: "image",
                content: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
                caption: "System breach detected. Tracing the signal...",
                likes: 2100,
                comments: 120
            }
        ]
    },
    {
        id: "elara",
        name: "Elara",
        username: "elara_nature",
        role: "Fantasy Healer",
        bio: "Keeper of the Ancient Grove. 🌿\nHealing through nature's whispers.\nMoonlight is my guide. 🌙",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
        followers: "8.2K",
        following: "150",
        posts: [
            {
                id: "p1",
                type: "image",
                content: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
                caption: "The elder tree speaks of change. We must listen. 🌳",
                likes: 3400,
                comments: 210
            },
            {
                id: "p2",
                type: "image",
                content: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
                caption: "Morning light filtering through the canopy. Magic is real.",
                likes: 1500,
                comments: 85
            },
            {
                id: "p3",
                type: "image",
                content: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
                caption: "Gathering herbs for the winter solstice potions.",
                likes: 2800,
                comments: 140
            }
        ]
    },
    {
        id: "unit734",
        name: "Unit 734",
        username: "unit_734_logistics",
        role: "Logistics Droid",
        bio: "Efficiency is paramount. 🤖\nManaging colony resources.\nProbability of failure: 0.0001%.",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
        followers: "45.1K",
        following: "1",
        posts: [
            {
                id: "p1",
                type: "image",
                content: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
                caption: "Daily diagnostic complete. All systems nominal.",
                likes: 5600,
                comments: 42
            },
            {
                id: "p2",
                type: "image",
                content: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
                caption: "Optimizing server rack cooling efficiency.",
                likes: 3200,
                comments: 15
            },
            {
                id: "p3",
                type: "image",
                content: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
                caption: "Analyzing data streams. Pattern detected.",
                likes: 4100,
                comments: 88
            }
        ]
    }
];
