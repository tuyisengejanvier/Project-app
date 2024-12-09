
const Button = ({bgColor, btnText}) => {
  return (
    <div>
        <button className={`${bgColor} p-4 rounded-md text-white d-center`}>{ btnText}</button> 
    </div>
  )
}

export default Button