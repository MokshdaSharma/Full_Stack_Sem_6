# 🔐 Spring Security + JWT Authentication Demo

This project demonstrates how to implement authentication and authorization using Spring Security and JSON Web Tokens (JWT) in a RESTful API.

It showcases how users can securely log in and access protected resources by passing a Bearer Token in the Authorization header.

---

## 🚀 Features

- User Authentication using Email & Password
- JWT Token Generation on Login
- Stateless Session Management
- Secure REST APIs using Spring Security
- Role-based Authorization (optional extension)
- MySQL / PostgreSQL Database Integration
- Password Encryption using BCrypt

---

## 🛠️ Tech Stack

- Java 17+
- Spring Boot
- Spring Security
- JWT (JSON Web Token)
- Hibernate / JPA
- MySQL / PostgreSQL
- Maven

---

## 📁 Project Structure

com.agam.rest_example
│
├── Controller
├── Service
├── Repository
├── Entity
├── Security
└── Config

---

## 🔑 Authentication Flow

1. User sends login request with credentials
2. Server validates user using Spring Security
3. JWT token is generated
4. Token is returned to client
5. Client sends token in Authorization header for protected APIs
6. Server validates token before granting access

---

## 📌 API Endpoints

### 🔓 Public Endpoints

POST /register

POST /login


---

### 🔒 Protected Endpoints

GET /api/students/{id}

Headers:
Authorization: Bearer <your_jwt_token>

---

## 🧪 Testing with Postman

1. Login using /api/auth/login
2. Copy token
3. Use it in Authorization header for protected APIs

---

## 🔐 Security Configuration

- CSRF disabled
- Stateless session
- JWT filter added before UsernamePasswordAuthenticationFilter
- BCrypt password encoding

---
## Screenshots

![WhatsApp Image 2026-04-02 at 9 58 45 PM](https://github.com/user-attachments/assets/50820169-ae3f-4c37-9193-0a85bfe34218)
![WhatsApp Image 2026-04-02 at 9 58 25 PM](https://github.com/user-attachments/assets/cd0beec3-51ee-427f-a457-19e85aeb1a11)
![WhatsApp Image 2026-04-02 at 9 58 00 PM](https://github.com/user-attachments/assets/13907181-4eb2-4fb9-89db-a24c3baacea3)
![WhatsApp Image 2026-04-02 at 9 57 22 PM](https://github.com/user-attachments/assets/c12c7b95-520b-4d2c-a3e0-952fe973dcfb)
![WhatsApp Image 2026-04-02 at 9 57 13 PM](https://github.com/user-attachments/assets/5e3ea7ac-4eba-4ea4-9e37-d664d3d8f72c)
![WhatsApp Image 2026-04-02 at 9 56 53 PM](https://github.com/user-attachments/assets/5cd34bbd-d701-42c9-bce4-3d0d194658cb)
![WhatsApp Image 2026-04-02 at 9 56 42 PM](https://github.com/user-attachments/assets/3355d8c0-a8fa-437f-8874-66598ebff5b7)






---

## ▶️ How to Run

git clone https://github.com/your-username/your-repo.git
cd your-repo
mvn spring-boot:run

---

## 👨‍💻 Author

Agampal Singh
