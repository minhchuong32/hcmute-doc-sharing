import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Không có token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Token không hợp lệ" });
  }
};

// Request có gửi kèm token hay không.
// Token có hợp lệ hay không (có bị giả mạo / hết hạn không).
// Nếu hợp lệ → gắn thông tin người dùng vào req.user để sử dụng ở các route khác.

export { protect };