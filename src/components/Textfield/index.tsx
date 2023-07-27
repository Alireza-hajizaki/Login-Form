import { Label, TextInput } from 'flowbite-react';
interface TextfieldPropType {
    value: string;
    placeholder?: string;
    htmlfor: string;
    id: string;
    type:string
}

const Textfield = (props: TextfieldPropType) => {
  return (
    <div>
        <div className="mb-2 block">
          <Label
            htmlFor={props.htmlfor}
            value={props.value}
          />
        </div>
        <TextInput
          id={props.id}
          placeholder={props.placeholder}
          required
          type={props.type}
        />
      </div>
  )
}

export default Textfield;