import { Button } from 'flowbite-react';
interface PropType {
    children: string;
}

export default function ButtonElem(props: PropType) {
    return (
      <div>
        <Button>Click me</Button>
      </div>
    );
  }
  