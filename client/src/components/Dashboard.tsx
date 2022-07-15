import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { gql, useQuery } from '@apollo/client';
import Sidebar from './Sidebar';
import MainContent from './MainContent';


const Dashboard: React.FC = () => {





  return (
    <DashboardContainer>

      {/* SIDE BAR */}

      <Sidebar />
      {/* CONTENT */}
      <MainContent />

    </DashboardContainer>
  )
}



const DashboardContainer = styled.div`
    background-color: #DAE0E6;

    ${tw`
    w-screen
    h-screen
    flex
    `}
`

export default Dashboard











// const USERS_QUERY = gql`

// query USERS_QUERY {
//   users {
//     name
//   }
// }
// `



//   const { loading, error, data } = useQuery(USERS_QUERY);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//   {data.users.map((user:User) => {
//     return <p>{user.name}</p>
//   })}


// interface  User {
//   name: String;
// }