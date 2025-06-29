import Document from "../models/document.model.js";

const uploadDocument = async (req, res) => {
  const { title, description, subject, fileUrl } = req.body;
  const userId = req.user.id;

  if (!title || !description || !subject || !fileUrl) {
    return res
      .status(400)
      .json({ message: "Vui lòng nhập đầy đủ thông tin tài liệu" });
  }

  try {
    const doc = new Document({
      title,
      description,
      subject,
      fileUrl,
      uploadedBy: userId,
    });
    await doc.save();
    res.status(201).json({ message: "Tải tài liệu thành công", doc });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server khi upload" });
  }
};

const getAllDocuments = async (req, res) => {
  try {
    const docs = await Document.find().populate("uploadedBy", "name email");
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server" });
  }
};

export { uploadDocument, getAllDocuments };
