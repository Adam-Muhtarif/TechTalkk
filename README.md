# PAYLOAD CMS & TECHTALKK WEB APP SETUP

## REQUIREMENTS

- **Node.js** (LTS version 20+ recomended)
- **Yarn** you can run this to setup yarn in your machine
  ```sh
    npm install --global yarn
  ```
- **PostgreSQL** (use your preferred way) (like [Neon](https://neon.tech/))
- **.env file** (see [Environment Variables](#environment-variables))

## REPOSITORY STRUCTURE

This repository contains two applications:
1. **backend-payload** - The Payload CMS backend
2. **techtalkk-webapp** - The frontend web application

## SETUP INSTRUCTIONS

### 1. BACKEND (Payload CMS)

1. **Navigate to the backend directory:**
   ```sh
   cd backend-payload
   ```

2. **Install dependencies:**
   ```sh
   yarn install
   ```

3. **Configure the database:**
   - Ensure PostgreSQL is running.
   - Update your `.env` file **DATABASE_URI** with your database connection string.

4. **Run database migrations:**
   ```sh
   yarn payload migrate:fresh
   # OR
   yarn payload migrate
   ```

5. **Start the Payload CMS app:**
   ```sh
   yarn dev
   ```

### 2. FRONTEND (TechTalkk Web App)

1. **Navigate to the frontend directory:**
   ```sh
   cd ../techtalkk-webapp
   ```

2. **Install dependencies:**
   ```sh
   yarn install
   ```

3. **Start the development server:**
   ```sh
   yarn dev
   ```

## ENVIRONMENT VARIABLES

Create .env file by running this command 
```sh
# For payload backend
cd backend-payload
cp .env.example .env

# For techtalkk-webapp
cd techtalkk-webapp
cp .env.example .env
```
Each app requires its own `.env` file.

### Backend (`backend-payload/.env`):
```env
# Database
DATABASE_URI=postgres://username:password@localhost:5432/payload_db
PAYLOAD_SECRET=your-secret-key
```

### Frontend (`techtalkk-webapp/.env`):
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```


## TROUBLESHOOTING

- Ensure PostgreSQL is running and properly configured.
- If migrations fail, try:
  ```sh
  yarn payload migrate:reset
  yarn payload migrate:fresh
  ```
- If API calls fail on the frontend, check that the `NEXT_PUBLIC_API_URL` is correctly set.

## CONTRIBUTING
Feel free to submit issues or pull requests to improve this setup.

## LICENSE
This project is licensed under [MIT License](LICENSE).

