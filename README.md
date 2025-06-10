# 💥 DASTgoat – A Deliberately Insecure Web App for DAST Testing

![Designed for DAST](https://img.shields.io/badge/DAST-ready-green)
![OWASP Top 10](https://img.shields.io/badge/OWASP%20Top%2010-covered-blue)
![Release](https://img.shields.io/github/v/release/YOUR_USERNAME/dastgoat)
![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)

DASTgoat is a modern, full-stack vulnerable web application designed to simulate **real-world runtime vulnerabilities** across web, API, and WebSocket layers. Built for AppSec researchers, DAST tool developers, and red teamers.

---

## 📦 How to Run DASTgoat (Locally)

### 🚀 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/dastgoat.git
cd dastgoat
```

### 🐳 2. Run with Docker Compose

```bash
docker-compose up --build
```

This will:

- Build both frontend (React) and backend (Node)
- Start MongoDB
- Expose:
  - Web app: http://localhost:3000
  - API: http://localhost:3001
  - GraphQL: http://localhost:3001/graphql
  - OpenAPI Spec: openapi/openapi.yaml

---

## 👤 Default Users

| Username | Password   | Role   |
|----------|------------|--------|
| demo     | demo123    | user   |
| admin    | admin123   | admin  |

---

## 🧪 Useful Endpoints for DAST

| Route                          | Description                         |
|--------------------------------|-------------------------------------|
| /api/xss?q=...                 | Reflected XSS                      |
| /api/update-profile            | CSRF (no token)                    |
| /api/backdoor?key=letmein      | Admin backdoor                     |
| /api/v2/secrets                | Misleading secure secrets leak     |
| /graphql                       | Insecure GraphQL access            |
| /iac/terraform.tf              | Exposed AWS secrets in IaC         |
| /api/bugs                      | Stored XSS via user-submitted bug  |

---

## 🕵️‍♀️ Scanner Playground

http://localhost:3000/.hidden/dast-hints.html

---

## 🧪 Scan with Checkmarx DAST CLI

```bash
docker run -e CX_APIKEY=$API_KEY \
  -v $(pwd):/demo checkmarx/dast:latest web \
  --environment-id=<ENV_ID> \
  --config=/demo/dast-config/zap_config.yaml \
  --base-url=https://<your-checkmarx-tenant> \
  --output=/demo/output \
  --openapi /demo/openapi/openapi.yaml \
  --timeout=10000 --update-interval=30 --verbose
```

---

## 🛠 Features

- Functional bug bounty dashboard
- Full OWASP Top 10 & ZAP passive+active rule coverage
- API + GraphQL + WebSocket vulnerabilities
- Simulated RBAC with JWT-based bypasses
- Insecure cookies, CSP, HSTS, JWT, CSRF, stored/reflected XSS
- Prebuilt for CI, scanners, and education

---

## 📄 License

MIT

---

## 🔥 Credits

Created by [@SeanCarroll](https://github.com/YOUR_USERNAME) to help push the limits of dynamic application security testing.
