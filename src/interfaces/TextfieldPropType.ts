interface TextfieldPropType {
    value?: string;
    labelValue?:string;
    placeholder?: string;
    htmlfor: string;
    id: string;
    type:string;
    elem?:React.RefObject<HTMLInputElement>;
    onChangeValue?: (value:string) => void;
}

export default TextfieldPropType;