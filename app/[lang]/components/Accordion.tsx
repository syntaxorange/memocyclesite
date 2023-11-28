'use client'
import { useState } from 'react'
import { Faq } from "../interfaces/Dictionary"

export default function Accordion({ faqData }: { faqData: Faq[] }) {
  const initialArray = Array(faqData.length)
  const [openState, setOpenState] = useState(initialArray.fill(true))

  function toggleItem(index: number): void {
    const nextOpenState = openState.map((v, i) => {
      if (i === index) {
        return !openState[index]
      } else {
        return v
      }
    });
    setOpenState(nextOpenState)
  }
  
  return (
    <>
      {faqData.map((data, index) => (
        <div className={`${index === faqData.length - 1 ? '' : 'mb-3'}`} key={data.id}>
          <div 
            className="flex items-center justify-between mb-3 px-4 py-2 text-sm bg-[#e5d9ff] hover:bg-[#d8c7fe] rounded-md cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <div className="font-medium select-none text-[#331B68]">{data.title}</div>
            <span className="material-icons-outlined select-none !text-xl !leading-none text-[#8677a8]">
              {openState[index] ? 'expand_more' : 'expand_less'}
            </span> 
          </div>
          <div className={`text-sm text-gray-600 pl-4 ${openState[index] ? '' : 'hidden'}`}>{data.description}</div>
        </div>
      ))}
    </>
  )
}