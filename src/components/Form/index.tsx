import { Checkbox, Label } from 'flowbite-react';
import ButtonElem from '../Button';
import Textfield from '../Textfield';

export default function FormElem() {
  return (
    <div>
      <form className="flex max-w-md flex-col gap-4">
        <Textfield value='Your Email' id='email' htmlfor='email' type='email' placeholder="name@flowbite.com"/>
        <Textfield value='Your password' id='password1' htmlfor='password1' type='password'/>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <ButtonElem>
        Submit
      </ButtonElem>
    </form>
    </div>
  )
}
