import { Props } from '../../../dtos/LayoutsDto'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function DefautLayouts({ children }: Props) {
  return (
    <div className="tw-flex tw-w-full">
      <Sidebar />
      <div className="tw-w-full">
        <Header />
        <div className="tw-px-[70px]">{children}</div>
      </div>
    </div>
  )
}

export default DefautLayouts
