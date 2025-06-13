import type React from 'react'

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'medium' | 'large'
}

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
    />
  )
}

export default Button
