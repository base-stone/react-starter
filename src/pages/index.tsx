import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = memo(() => {
  const navigate = useNavigate()
  return (
    <div>
      <span>Home</span>
      <span style={{padding: 10}} onClick={() => navigate('/contact', { replace: true })}>Contact</span>
    </div>
  )
})

export default Home
