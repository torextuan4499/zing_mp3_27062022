import classNames from 'classnames'
import { ReactNode, useState } from 'react'
import AdvertBox from '../../../General/AdvertBox'
import {
  BsPersonSquare,
  BsDisc,
  BsFillChatQuoteFill,
  BsReverseLayoutTextSidebarReverse,
  BsPlayCircle,
  BsStar,
} from 'react-icons/bs'
import { IoRadioOutline } from 'react-icons/io5'
import { FiMusic } from 'react-icons/fi'
import { AiOutlineAppstore } from 'react-icons/ai'

interface navigationSidebarDto {
  id: number
  icon?: ReactNode
  title?: string
  side?: string | null
  playIcon?: boolean
}

const navigationsSidebar: navigationSidebarDto[] = [
  {
    id: 1,
    icon: (
      <BsPersonSquare className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: 'Cá nhân',
    side: null,
    playIcon: false,
  },
  {
    id: 2,
    icon: <BsDisc className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />,
    title: 'Khám phá',
    side: null,
    playIcon: false,
  },
  {
    id: 3,
    icon: (
      <BsFillChatQuoteFill className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: '#zingchart',
    side: null,
    playIcon: true,
  },
  {
    id: 4,
    icon: (
      <IoRadioOutline className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: 'Radio',
    side: 'LIVE',
    playIcon: true,
  },
  {
    id: 5,
    icon: (
      <BsReverseLayoutTextSidebarReverse className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: 'Theo Dõi',
    side: null,
    playIcon: false,
  },
]

const belowNavSidebars: navigationSidebarDto[] = [
  {
    id: 6,
    icon: <FiMusic className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />,
    title: 'Nhạc Mới',
    side: null,
    playIcon: true,
  },
  {
    id: 7,
    icon: (
      <AiOutlineAppstore className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: 'Thể Loại',
    side: null,
    playIcon: false,
  },
  {
    id: 8,
    icon: <BsStar className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />,
    title: 'Top 100',
    side: null,
    playIcon: false,
  },
  {
    id: 9,
    icon: (
      <IoRadioOutline className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: 'MV',
    side: null,
    playIcon: false,
  },
]

function SideBar() {
  const [navActivationIdex, setNavActivationIndex] = useState<number>(2)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <div className="bg-theme-sidebar w-60 h-screen shrink-0">
      <div className="h-[70px] flex items-center pl-[28px] pr-[25px]">
        <img
          className="w-[120px] cursor-pointer"
          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
        />
      </div>
      <div>
        {navigationsSidebar.map((navigation: navigationSidebarDto) => {
          return (
            <div
              className={classNames(
                'border-l-[3px] text-theme-navigation px-6 flex items-center justify-between cursor-pointer py-2 hover:text-theme-primary border-l-transparent',
                {
                  'border-l-theme-active bg-theme-active text-theme-primary':
                    navigation.id === navActivationIdex,
                },
              )}
              key={navigation.id}
              onClick={() => setNavActivationIndex(navigation.id)}
              onMouseOver={() => setHoverIndex(navigation.id)}
              onMouseOut={() => setHoverIndex(null)}
            >
              <div className="flex flex-grow-1 items-center">
                {navigation.icon}
                <p className="font-semibold text-sm">{navigation.title}</p>
                {navigation.side && (
                  <span className="text-theme-primary text-[8px] px-[6px] pt-[2px] pb-[1px] bg-[#ff0a0a] rounded ml-2 font-semibold tracking-widest">
                    {navigation.side}
                  </span>
                )}
              </div>
              {navigation.playIcon && hoverIndex === navigation.id && (
                <BsPlayCircle className="text-theme-primary text-lg font-semibold hover:opacity-80" />
              )}
            </div>
          )
        })}
      </div>
      <div className="border-b-theme-separate border-b-[1px] mx-5 mt-5 mb-2" />
      <div className="relative h-[246px] overflow-hidden hover:display-scrollbar">
        {belowNavSidebars.map((navigation: navigationSidebarDto) => {
          return (
            <div
              className={classNames(
                'border-l-[3px] text-theme-navigation px-6 flex items-center justify-between cursor-pointer py-2 hover:text-theme-primary border-l-transparent',
                {
                  'border-l-theme-active bg-theme-active text-theme-primary':
                    navigation.id === navActivationIdex,
                },
              )}
              key={navigation.id}
              onClick={() => setNavActivationIndex(navigation.id)}
              onMouseOver={() => setHoverIndex(navigation.id)}
              onMouseOut={() => setHoverIndex(null)}
            >
              <div className="flex flex-grow-1 items-center">
                {navigation.icon}
                <p className="font-semibold text-sm">{navigation.title}</p>
                {navigation.side && (
                  <span className="text-theme-primary text-[8px] px-[6px] pt-[2px] pb-[1px] bg-[#ff0a0a] rounded ml-2 font-semibold tracking-widest">
                    {navigation.side}
                  </span>
                )}
              </div>
              {navigation.playIcon && hoverIndex === navigation.id && (
                <BsPlayCircle className="text-theme-primary text-lg font-semibold hover:opacity-80" />
              )}
            </div>
          )
        })}
        <AdvertBox
          content="Đăng nhập để khám phá playlist riêng dành cho bạn"
          isSignInBtn
          btnContent="Đăng Nhập"
        />
        {/* <AdvertBox content="Nghe nhạc không quảng cáo cùng kho nhạc VIP" btnContent="Đăng Nhập" /> */}
      </div>
    </div>
  )
}

export default SideBar
