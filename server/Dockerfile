# ใช้ Node.js เป็น Base Image
FROM node:22-slim

# กำหนด Working Directory ใน Container
WORKDIR /app

# คัดลอก package.json และ pnpm-lock.yaml (หรือตามที่คุณใช้) ไปยัง Container
COPY package.json pnpm-lock.yaml ./

# ติดตั้ง pnpm
RUN npm install -g pnpm

# ติดตั้ง dependencies โดยใช้ pnpm
RUN pnpm install

# คัดลอกไฟล์ทั้งหมดในโปรเจกต์ไปยัง Container
COPY . .

# สร้างโปรเจกต์ NestJS
RUN pnpm build

# เปิด port ที่ใช้งาน (เช่น port 3000)
EXPOSE 3000

# คำสั่งสำหรับรันโปรเจกต์
CMD ["pnpm", "start"]
