# Node.js CRUD Microservice with MongoDB Atlas and Kubernetes

This project is a simple containerized microservice built using Node.js and Express, connected to MongoDB Atlas. It supports basic CRUD operations and is deployable via Kubernetes.

---

##  Features

- RESTful API with Create, Read, Update, Delete (CRUD)
- MongoDB Atlas cloud database integration
- Docker containerization
- Kubernetes deployment with `NodePort` service
- Environment-based configuration support

---

##  Local Setup

### 1. Clone the repo and install dependencies

```bash
cd app
npm install
```

### 2. Create a `.env` file in `app/` with the following content:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.gpmpazp.mongodb.net/ITEM?retryWrites=true&w=majority&appName=Cluster0
```

### 3. Start the app locally

```bash
npm start
```

The app will run at `http://localhost:3008`.

---

##  Docker Setup

### 1. Build Docker Image

```bash
docker build -t s223743838/crud-microservice:latest .
```

### 2. Push to Docker Hub

```bash
docker push s223743838/crud-microservice:latest
```

---

## Kubernetes Deployment

### 1. Apply Deployment and Service

```bash
kubectl apply -f k8s/app-deployment.yaml
kubectl apply -f k8s/app-service.yaml
```

### 2. Access the App

Then visit: `http://localhost:30008/items`


##  API Endpoints

- `POST /items` – Create item
- `GET /items` – List all items
- `GET /items/:id` – Get item by ID
- `PUT /items/:id` – Update item by ID
- `DELETE /items/:id` – Delete item by ID

---

##  Project Structure

```
.
├── app/
│   ├── server.js
│   ├── package.json
│   └── .env (not committed)
├── Dockerfile
└── k8s/
    ├── app-deployment.yaml
    └── app-service.yaml
```

---

##  Author

Sushma Singh 
SIT737 – Cloud Native Application Development (9.1P)
