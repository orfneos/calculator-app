type Props = {
  expression: string,
  currentNumber: string
}

const Display = ({ expression, currentNumber }: Props) => {
  return(
    <div className="bg-cyan-800 text-right p-8 mb-4">
      <div>{expression}</div>
      <div className="text-2xl">{currentNumber}</div>
    </div>
  )
}

export default Display