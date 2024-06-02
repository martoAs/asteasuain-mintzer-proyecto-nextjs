import { hash } from 'bcryptjs';
import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.upsert({
      where:{
        email: 'admin@admin.com'
      },
      update: {},
      create: {
        email: 'admin@admin.com',
        name : 'admin',
        password: await hash('admin', 10),
      }
    })
    console.log(user)
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    proccess.exit(1)
  })