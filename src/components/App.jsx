import useUpdatingClock from 'hooks/useUpdatingClock'
import StudentMark from './StudentMark'
import StudentNewMarks from './StudentNewMarks'

export default function App() {
  const la = 'Arun'
  const la1 = '180'

  const studentDetail = [
    {
      Name: 'Arun',
      Marks: 180,
    },
    {
      Name: 'Vijay',
      Marks: 160,
    },
  ]

  const onNewMark = funcData => {
    console.log(funcData)
  }

  return (
    <div className="Marks">
      <StudentNewMarks onAdding={onNewMark} />
      <StudentMark subject={studentDetail[0].Name} lang={la1} />
      <StudentMark subject={studentDetail[1].Name} lang={la1} />
    </div>
  )
}
