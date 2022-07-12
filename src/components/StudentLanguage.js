import React, {useState} from 'react'

function StudentLanguage(data1) {
  const [lang, setLang] = useState(data1.lang)
  function useStates() {
    setLang('German')
  }
  console.log(data1)
  return (
    <div>
      <p>{lang}</p>
      <button onClick={useStates}>click</button>
    </div>
  )
}

export default StudentLanguage
