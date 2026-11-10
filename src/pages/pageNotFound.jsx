import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
export default function pageNotFound() {
  return (
   <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-extrabold text-brand-400">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">This page doesn't exist</h1>
      <p className="mt-2 text-slate-400">The link may be broken, or the page may have moved.</p>
      <Link to="/" className="mt-8">
        <Button className="bg-brand-600 hover:bg-brand-700">Back to home</Button>
      </Link>
    </div>
  )
}
