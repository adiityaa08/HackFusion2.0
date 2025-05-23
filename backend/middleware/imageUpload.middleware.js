import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinaryConfig.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params : {
        folder: "applications",
        format: async (req, file) => file.mimetype.split("/")[1], 
        public_id: (req, file) => file.originalname.split(".")[0] + "-" + Date.now()
    }
});

const upload = multer({ storage })
export default upload;