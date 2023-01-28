import { Outlet } from 'react-router-dom'
import {
  BackgroundCover,
  BackgroundImg,
  DefaultLayoutContainer,
  Logo,
} from './styles'
import logo from '../../assets/logo-text.svg'
import backgroundImg from '../../assets/background-cover.png'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <BackgroundCover>
        <BackgroundImg src={backgroundImg} alt="" />
        <Logo src={logo} alt="" />
      </BackgroundCover>
      <Outlet />
    </DefaultLayoutContainer>
  )
}
