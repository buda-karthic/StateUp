import React, {useState} from 'react'

function StudentNewMarksForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')

  const getFormDataTitle = event => {
    setEnteredTitle(event.target.value)
  }
  const getFormDataDate = event => {
    setEnteredDate(event.target.value)
  }
  const getFormDataAmount = event => {
    setEnteredAmount(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()
    const newExp = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onsubmitform(newExp)
    setEnteredTitle('')
    setEnteredDate('')
    setEnteredAmount('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="fields">
        <input
          type="text"
          onChange={getFormDataTitle}
          placeholder="Enter Name"
          value={enteredTitle}
        />
      </div>
      <div className="fields">
        <input
          type="date"
          onChange={getFormDataDate}
          placeholder="Enter Date"
          value={enteredDate}
        />
      </div>
      <div className="fields">
        <input
          type="number"
          onChange={getFormDataAmount}
          placeholder="Enter Amount"
          value={enteredAmount}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  )
}

export default StudentNewMarksForm
