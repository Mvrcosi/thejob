import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const MainContent: React.FC = () => {
  return (
    <MainContentContainer>
        <SpotlightContainer>

        </SpotlightContainer>
    </MainContentContainer>
  )
}


const SpotlightContainer = styled.div`
${tw`

  bg-white
  w-11/12
  h-1/4
  m-auto
  mt-6
  rounded
  drop-shadow-md 

`}

`

const MainContentContainer = styled.div`
flex: 0.8;
`

export default MainContent