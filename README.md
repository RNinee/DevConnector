# DevConnector

A full-stack MERN application for developers to create profiles, share posts, and connect with other developers.

## Features

- User authentication with JWT
- Developer profiles with experience and education
- GitHub repository integration
- Post creation with likes and comments
- Browse all developer profiles
- Dashboard for managing your profile

## Tech Stack

**Frontend:**
- React
- Redux for state management
- React Router v6
- Axios

**Backend:**
- Node.js & Express
- MongoDB with Mongoose
- JWT Authentication
- Express Validator

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- pnpm (or npm)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd mern
```

2. Install dependencies
```bash
# Install server dependencies
pnpm install

# Install client dependencies
cd client
pnpm install
```

3. Set up environment variables
Create a `default.json` file in the `config` folder with your MongoDB URI and JWT secret.

4. Run the application
```bash
# Run both client and server
pnpm run dev

# Run server only
pnpm run server

# Run client only
pnpm run client
```

## API Endpoints

- `/api/users` - User registration
- `/api/auth` - User authentication
- `/api/profile` - User profiles
- `/api/posts` - Posts and comments
