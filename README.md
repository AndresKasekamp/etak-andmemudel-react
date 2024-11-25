# 🗺️➡️ etak-andmemudel-frontend

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)


# 📚 Sissejuhatus

Genereerib ETAK andmemudelile front-endi. Kasutab back-endi abil loodud JSON faile. Näitena on jsonid kaasa pandud, mida ei uuendata. Installides läbi npmi kasutab Vite serverit, Docker kasutab nginx-i.

Kaks võimalust käivitamiseks:

- npm (ja node)
- Docker

# Installation

## 📦 npm

```bash
npm --version
```

1) Clone repo from GitLab to local directory:

```bash
git clone https://gitlab.sise.envir.ee/etak/andmemudel-v2/etak-andmemudel-frontend.git
```

2) Go to project directory:

```bash
cd etak-andmemudel-frontend
```

3) Install the packages:

```bash
npm install
```

4) Build the app:

```bash
npm run build
```

5) Preview the app:

```bash
npm run preview
```

Optionally start the dev server:

```bash
npm run dev
```

## 🐳 Docker

```bash
docker --version
```

3) Run docker build

```bash
docker build -t etak-andmemudel-frontend .
```

4) Docker run

Set to port 4173 on the host. Go to **localhost:4173**.

```bash
docker run -d -p 4173:4173 etak-andmemudel-frontend
```
