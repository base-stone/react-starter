import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <Suspense fallback={<div></div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)
