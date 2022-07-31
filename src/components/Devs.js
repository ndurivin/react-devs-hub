import React from 'react'
// import DevCard from './DevCard';
import Search from './Search';
import DevData from './data/data.json';

const Devs = () => {
  return (
    <div className="container justify-content-center">
      <h2 className="text-center py-4">Featured Developers</h2>
      <br/>
      <Search placeholder="Search for dev by language..." data={DevData}/>
      <br/>
      
        
      {/* <DevCard /> */}
    </div>
  )
}

export default Devs;
