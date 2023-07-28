import { Button } from 'flowbite-react';
interface PropType {
  func : () => void;
}


export default function ButtonElem(props : PropType) {
    return (
      <div>
        <Button onClick= {props.func} className='w-[100%] rounded-3xl' color="success">Click me</Button>
      </div>
    );
  }
  