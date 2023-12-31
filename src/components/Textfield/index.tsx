import { Label, TextInput } from 'flowbite-react';
import TextfieldPropType from '../../interfaces/TextfieldPropType';


const Textfield:React.FC<TextfieldPropType> = ({value,placeholder,htmlfor,id,type,elem}) => {

  return (
    <div>
        <div className="mb-2 block">
          <Label
            htmlFor={htmlfor}
            value={value}
          />
        </div>
        <TextInput
          ref={elem}
          id={id}
          placeholder={placeholder}
          required
          type={type}
        />
      </div>
  )
}

export default Textfield;