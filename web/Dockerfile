# Step 1: ใช้ Node.js base image
FROM node:23-slim AS build

# Step 2: ตั้งค่า working directory
WORKDIR /app

# ติดตั้ง pnpm
RUN npm install -g pnpm

# Step 3: คัดลอก package.json และ package-lock.json ไปที่ container
COPY package.json package-lock.json ./

# Step 4: ติดตั้ง dependencies
RUN pnpm install

# Step 5: คัดลอกโค้ดทั้งหมดไปที่ container
COPY . .

# Step 6: Build แอป Next.js
RUN npm run build

# Step 7: สร้าง image สำหรับ production
FROM node:23-slim AS production

WORKDIR /app

# คัดลอกไฟล์ที่จำเป็นจาก stage ก่อนหน้า
COPY --from=build /app ./

# ติดตั้งเฉพาะ dependencies สำหรับ production
RUN npm install --production

# เปิดพอร์ตที่ Next.js ใช้งาน
EXPOSE 3000

# สั่งให้รันแอปพลิเคชัน
CMD ["pnpm", "start"]