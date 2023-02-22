import { useState } from 'react'
import './App.css'
import data from './data.json'


const MainBox = ({ children, title }) => <div className='flex w-1/5 text-center border-slate-500 border'>
<h2>{title}</h2>
  {children}
</div>

function App() {

  return (
    <div className="App">
      <div className='flex flex-col m-auto items-center h-screen space-x-2 space-y-2'>
        <div className=' h-10 border'>header</div>
        <div className=' h-10 border'>search</div>
        <div className='flex-row flex grow items-center w-screen place-content-evenly h-3/4	border'>

          <MainBox title={"charactistics"}>
            
          </MainBox>
          <MainBox title={"skills"}>
            
          </MainBox>
          <MainBox title={"advanced skills"}>
            
          </MainBox>
          <MainBox title={"talents"}>
            
          </MainBox>

        </div>
        <div className='h-10 border' >footer</div>
      </div>
    </div>
  )
}

export default App
