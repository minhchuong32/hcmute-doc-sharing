backend/
├── controllers/
│   ├── authController.js
│   └── documentController.js
├── models/
│   ├── User.js
│   └── Document.js
├── routes/
│   ├── authRoutes.js
│   └── documentRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── uploads/ (tùy chọn nếu lưu file local)
├── .env
├── server.js
└── package.json

## BE 
# Tạo folder backend và khởi tạo project
mkdir student-docs-portal
cd student-docs-portal
mkdir backend
cd backend
npm init -y

# Cài đặt các gói cần thiết
npm install express mongoose cors dotenv
npm install nodemon --save-dev

# Cấu trúc thư mục
mkdir config controllers models routes
touch server.js .env

# Thêm vào package.json
# "scripts": { "start": "nodemon server.js" }

# Tạo file .env và thêm
# PORT=5000
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
