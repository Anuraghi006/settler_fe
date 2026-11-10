import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react'
import { LuCircleUserRound } from 'react-icons/lu'
import { clearSession, dashboardPath, getStoredUser, hasToken } from '../services/authService'

// Links shown in the navbar for each role
const roleLinks = {
  admin: [
    { label: 'Dashboard', to: '/admin' },
    { label: 'Verification', to: '/admin/providers' },
    { label: 'Moderation', to: '/admin/moderation' },
  ],
  newcomer: [
    { label: 'Dashboard', to: '/newcomer' },
    { label: 'Directory', to: '/newcomer/directory' },
    { label: 'Questions', to: '/newcomer/questions' },
  ],
  resident: [
    { label: 'Dashboard', to: '/resident' },
    { label: 'Questions', to: '/resident/questions' },
    { label: 'Events', to: '/resident/events' },
  ],
  provider: [
    { label: 'Dashboard', to: '/provider' },
    { label: 'Bookings', to: '/provider/bookings' },
    { label: 'Availability', to: '/provider/availability' },
  ],
}

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  // Re-read the session whenever the route changes
  useEffect(() => {
    setLoggedIn(hasToken())
    setUser(getStoredUser())
  }, [location.pathname])

  const handleLogout = () => {
    clearSession()
    setLoggedIn(false)
    setUser(null)
    navigate('/')
  }

  const links = loggedIn && user ? roleLinks[user.role] || [] : []
  const initials = user?.username?.charAt(0).toUpperCase() || 'U'

  return (
    <FlowbiteNavbar fluid className="border-b border-slate-800 bg-slate-900">
      <NavbarBrand as={Link} to="/">
        <span className="self-center whitespace-nowrap text-2xl font-bold tracking-tight text-white">
          Settle<span className="text-brand-400">r</span>
        </span>
      </NavbarBrand>

      <div className="flex items-center gap-3 md:order-2">
        {loggedIn && user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                rounded
                placeholderInitials={initials}
                img={user.picture || undefined}
                alt="User menu"
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm font-semibold text-white">{user.username}</span>
              <span className="block truncate text-sm text-slate-400">{user.email}</span>
              <span className="mt-1 inline-block rounded bg-brand-600/20 px-2 py-0.5 text-xs capitalize text-brand-400">
                {user.role}
              </span>
            </DropdownHeader>

            <Link to={dashboardPath(user.role)}>
              <DropdownItem>Dashboard</DropdownItem>
            </Link>
            <Link to="/profile">
              <DropdownItem>Profile and settings</DropdownItem>
            </Link>

            <DropdownDivider />

            <DropdownItem onClick={handleLogout}>Sign out</DropdownItem>
          </Dropdown>
        ) : (
          <>
            <Link to="/login">
              <Button color="gray" size="sm" className="border-slate-700">
                <LuCircleUserRound className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
                Register
              </Button>
            </Link>
          </>
        )}

        <NavbarToggle />
      </div>

      <NavbarCollapse>
        {links.map((link) => (
          <NavbarLink
            key={link.to}
            as={Link}
            to={link.to}
            active={location.pathname === link.to}
            className="text-slate-300 hover:text-white"
          >
            {link.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </FlowbiteNavbar>
  )
}

export default Navbar