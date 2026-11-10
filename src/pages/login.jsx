import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Card, Label, Select, TextInput } from 'flowbite-react'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { dashboardPath, saveSession } from '../services/authService'

const roleOptions = [
  { value: 'newcomer', label: 'Newcomer' },
  { value: 'resident', label: 'Resident' },
  { value: 'provider', label: 'Provider' },
  { value: 'admin', label: 'Admin' },
]

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', role: 'newcomer' })
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend yet: store a local session with the chosen role, then go to that role's dashboard
  const startSession = (user) => {
    saveSession({ token: 'demo-token', user: { ...user, role: form.role } })
    navigate(dashboardPath(form.role))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    startSession({
      username: form.email.split('@')[0],
      email: form.email,
    })
  }

  const handleGoogle = (credentialResponse) => {
    setError('')
    try {
      // The Google credential is a signed token that contains the account's name and email
      const profile = jwtDecode(credentialResponse.credential)
      startSession({
        username: profile.name,
        email: profile.email,
        picture: profile.picture,
      })
    } catch {
      setError('Google sign-in failed. Please try again.')
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-slate-800 bg-slate-900">
        <h1 className="text-2xl font-bold text-white">Welcome back</h1>
        <p className="text-sm text-slate-400">Sign in to continue settling into your city.</p>

        {error && <Alert color="failure">{error}</Alert>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email" value="Email" className="text-slate-300" />
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="password" value="Password" className="text-slate-300" />
            <TextInput
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="role" value="Sign in as" className="text-slate-300" />
            <Select id="role" name="role" value={form.role} onChange={handleChange}>
              {roleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>

          <Button type="submit" className="bg-brand-600 hover:bg-brand-700">
            Sign in
          </Button>
        </form>

        <div className="flex items-center gap-3 text-xs uppercase text-slate-500">
          <span className="h-px flex-1 bg-slate-800" />
          or continue with
          <span className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogle}
            onError={() => setError('Google sign-in failed.')}
            theme="filled_black"
            shape="pill"
          />
        </div>

        <p className="text-center text-sm text-slate-400">
          New to Settler?{' '}
          <Link to="/register" className="font-medium text-brand-400 hover:underline">
            Create an account
          </Link>
        </p>
      </Card>
    </div>
  )
}

export default Login