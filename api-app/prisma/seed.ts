import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const user1 = await prisma.user.create({
    data: {
      age: 15,
      fullName: 'Nassim',
    },
  });
 const post1 = await prisma.post.create({
    data: {
        imageURL : "www.sfectoria.com/iphone14.png",
        productName : "iphone14",
        price : 0,
        userId : user1.id
    }
 })
}

main();
