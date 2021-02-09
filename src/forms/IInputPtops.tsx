export interface IInputProps {
    value: string | number,
    placeholder: string,
    validators: string[],
    onBlur: (isDirty: boolean) => void;
    onChange: (value: string | number, isValid: boolean) => void,
}
