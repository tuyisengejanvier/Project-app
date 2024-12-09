
import Button from "../components/Button"
import Input from "../components/Input"
const Type = () => {
  return (
    <div className="w-[20%] bg-gray-400 shadow-md  rounded-md p-4 m-auto flex-wrap justfily-center items-center">
        <h1 className="font-bold object-top text-slate-800">Login</h1>
        <div>
            <Input/>
        </div>
        <div className="flex space-x-4">
            <Button bgColor={`bg-blue-500  object-bottom hover:bg-red-600 `}btnText={`Submit`}/>
        </div>
    </div>
  )
}

export default Type