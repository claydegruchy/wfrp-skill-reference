import { useEffect } from 'react'
import { useState, useCallback } from 'react'
import './App.css'
import data from './data.json'

// console.log(data.talents.map(s=>s.tags));


// data.advancedSkills = data.advancedSkills.map(v => ({ ...v, tags: v.tags.find(t => t.includes('tag-')) }))
// delete data.advancedSkills.tags
// data.attributes = data.attributes.map(v => ({ ...v, tags: v.tags.find(t => t.includes('tag-')) }))
// delete data.attributes.tags
// data.basicSkills = data.basicSkills.map(v => ({ ...v, tags: v.tags.find(t => t.includes('tag-')) }))
// delete data.basicSkills.tags
// data.talents = data.talents.map(v => ({ ...v, tags: v.tags.find(t => t.includes('tag-')) }))
// delete data.talents.tags
// console.log(JSON.stringify(data));


const Description = ({description})=> <div>
  {description}
</div>

const Display = ({ selectedTags, setSelectedTags, open, setOpen, target: { title, description, tags } }) => {


// useEffect(()=>{
//   setSelectedTags()
// },[selectedTags])

  const Clicker = useCallback((e) => {
    console.log("clicked",open);

    if(open == title) {
      setSelectedTags(null);
      setOpen('')
      return
    }
    setSelectedTags(tags);
    setOpen(title)
    
   }, [selectedTags, open])

  return <div
    className={`flex flex-col  ${tags == selectedTags ? "border" : ""}`}
    onClick={Clicker}  >
    <div>{title}</div>
    {open==title ?  <Description description={description}/>   : null}
  </div>
}

const MainBox = ({ title, targetData, open, setOpen,selectedTags, setSelectedTags }) => {
  
  
const Filter = (d) => {
  if(selectedTags == null) return true
 return d.tags == selectedTags 

}

  return <div className='flex h-full items-stretch w-full m-1 border-slate-500 border flex-col'>
    <h2 className='m-2 border' >{title}</h2>
    <div className=' overflow-scroll' >
      {targetData
        .filter(Filter)
        .map((d, i) => <Display key={i} {...{ selectedTags, setSelectedTags,open, setOpen }} target={d} />)}
    </div>
  </div>
}


const sorter = (input, selected) => input.reduce((acc, element) => {
  console.log(element.tags, { selected });
  if (element.tags == selected) {
    return [element, ...acc];
  }
  return [...acc, element];
}, []);

function App() {

  const [selectedTags, setSelectedTags] = useState('tag-Int')
  const [open, setOpen] = useState('')

  return (
    <div className="App text-center h-screen">
      <div className='flex flex-col p-5 h-full items-stretch space-y-2'>
        {/* <div className=' h-10 border'>header</div> */}
        <div className=' h-10 border '></div>
        <div className='flex-row flex  p-1 w-full h-full items-stretch	border'>
          <MainBox {...{ selectedTags, setSelectedTags,open, setOpen }} title={"charactistics"} targetData={data.attributes} />

          <MainBox {...{ selectedTags, setSelectedTags,open, setOpen }} title={"skills"} targetData={data.basicSkills} />

          <MainBox {...{ selectedTags, setSelectedTags,open, setOpen }} title={"advanced skills"} targetData={data.advancedSkills} />

          <MainBox {...{ selectedTags, setSelectedTags,open, setOpen }} title={"talents"} targetData={data.talents} />


        </div>
        <div className='h-10 border' >footer</div>
      </div>
    </div>
  )
}

export default App
