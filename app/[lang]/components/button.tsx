'use client'
import { ButtonProps } from '../interfaces/ButtonProps'

export default function Button(props: ButtonProps) {
  function handleClick() {
    if (props.blank) {
      window.open(props.url);
    } else {
      window.location.href = props.url;
    }
  }
  
  return (
    <button {...props} onClick={handleClick}>
      {props.children}
    </button>
  )
}