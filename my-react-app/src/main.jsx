import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppLesson1 from './Lesson-1-Basics/AppLesson1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLesson1 />
  </StrictMode>,
)
