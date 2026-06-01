type Props = {
  expression: string,
  currentNumber: string
}

const Display = ({ expression, currentNumber }: Props) => {
  return(
    <>
    <div>{expression}</div>
    <div>{currentNumber}</div>
    </>
  )
}

export default Display