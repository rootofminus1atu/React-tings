import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
    
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
    })
  );
}

seed();


function getPosts() {
  return [
    {
        title: "Sample Post 1",
        content: "This is the content of the first post.",
        likes: 4
    },
    {
        title: "Something else",
        content: "pooooooooost",
        likes: -1
    }
]
}
