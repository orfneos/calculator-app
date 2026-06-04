type Props = {
  label: string, 
  onClick:() => void,
  isWide?: boolean
  variant?: "number" | "operator" | "clear" | "equals"
}

const Button = ({ label, onClick, isWide, variant }: Props) => {

  return(
    <button className={`${isWide ? 'col-span-2 col-start-3' : ''} ${variant === "operator" ? "bg-cyan-950" : variant === "clear" ? "bg-violet-500" : variant === "equals" ? "bg-green-400" : "bg-cyan-300"} bg-cyan-300 text-2xl text-orange-400 rounded-sm p-4`}
    onClick={onClick }>{label}
    </button>
  )
}

export default Button