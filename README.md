
# Mini Load Board API

## Overview

The Mini Load Board API is a service designed to post and manage load data, similar to a DAT load board. This project leverages TypeScript, Node.js, Express, and MongoDB to create a robust and scalable API. It also includes a containerized development environment for streamlined development and deployment.

## Features

- **Load Management**: Create, read, update, and delete (CRUD) operations for load data.
- **Express & TypeScript**: Modern server-side code using TypeScript for type safety and Express for routing.
- **MongoDB & Mongoose**: Efficient data storage and retrieval with MongoDB, modeled using Mongoose.
- **Dockerized Environment**: Containerized development environment with hot reloading for ease of use.
- **API Documentation**: Comprehensive API documentation for easy integration and usage.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/get-started)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository**

   \`\`\`bash
   git clone https://github.com/TDodgeCo/mini-load-board-api.git
   cd mini-load-board-api
   \`\`\`

2. **Install dependencies**

   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**

   Create a \`.env\` file in the root directory and add the following variables:

   \`\`\`env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/mini-load-board
   \`\`\`

4. **Run the development server**

   \`\`\`bash
   npm run dev
   \`\`\`

   The server should now be running at \`http://localhost:3000\`.

### Docker Setup

1. **Build the Docker image**

   \`\`\`bash
   docker build -t mini-load-board-api .
   \`\`\`

2. **Run the Docker container**

   \`\`\`bash
   docker run -p 3000:3000 --env-file .env mini-load-board-api
   \`\`\`

### API Endpoints

- **GET /loads**: Retrieve all loads
- **POST /loads**: Create a new load
- **GET /loads/:id**: Retrieve a specific load by ID
- **PUT /loads/:id**: Update a specific load by ID
- **DELETE /loads/:id**: Delete a specific load by ID

### Example Request

**POST /loads**

\`\`\`bash
curl -X POST http://localhost:3000/loads \
-H 'Content-Type: application/json' \
-d '{
  "title": "Load from LA to NY",
  "description": "Transporting electronics",
  "origin": "Los Angeles, CA",
  "destination": "New York, NY",
  "pickupDate": "2024-08-01",
  "deliveryDate": "2024-08-05"
}'
\`\`\`

### MongoDB Models

The project uses Mongoose to define the schema and models for MongoDB. Here's an example of the \`Load\` model:

\`\`\`typescript
import { Schema, model } from 'mongoose';

const loadSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  pickupDate: { type: Date, required: true },
  deliveryDate: { type: Date, required: true },
});

export const Load = model('Load', loadSchema);
\`\`\`

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the existing code style and include tests for new features.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out:

- **Author**: Timothy Dodge
- **Email**: [timothy.dodge@example.com](mailto:timothy.dodge@example.com)
- **GitHub**: [TDodgeCo](https://github.com/TDodgeCo)

---

Thank you for using the Mini Load Board API! We hope it helps you manage your load data efficiently.
