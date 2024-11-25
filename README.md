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

## 📜 Code overview 
<table id="scc-table">
        <thead><tr>
                <th>Language</th>
                <th>Files</th>
                <th>Lines</th>
                <th>Blank</th>
                <th>Comment</th>
                <th>Code</th>
                <th>Complexity</th>
                <th>Bytes</th>
        </tr></thead>
        <tbody><tr>
                <th>TypeScript</th>
                <th>38</th>
                <th>1727</th>
                <th>214</th>
                <th>51</th>
                <th>1462</th>
                <th>80</th>
                <th>46771</th>
        </tr><tr>
                <th>JSON</th>
                <th>11</th>
                <th>11718</th>
                <th>4</th>
                <th>0</th>
                <th>11714</th>
                <th>0</th>
                <th>388250</th>
        </tr><tr>
                <th>SVG</th>
                <th>6</th>
                <th>315</th>
                <th>0</th>
                <th>0</th>
                <th>315</th>
                <th>0</th>
                <th>28142</th>
        </tr><tr>
                <th>CSS</th>
                <th>2</th>
                <th>40</th>
                <th>9</th>
                <th>1</th>
                <th>30</th>
                <th>0</th>
                <th>720</th>
        </tr><tr>
                <th>Docker ignore</th>
                <th>1</th>
                <th>11</th>
                <th>0</th>
                <th>0</th>
                <th>11</th>
                <th>0</th>
                <th>98</th>
        </tr><tr>
                <th>Dockerfile</th>
                <th>1</th>
                <th>19</th>
                <th>9</th>
                <th>0</th>
                <th>10</th>
                <th>1</th>
                <th>289</th>
        </tr><tr>
                <th>HTML</th>
                <th>1</th>
                <th>13</th>
                <th>0</th>
                <th>0</th>
                <th>13</th>
                <th>0</th>
                <th>377</th>
        </tr><tr>
                <th>JavaScript</th>
                <th>1</th>
                <th>36</th>
                <th>1</th>
                <th>24</th>
                <th>11</th>
                <th>0</th>
                <th>1022</th>
        </tr><tr>
                <th>License</th>
                <th>1</th>
                <th>21</th>
                <th>4</th>
                <th>0</th>
                <th>17</th>
                <th>0</th>
                <th>1065</th>
        </tr><tr>
                <th>Markdown</th>
                <th>1</th>
                <th>82</th>
                <th>28</th>
                <th>0</th>
                <th>54</th>
                <th>0</th>
                <th>1737</th>
        </tr><tr>
                <th>TypeScript Typings</th>
                <th>1</th>
                <th>1</th>
                <th>0</th>
                <th>1</th>
                <th>0</th>
                <th>0</th>
                <th>38</th>
        </tr><tr>
                <th>gitignore</th>
                <th>1</th>
                <th>24</th>
                <th>2</th>
                <th>2</th>
                <th>20</th>
                <th>0</th>
                <th>253</th>
        </tr></tbody>
        <tfoot><tr>
                <th>Total</th>
                <th>65</th>
                <th>14007</th>
                <th>271</th>
                <th>79</th>
                <th>13657</th>
                <th>81</th>
        <th>468762</th>
        </tr></tfoot>
        </table>