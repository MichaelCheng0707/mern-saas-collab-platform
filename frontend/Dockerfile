FROM node:18

WORKDIR /app

# 複製 package.json 文件
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製所有源代碼
COPY . .

# 暴露 Vite 開發服務器端口
EXPOSE 5173

# 啟動 Vite 開發服務器，綁定到所有網絡接口
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]