export interface IInputProps {
    value: string | number,
    validators: string[],
    onBlur: (isDirty: boolean) => void;
    onChange: (value: string | number, isValid: boolean) => void,
}
