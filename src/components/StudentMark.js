import StudentLanguage from './StudentLanguage'
import Card from './Card'
function StudentMark(data) {
  function click() {
    console.log('cliked')
  }
  return (
    <Card className="StudentMark">
      <h2>{data.subject}</h2>
      <StudentLanguage lang={data.lang} />
    </Card>
  )
}

export default StudentMark
