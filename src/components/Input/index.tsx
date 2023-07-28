import { Label, TextInput } from 'flowbite-react';
import { ChangeEvent } from 'react';
import TextfieldPropType from '../../interfaces/TextfieldPropType';

export default function Input({value,placeholder,htmlfor,id,type,elem,onChangeValue,labelValue}:TextfieldPropType) {

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChangeValue!(newValue)
      }

  return (
    <div>
        <div className="mb-2 block">
          <Label
            htmlFor={htmlfor}
            value={labelValue}
          />
        </div>
        <TextInput
          onChange={handleChange}
          ref={elem}
          id={id}
          value={value}
          placeholder={placeholder}
          required
          type={type}
        />
      </div>
  )
}
