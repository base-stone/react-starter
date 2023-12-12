import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './contact.module.scss'

const Contact = memo(() => {
  const navigate = useNavigate()
  return (
    <div className={style['contact']}>
      <span onClick={() => navigate('/', { replace: true })}>Home1</span>
      <span style={{padding: 10}}>Contact1</span>
    </div>
  )
})

export default Contact
