import { useState } from "react"
import Button from "./components/Button"
import Display from "./components/Display"

function App() {
  const [previousValue, setPreviousValue] = useState("")
  const [operator, setOperator] = useState("")
  const [current, setCurrent] = useState("")
  const [displayExpression, setDisplayExpression] = useState("")

  const buttons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "x", "÷", "C", ".", "=" ]

  const handleNumber = (num: string) => {
    setCurrent(num)
    setDisplayExpression(displayExpression + num)
  }

  const handleOperator = (op: string) => {
  if (previousValue !== "" && operator !== "" && current !== "") {
    let result = ""
    switch (operator) {
      case "+": result = String(parseFloat(previousValue) + parseFloat(current)); break
      case "-": result = String(parseFloat(previousValue) - parseFloat(current)); break
      case "x": result = String(parseFloat(previousValue) * parseFloat(current)); break
      case "÷": result = String(parseFloat(previousValue) / parseFloat(current)); break
    }
    setPreviousValue(result)
  } else {
    setPreviousValue(current)
  }
  setOperator(op)
  setCurrent("")
  setDisplayExpression(displayExpression + op)
}

    const handleClear = () => {
    setPreviousValue("")
    setOperator("")
    setCurrent("")
    setDisplayExpression("")
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
        setOperator("")
        setPreviousValue("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className=" bg-violet-900 text-orange-400 p-4">
        <Display expression={displayExpression} currentNumber={current}/>
        <div className="grid grid-cols-4 gap-2 ">
        {buttons.map(b => <Button key={b} label={b} onClick={() => ["+", "-", "x", "÷"].includes(b) ? handleOperator(b) : b === "C" ? handleClear() : b === "=" ? handleEquals() :handleNumber(b)} isWide={b === "="} variant={["+", "-", "x", "÷"].includes(b) ? "operator" : b === "C" ? "clear" : b === "=" ? "equals" : "number" }/>)}
        </div>
      </div>
    </div>
  )
}

export default App