# Valorant Characters API

## Description
The Valorant Characters API is a RESTful API built using Node.js and Express.js. It allows users to retrieve, add, update, and delete Valorant character information. Each character contains an ID, name, and role.

This project was developed as part of the ITPE101 Laboratory Activity 9 on creating and deploying a RESTful API.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman (API testing)
- GitHub (source code repository)
- Render (deployment platform)

## Character Data Structure
Each character contains the following fields:

| Field | Type | Description |
|---|---|---|
| `id` | Number | Unique identifier of the character |
| `Name` | String | Name of the Valorant character |
| `Role` | String | Character's role in Valorant |

Example:
```json
{
  "id": 1,
  "Name": "Jett",
  "Role": "Duelist"
}
```

## API Endpoints

Base URL for local development: `http://localhost:3000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Checks if the API is running |
| GET | `/api/characters` | Retrieves all characters |
| GET | `/api/characters/:id` | Retrieves a character by ID |
| POST | `/api/characters` | Adds a new character |
| PUT | `/api/characters/:id` | Updates an existing character |
| DELETE | `/api/characters/:id` | Deletes a character by ID |

## Installation and Setup

1. Install [Node.js](https://nodejs.org/).
2. Clone or download this repository.
3. Open a terminal in the project folder.
4. Install the dependencies:

   ```bash
   npm install
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser or use Postman to test the endpoints.

## Example Requests

### Retrieve All Characters
```http
GET /api/characters
```

### Add a Character
```http
POST /api/characters
Content-Type: application/json
```

Request body:
```json
{
  "Name": "Reyna",
  "Role": "Duelist"
}
```

The API automatically assigns an ID to the new character.

### Update a Character
```http
PUT /api/characters/1
Content-Type: application/json
```

Request body:
```json
{
  "Name": "Jett",
  "Role": "Duelist"
}
```

### Delete a Character
```http
DELETE /api/characters/1
```

## Error Handling
The API returns appropriate HTTP status codes for common results:
- `200 OK` — Request completed successfully.
- `201 Created` — Character added successfully.
- `400 Bad Request` — Required character information is missing or invalid.
- `404 Not Found` — The requested character does not exist.

## Data Storage
Character data is stored in an in-memory JavaScript array. Therefore, newly added, updated, or deleted characters are not permanently saved and may reset when the server restarts or redeploys.

## Deployment
The API can be deployed using Render.

- **Build Command:** `npm install`
- **Start Command:** `npm start`

After deployment, replace the local base URL with the public URL provided by Render.

## Author
Developed by a student for ITPE101 Laboratory Activity 9.
