# 📁 FileShare - Cloud-Based File Sharing Platform

A modern file sharing web application that allows users to upload files to Cloudinary and generate shareable download links. Built with Node.js, Express, MongoDB, and Cloudinary.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

## ✨ Features

- **📤 File Uploads** - Drag and drop file uploads with progress indicators
- **☁️ Cloud Storage** - Files stored securely on Cloudinary CDN
- **📥 Force Downloads** - Files download instead of opening in browser
- **🔗 Shareable Links** - Generate unique URLs for file sharing
- **📊 Metadata Storage** - File information stored in MongoDB
- **🎨 Responsive UI** - Clean interface built with EJS templates

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/file-share-app.git
   cd file-share-app




 

## file-share-app architecture
├── backend/
│   ├── config/
│   │   └── cloudinary.js      # Cloudinary configuration
│   ├── controllers/
│   │   └── uploadController.js # Business logic
│   ├── database/
│   │   └── db.js              # MongoDB connection
│   ├── middleware/
│   │   └── upload.js          # Multer file handling
│   ├── models/
│   │   └── fileModel.js       # MongoDB schema
│   └── routes/
│       └── api.js             # API routes
├── frontend/
│   ├── views/
│   │   └── index.ejs          # Main view
│   └── public/                # Static assets
├── .env                       # Environment variables
└── index.js                   # Main server file


