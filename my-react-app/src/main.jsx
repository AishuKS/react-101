import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppLesson2 from './Lesson-2 Card Components/AppLesson2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLesson2 />
  </StrictMode>,
)
