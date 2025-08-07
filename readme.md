
---

# MindCare Mini

## Project Description
**MindCare Mini** is a friendly AI-powered wellness agent designed to offer supportive and encouraging suggestions based on how you're feeling. This mini-agent provides a safe space to express your emotions and receive thoughtful, actionable tips for your well-being. It's a simple, accessible tool for a quick moment of reflection and support.

---

## Features
- **Express Yourself:** Simple text area to describe your current feelings.
- **AI-Powered Suggestions:** Personalized, supportive suggestions powered by the Google Gemini 1.5 Flash model.
- **Responsive Design:** Clean, modern UI built with Tailwind CSS, looks great on any device.
- **Secure Architecture:** Gemini API key is securely handled by a Vercel Serverless Function and never exposed to client-side code.

---

## Technologies Used

### Frontend
- **HTML:** Core structure of the webpage.
- **CSS (Tailwind CSS):** Responsive and modern styling.
- **JavaScript:** Manages user interactions and communicates with the backend API.

### Backend
- **Vercel Serverless Functions:** Secure backend logic and API key protection.
- **Node.js:** Runtime environment for serverless functions.
- **Google Gemini API:** Provides AI-powered suggestions.

### Deployment & Version Control
- **GitHub:** Version control.
- **Vercel:** Hosting and deployment for frontend and serverless functions.

---

## How to Run Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```

2. **Install Dependencies:**  
   - Frontend dependencies are included via CDN.
   - Backend dependencies are managed by Vercel.

3. **Set Up Environment Variables:**
   - Create a `.env` file in the root of your project.
   - Add your Google Gemini API key:
     ```
     GEMINI_API_KEY=your_gemini_api_key_here
     ```

4. **Run the Project:**
   - Install Vercel CLI if needed:
     ```bash
     npm install -g vercel
     ```
   - Start the local development server:
     ```bash
     vercel dev
     ```
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---
