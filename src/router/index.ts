import { createBrowserRouter } from 'react-router-dom'
const modules = import.meta.glob('../router/*.tsx', { eager: true, import: 'default' })
const routerList: any[] = []
Object.values(modules).forEach((item: any) => {
  routerList.push(...item)
})

export default createBrowserRouter(routerList)
