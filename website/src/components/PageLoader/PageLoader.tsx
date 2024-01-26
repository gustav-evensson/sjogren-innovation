import LoadingIcon from './LoadingIcon'
import './PageLoader.css'

export default function PageLoader({ children }: { children: React.ReactNode }) {
  return (
    <>
    {children}
    <div className="loader-container fixed inset-0 bg-background grid place-items-center z-50">
      <LoadingIcon/>
    </div>
    </>
  )
}