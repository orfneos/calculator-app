import { useState } from "react"
import Button from "./components/Button"
import Display from "./components/Display"

function App() {
  const [previousValue, setPreviousValue] = useState("")
  const [operator, setOperator] = useState("")
  const [current, setCurrent] = useState("")

  const buttons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "x", "÷", "C", ".", "=" ]

  const handleNumber = (num: string) => {
    setCurrent(current + num)
  }

  const handleOperator = (op: string) => {
    setPreviousValue(current)
    setOperator(op)
    setCurrent("")
  }

  const handleClear = () => {
    setPreviousValue("")
    setOperator("")
    setCurrent("")
  }

  const handleEquals = () => {
    switch (operator) {
      case "+":
        setCurrent(String(parseFloat(previousValue) + parseFloat(current)))
       break
      case "-":
        setCurrent(String(parseFloat(previousValue) - parseFloat(current)))
       break
      case "x":
        setCurrent(String(parseFloat(previousValue) * parseFloat(current)))
        break
      case "÷":
        setCurrent(String(parseFloat(previousValue) / parseFloat(current)))
        break

    }
  }

  return (
    <div>
      <h1>Calculator</h1>
      <Display expression={previousValue + operator + current} currentNumber={current}/>
      {buttons.map(b => <Button key={b} label={b} onClick={() => ["+", "-", "x", "÷"].includes(b) ? handleOperator(b) : b === "C" ? handleClear() : b === "=" ? handleEquals() :handleNumber(b)} />)}
    </div>
  )
}

export default App