import React from 'react'

interface SubmitButtonProps {
  onclick: () => void;
  status: string | null
}

const SubmitButton: React.FC<SubmitButtonProps> = ({onclick, status}) => {
  return (
    <input
      type='submit'
      onClick={onclick}
      className={`${status === null ? "bg-black" : "bg-orange-200 pointer-events-none"} text-white py-4 px-20 sm:w-fit w-full text-[20px] rounded-sm mt-10 cursor-pointer hover:bg-black-500`}
      disabled={status === null ? false : true}
      value={status === null ? "Submit" : "Submitting..."}
    />
  )
}

export default SubmitButton