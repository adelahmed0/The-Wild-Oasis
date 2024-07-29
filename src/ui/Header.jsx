import styled from 'styled-components'
import HeaderMenu from './HeaderMenu.jsx'
import UserAvatar from '../features/authentication/UserAvatar.jsx'
import ChangeLangToggle from './ChangeLangToggle.jsx'

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
      <ChangeLangToggle />
    </StyledHeader>
  )
}

export default Header
