import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

async function main(){
    const post = await prisma.post.create({
        data: {
            title: ''
        }
    })
}