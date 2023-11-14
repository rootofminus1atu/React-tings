import { PropsWithChildren, ButtonHTMLAttributes } from 'react'
import { AuthContext, useSafeContext } from '../RootLayout';

type LoginButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;


export default function LoginButton({ children, ...props }: LoginButtonProps ) {
  const { login } = useSafeContext(AuthContext)

  return (
    <button {...props} onClick={login}>
      {children}
    </button>
  )
}
