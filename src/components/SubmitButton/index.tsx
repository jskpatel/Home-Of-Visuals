import React from 'react'

interface SubmitButtonProps {
  onclick: () => void
}

const SubmitButton: React.FC<SubmitButtonProps> = ({onclick}) => {
  return (
    <input
      type='submit'
      onClick={onclick}
      className='bg-black text-white py-4 px-20 sm:w-fit w-full text-[20px] rounded-sm mt-10 cursor-pointer hover:bg-black-500'
      value="Submit"
    />
  )
}

export default SubmitButton