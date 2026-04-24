# Spring Security with JWT Authentication 

This project demonstrates how to implement authentication and authorization using Spring Security and JSON Web Tokens (JWT) in a RESTful API.

It showcases how users can securely log in and access protected resources by passing a Bearer Token in the Authorization header.

---

## Features

- User Authentication using Email & Password
- JWT Token Generation on Login
- Stateless Session Management
- Secure REST APIs using Spring Security
- Role-based Authorization (optional extension)
- MySQL / PostgreSQL Database Integration
- Password Encryption using BCrypt

---

##  Authentication Flow

1. User sends login request with credentials
2. Server validates user using Spring Security
3. JWT token is generated
4. Token is returned to client
5. Client sends token in Authorization header for protected APIs
6. Server validates token before granting access

---

##  API Endpoints

### Public Endpoints

POST /register

POST /login


---

###  Protected Endpoints

GET /api/students/{id}

Headers:
Authorization: Bearer <your_jwt_token>

---

## Testing with Postman

1. Login using /api/auth/login
2. Copy token
3. Use it in Authorization header for protected APIs

---

## Security Configuration

- CSRF disabled
- Stateless session
- JWT filter added before UsernamePasswordAuthenticationFilter
- BCrypt password encoding

---
## Screenshots

### Spring Boot 
![WhatsApp Image 2026-04-02 at 9 58 45 PM](https://github.com/user-attachments/assets/50820169-ae3f-4c37-9193-0a85bfe34218)

---

### Register
![WhatsApp Image 2026-04-02 at 9 56 53 PM](https://github.com/user-attachments/assets/7aaf0f69-92dd-4622-972d-71daa2ee42dd)
![WhatsApp Image 2026-04-02 at 9 56 42 PM](https://github.com/user-attachments/assets/147cba6c-581b-476b-876d-f444c228c701)

---

### Login

![WhatsApp Image 2026-04-02 at 9 57 22 PM](https://github.com/user-attachments/assets/12ba2787-f03a-4006-8490-96cb85c775fb)
![WhatsApp Image 2026-04-02 at 9 57 13 PM](https://github.com/user-attachments/assets/ded8c274-4713-4f9a-a31b-324997bdeec5)

---

### Authentication 

![WhatsApp Image 2026-04-02 at 9 58 00 PM](https://github.com/user-attachments/assets/0fe3a9a0-d3da-4f7f-8207-62cd18ee8b62)

![WhatsApp Image 2026-04-02 at 9 58 25 PM](https://github.com/user-attachments/assets/2efa1121-6ff4-416f-bbb3-406bfe28a705)

