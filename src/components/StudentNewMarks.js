import StudentNewMarksForm from './StudentNewMarksForm'

function StudentNewMarks(props) {
  const onsubmitformHandler = enteredFormDetails => {
    // const newExp1 = {
    //   ...enteredFormDetails,
    //   id: Math.random().toString(),
    //   text: 'TestString',
    // }

    props.onAdding(enteredFormDetails)
  }

  return <StudentNewMarksForm onsubmitform={onsubmitformHandler} />
}

export default StudentNewMarks
