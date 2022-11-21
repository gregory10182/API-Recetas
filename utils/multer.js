import multer from "multer";

export function multerConfig() {
  const storage = multer.diskStorage({
    destination: "uploads",
    filename: function (req, file, cb) {
      cb(null, `${file.originalname}`);
    },
  });

  return multer({ storage: storage });
}
