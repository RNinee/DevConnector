# DevConnector

A full-stack MERN social network for developers to create profiles, share posts, and connect with other developers.

**Live Demo:** [https://agile-springs-85100-1bc255ae9f1e.herokuapp.com/](https://agile-springs-85100-1bc255ae9f1e.herokuapp.com/)

## Features

- User authentication with JWT
- Developer profiles with experience, education, and skills
- GitHub repository integration
- Create, like, and comment on posts
- Browse all developer profiles
- Gravatar profile pictures
- Responsive design

## Tech Stack

**Frontend:**
- React 18
- Redux Toolkit for state management
- React Router v7
- Axios for API calls

**Backend:**
- Node.js & Express 5
- MongoDB with Mongoose
- JWT Authentication
- Express Validator
- Gravatar for profile pictures

## Installation

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local MongoDB
- pnpm (or npm)

### Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/devconnector.git
cd devconnector
```

2. Install dependencies
```bash
# Install server dependencies
pnpm install

# Install client dependencies
cd client
pnpm install
cd ..
```

3. Create config files

Create `config/default.json`:
```json
{
  "mongoURI": "your_mongodb_connection_string",
  "jwtSecret": "your_jwt_secret",
  "githubToken": "your_github_token"
}
```

4. Run the application
```bash
# Run both client and server
pnpm run dev

# Run server only
pnpm run server

# Run client only
pnpm run client
```

The app will run on `http://localhost:3000`

## Environment Variables (Production)

For Heroku deployment, set these environment variables:
- `mongoURI` - MongoDB connection string
- `jwtSecret` - JWT secret key
- `githubToken` - GitHub personal access token
- `NODE_ENV` - Set to `production`

## Deployment

This app is configured for Heroku deployment with pnpm:

```bash
# Login to Heroku
heroku login

# Create a new Heroku app
heroku create

# Set environment variables
heroku config:set mongoURI="your_mongodb_uri"
heroku config:set jwtSecret="your_jwt_secret"
heroku config:set githubToken="your_github_token"

# Push to Heroku
git push heroku main
```

## API Endpoints

- `POST /api/users` - Register user
- `POST /api/auth` - Login user
- `GET /api/auth` - Get authenticated user
- `GET /api/profile/me` - Get current user profile
- `POST /api/profile` - Create/update profile
- `GET /api/profile` - Get all profiles
- `GET /api/profile/user/:user_id` - Get profile by user ID
- `GET /api/profile/github/:username` - Get GitHub repos
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a post
- `PUT /api/posts/like/:id` - Like a post
- `POST /api/posts/comment/:id` - Add comment to post
- `DELETE /api/posts/comment/:id/:comment_id` - Delete comment

## Author

DevConnector MERN Application
