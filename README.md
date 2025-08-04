An AI-Powered Portfolio Website is a modern and responsive showcase built with React and Node.js. It features an AI-powered chatbot for interactive portfolio search.

### **Live Demo**
**Frontend:** [https://ajinkyasalunkeportfolio.netlify.app](https://ajinkyasalunkeportfolio.netlify.app)

### **Features**
*   **Responsive Design:** Optimized for all devices.
*   **AI Chatbot:** An interactive assistant powered by the Gemini API.
*   **Admin Panel:** A content management system.
*   **Smooth Animations:** Enhances the user experience.
*   **Modern UI:** Incorporates glass morphism and gradient effects.
*   **Dynamic Content:** MongoDB-powered data management.

### **Tech Stack**

| Frontend | Backend |
| --- | --- |
| React 18 | Node.js |
| Tailwind CSS | Express.js |
| Vite | MongoDB |
| JavaScript ES6+ | Gemini AI API |

### **Project Structure**
```
portfolio/
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   └── App.jsx
│   └── package.json
├── backend/           # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   └── server.js
└── admin.html        # Admin panel
```

### **Getting Started**

**Prerequisites**
*   Node.js (v16+)
*   MongoDB
*   Gemini API Key

**Installation**
1.  **Clone the repository:**
    ```
    git clone https://github.com/AjinkyaSalunke22/portfolio.git
    cd portfolio
    ```
2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
3.  **Frontend Setup:**
    ```bash
    cd frontend
    npm install
    ```

**Environment Variables**
Create a `.env` file in the `backend` folder:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

**Run the Application**
*   **Backend:**
    ```bash
    cd backend
    npm start
    ```
*   **Frontend:**
    ```bash
    cd frontend
    npm run dev
    ```
