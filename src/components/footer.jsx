import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
        <p className="text-sm text-slate-400">
          &copy; {year} Settler. Helping newcomers settle in faster.
        </p>

        <nav className="flex gap-6 text-sm text-slate-400">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/login" className="hover:text-white">Login</Link>
          <Link to="/register" className="hover:text-white">Register</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer