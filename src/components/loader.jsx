import { Spinner } from 'flowbite-react'

function Loader({ label = 'Loading...' }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 text-slate-400">
      <Spinner size="xl" color="purple" />
      <p className="text-sm">{label}</p>
    </div>
  )
}

export default Loader