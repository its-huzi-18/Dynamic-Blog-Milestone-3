import React from 'react'
import AuthorCard from './component/Author';
import Mega from './component/Mega';
import Feature from './component/Feature';

function Home() {
  return (
    <div>
      <Feature />
      <Mega />
<AuthorCard />
    </div>
  )
}

export default Home;