import React, {useState} from 'react'

function StudentLanguage(data1) {
  const [lang, setLang] = useState(data1.lang)
  function useStates() {
    setLang('200')
  }
  console.log(data1)
  return (
    <div>
      <p>{lang}</p>
      <button onClick={useStates}>Update</button>
    </div>
  )
}

export default StudentLanguage
