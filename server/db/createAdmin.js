import pool from './connection.js';

async function createAdminUser() {
  try {
    // Drop existing table to recreate it properly
    await pool.query('DROP TABLE IF EXISTS users');
    console.log('🔄 Dropped existing users table');

    // Create users table
    const createTableQuery = `
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role ENUM('Admin', 'Sub Admin') NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;
    
    await pool.query(createTableQuery);
    console.log('✅ Users table created successfully');

    // Insert admin user with plain password
    const defaultPassword = 'admin123';

    const insertAdminQuery = `
      INSERT INTO users (username, password, role) 
      VALUES (?, ?, ?)
    `;
    
    await pool.query(insertAdminQuery, ['admin', defaultPassword, 'Admin']);
    console.log('✅ Admin user created successfully');
    console.log('📝 Username: admin');
    console.log('📝 Password: admin123');

  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
  } finally {
    await pool.end();
  }
}

createAdminUser();
