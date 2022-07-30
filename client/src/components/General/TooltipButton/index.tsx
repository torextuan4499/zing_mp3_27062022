import { ReactNode, useState, useEffect } from 'react'

interface TooltipButtonDto {
  icon?: ReactNode
  describe?: string
  buttonIndex: number
}

function TooltipButton({ icon, describe, buttonIndex }: TooltipButtonDto) {
  const [buttonHoverIndex, setButtonHoverIndex] = useState(-1)

  useEffect(() => {
    console.log(buttonIndex)
  }, [buttonHoverIndex])

  const handleShowDescription = () => {
    setButtonHoverIndex(buttonIndex)
    console.log(buttonIndex, buttonHoverIndex)
  }

  const handleHiddenDescription = () => {
    setButtonHoverIndex(-1)
  }

  return (
    <div className="relative flex justify-center">
      <button
        onMouseOver={handleShowDescription}
        onMouseLeave={handleHiddenDescription}
        className="bg-theme-alpha hover:brightness-90 text-xl h-10 w-10 rounded-[50%] 
        ml-[10px] flex justify-center items-center text-theme-navigation"
      >
        {icon}
      </button>
      {buttonIndex === buttonHoverIndex && (
        <p
          className="text-theme-navigation absolute text-xs top-[calc(100%_+_10px)] ml-[10px] bg-[#312f2f] 
        px-2 py-1 rounded before-describe-apply whitespace-nowrap transition-opacity"
        >
          {describe}
        </p>
      )}
    </div>
  )
}

export default TooltipButton
