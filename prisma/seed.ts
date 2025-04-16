import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.user.deleteMany();
  
  console.log('Seeding database...');
  
  // Create demo creator user
  const creatorPassword = await bcrypt.hash('password123', 10);
  const creator = await prisma.user.create({
    data: {
      name: 'Demo Creator',
      email: 'creator@example.com',
      password: creatorPassword,
      role: 'creator',
      image: '/creator-profiles/demo.jpg',
      bio: 'I am a demo creator who makes digital art and tutorials.',
    },
  });
  
  // Create demo supporter user
  const supporterPassword = await bcrypt.hash('password123', 10);
  const supporter = await prisma.user.create({
    data: {
      name: 'Demo Supporter',
      email: 'supporter@example.com',
      password: supporterPassword,
      role: 'supporter',
      image: '/supporter-profiles/demo.jpg',
    },
  });
  
  console.log('Database seeded!');
  console.log('Created users:');
  console.log('- Creator:', creator.email);
  console.log('- Supporter:', supporter.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
