import React from 'react'
import { handleScrollToMission } from '../../utils/mathods'
import arrowBottomIcon from "./../../assets/arrow-bottom.svg"

interface DownArrowIconProps {
  target: string;
}

const DownArrowIcon: React.FC<DownArrowIconProps> = ({ target }) => {
  return (
    <div className="flex items-start justify-center -mt-24 z-9 h-[60px] relative overflow-hidden">
      <span
        className='p-10 rounded-full cursor-pointer'
        onClick={() => handleScrollToMission(target)}
      >
        <img src={arrowBottomIcon} alt='Arrow icon' className='w-[50px] -mt-3 animate-bounce' />
      </span>
    </div>
  )
}

export default DownArrowIcon