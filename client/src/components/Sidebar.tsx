import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'


const Sidebar = () => {
  return (
    <SideBarContainer>
      <Paper>
        
      </Paper>
    </SideBarContainer>
  )
}


const Paper = styled.div`
${tw`
bg-white
w-10/12
h-5/6
m-auto
rounded
drop-shadow-2xl
`}

`



const SideBarContainer = styled.div`
flex: 0.2;

`

export default Sidebar