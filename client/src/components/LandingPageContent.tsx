import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const LandingPageContent = () => {
  return (
    <LandingPageContainer>

            <LandingPageImage src='assets/landing-image.png' />

            <LandingPageText>Keep Track Of Your Future</LandingPageText>

    </LandingPageContainer>
  )
}


const LandingPageContainer = styled.div`
    ${tw`
    w-full
    h-full
    flex
    justify-evenly
    items-center
    `}
`




const LandingPageText = styled.h1`

${tw`
text-3xl
font-bold
`}

`

const LandingPageImage= styled.img`

${tw`
w-60
h-60
`}

`
export default LandingPageContent