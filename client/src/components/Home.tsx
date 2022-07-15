import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import LandingPageContent from './LandingPageContent'
import Navbar from './Navbar'


const Home: React.FC = () => {
  return (
    <HomePageContainer>
        <Navbar />
        <LandingPageContent />
    </HomePageContainer>
  )
}

const HomePageContainer = styled.div`
    ${tw`
    h-screen	
    w-screen	
    `}
`
export default Home