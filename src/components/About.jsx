import React from 'react'

function About() {

  const handleSubmit = async() => {
    const fetch = await fetch(`https://api.github.com/users/madhavpatel236`)
    const json = await fetch.json;
    console.log(json)
  }
  return (
    <div className='pt-20'>
      <div>
        about
        {/* {handleSubmit} */}
      </div>
    </div>
  )
}

export default About