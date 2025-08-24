require('dotenv').config({ path: '.env.local' });

const { drizzle } = require('drizzle-orm/neon-http');
const { neon } = require('@neondatabase/serverless');

// Define the products table schema
const products = [
  {
    name: 'Nike Air Max 270',
    description: 'The Nike Air Max 270 delivers unrivaled, all-day comfort. The shoe\'s design draws inspiration from Air Max icons, showcasing Nike\'s greatest innovation with its large window and fresh array of colors.',
    price: '150.00',
    category: 'Sneakers',
    brand: 'Nike',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-shoe-KkLcGR.png',
    stock: 25,
  },
  {
    name: 'Nike Air Jordan 1 Retro High',
    description: 'The Air Jordan 1 Retro High features a classic design with premium leather construction and the iconic Air-Sole unit for lightweight cushioning.',
    price: '170.00',
    category: 'Sneakers',
    brand: 'Nike',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c5678f4-c28d-4862-a8d9-56750f839f12/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png',
    stock: 15,
  },
  {
    name: 'Nike Dri-FIT Training T-Shirt',
    description: 'The Nike Dri-FIT Training T-Shirt is made with sweat-wicking fabric to help you stay dry and comfortable during your workout.',
    price: '35.00',
    category: 'Apparel',
    brand: 'Nike',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c5678f4-c28d-4862-a8d9-56750f839f12/dri-fit-training-t-shirt-7c5678f4-c28d-4862-a8d9-56750f839f12.png',
    stock: 50,
  },
  {
    name: 'Nike Air Force 1 \'07',
    description: 'The Nike Air Force 1 \'07 is a modern take on the iconic AF1. It features a leather upper with a classic design and Air-Sole unit for lightweight cushioning.',
    price: '100.00',
    category: 'Sneakers',
    brand: 'Nike',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c5678f4-c28d-4862-a8d9-56750f839f12/air-force-1-07-shoes-WrLlWX.png',
    stock: 30,
  },
  {
    name: 'Nike Pro Shorts',
    description: 'The Nike Pro Shorts are designed for maximum mobility and comfort during training sessions. Made with Dri-FIT technology to keep you dry.',
    price: '25.00',
    category: 'Apparel',
    brand: 'Nike',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c5678f4-c28d-4862-a8d9-56750f839f12/pro-shorts-7c5678f4-c28d-4862-a8d9-56750f839f12.png',
    stock: 40,
  },
  {
    name: 'Nike ZoomX Vaporfly NEXT% 2',
    description: 'The Nike ZoomX Vaporfly NEXT% 2 is designed for elite runners seeking maximum performance. Features ZoomX foam and a carbon fiber plate.',
    price: '250.00',
    category: 'Running',
    brand: 'Nike',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c5678f4-c28d-4862-a8d9-56750f839f12/zoomx-vaporfly-next-2-road-racing-shoes-7c5678f4-c28d-4862-a8d9-56750f839f12.png',
    stock: 10,
  },
];

async function seedDatabase() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    console.log('Connecting to database...');
    const sql = neon(process.env.DATABASE_URL);
    const db = drizzle(sql);

    console.log('Seeding database with Nike products...');
    
    for (const product of products) {
      await sql`
        INSERT INTO products (name, description, price, category, brand, image_url, stock, created_at, updated_at)
        VALUES (${product.name}, ${product.description}, ${product.price}, ${product.category}, ${product.brand}, ${product.imageUrl}, ${product.stock}, NOW(), NOW())
      `;
    }
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

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
