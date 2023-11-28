import { ReactNode } from 'react'

export interface ButtonProps {
  url: string;
  blank?: string;
  children: ReactNode;
  className: string;
}