import { useUser } from '../features/authentication/useUser.js'
import Spinner from './Spinner.jsx'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser()

  // 2. If the user is not authenticated, redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/login')
    }
  }, [isAuthenticated, isLoading, navigate])

  // 3. While the user is loading, show a loading spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  // 4. If the user is authenticated, render the app layout
  if (isAuthenticated) return children
}

export default ProtectedRoute
