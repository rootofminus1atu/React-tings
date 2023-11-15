export interface User {
    id: number
    username: string
    email: string
    avatar: string
    //posts: Post[]
}

export interface Post {
    id: number
    title: string
    content: string
    author: User
    tags: string[]
    //comments: Comment[]
    likes: User[]
    dislikes: User[]
}

export interface Comment {
    id: number
    content: string
    author: User
    post: Post
    likes: User[]
    dislikes: User[]
}



export const users: User[] = [
    {
        id: 1,
        username: "user1",
        email: "user1@example.com",
        avatar: "https://randomoutputs.com/assets/images/tools/fruits/jostaberry.webp"
    },
    {
        id: 2,
        username: "user2",
        email: "user2@example.com",
        avatar: "https://randomoutputs.com/assets/images/tools/fruits/date.webp"
    },
    {
        id: 3,
        username: "user3",
        email: "user3@example.com",
        avatar: "https://randomoutputs.com/assets/images/tools/fruits/mangosteen.webp"
    },
]

export const posts: Post[] = [
    {
        id: 1,
        title: "Sample Post 1",
        content: "This is the content of the first post.",
        author: users[0],
        tags: ["tag1", "tag2"],
        likes: [users[1]],
        dislikes: [],
    },
    {
        id: 2,
        title: "Sample Post 2",
        content: "This is the content of the second post.",
        author: users[1],
        tags: ["tag3"],
        likes: [users[0]],
        dislikes: [users[1]],
    },
    {
        id: 3,
        title: "Sample Post 3",
        content: "This is the content of the second post.",
        author: users[1],
        tags: ["tag3"],
        likes: [users[0]],
        dislikes: [users[1]],
    },
]

export const comments: Comment[] = [
    {
        id: 1,
        content: "This is a comment on the first post.",
        author: users[1],
        post: posts[0],
        likes: [users[0]],
        dislikes: [],
    },
    {
        id: 2,
        content: "Another comment on the first post.",
        author: users[0],
        post: posts[0],
        likes: [],
        dislikes: [users[1]],
    },
    {
        id: 3,
        content: "A comment on the second post.",
        author: users[1],
        post: posts[1],
        likes: [],
        dislikes: [],
    },
]