import useUpdatingClock from 'hooks/useUpdatingClock'
import StudentMark from './StudentMark'
import StudentNewMarks from './StudentNewMarks'

export default function App() {
  const la = 'English'
  const la1 = 'Frenchk'

  const onNewMark = funcData => {
    console.log(funcData)
  }

  return (
    <div className="Marks">
      <StudentNewMarks onAdding={onNewMark} />
      <StudentMark subject={la} lang={la1} />
      <StudentMark subject={la} lang={la1} />
    </div>
  )
}
