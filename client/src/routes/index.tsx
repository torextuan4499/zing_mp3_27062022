import { RoutesDto } from '../dtos/routesDto'
import Home from '../pages/Home'
import Following from '../pages/Following'
import AboutUs from '../pages/About'

const publicRoutes: RoutesDto[] = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/about-us', component: AboutUs },
]

const privateRoutes: RoutesDto[] = []

export { publicRoutes, privateRoutes }
