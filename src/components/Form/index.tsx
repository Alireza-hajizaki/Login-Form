import { Checkbox, Label } from 'flowbite-react';
import { useRef, useState } from 'react';
import ButtonElem from '../Button';
import Textfield from '../Textfield';
import Input from '../Input';
import Person from '../../interfaces/Person';


export default function FormElem() {

  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const[inputValue,setInputValue] = useState("")
  const[user,setUser] = useState<Person | null>(null)


  //by Ref
  const handleClick = () => {
    if (emailRef.current && passRef.current){
        const newUser = {
          username : inputValue,
          email: emailRef.current.value,
          password : passRef.current.value
        }
        setUser(newUser)
        localStorage.setItem('user' , JSON.stringify(newUser))
        console.log(user);  
      }
  }

//by onChange
  const onChangeStatus=(newValue:string) => {
    setInputValue(newValue)
}


  return (
    <div>
      <form className="flex max-w-md flex-col gap-4 w-[400px]">
        <Input onChangeValue={onChangeStatus} labelValue='UserName' value={inputValue} id='name' htmlfor='name' type='text'/>
        <Textfield elem={emailRef} value='Your Email' id='email' htmlfor='email' type='email' placeholder="name@flowbite.com"/>
        <Textfield elem={passRef} value='Your Password' id='password1' htmlfor='password1' type='password'/>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <ButtonElem func={handleClick} />
    </form>
    </div>
  )
}
