import { seedDatabase } from '../lib/seed';

async function main() {
  console.log('Starting database seeding...');
  await seedDatabase();
  console.log('Seeding completed!');
  process.exit(0);
}

main().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
});
