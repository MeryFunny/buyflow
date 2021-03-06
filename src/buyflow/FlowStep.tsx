import React, { useState } from 'react';
import FromGroup from '../forms/FormGroup';
import { getDefaultFormData, getDefaultFormState, getInputComponentByType } from '../utils/form.utils';
import { IFormGroup } from '../forms/IFormGroup';
import { IFormData } from '../forms/IFormData';
import { CSS_CLASSES } from '../styles/cssClasses.contants';

interface IFlowStepProps {
    formGroupConfigs: IFormGroup[],
    onNext: (data: IFormData) => void,
}

const FlowStep: React.FC<IFlowStepProps> = ({ formGroupConfigs, onNext }) => {
    const [formData, setFormData] = useState(getDefaultFormData(formGroupConfigs));
    const [formState, setFormState] = useState(getDefaultFormState(formGroupConfigs));

    const isFormValid = () => {
        const state = Object.values(formState);
        return state.reduce((accumulator: boolean, currentValue: any) => {
            return accumulator && currentValue.isValid;
        }, true);
    };

    const getIntent = (fieldName: string) => {
        return !formState[fieldName].isValid && formState[fieldName].isDirty ? CSS_CLASSES.INTENT_DANGER : ''
    }

    const handleChange = (fieldName: string) => {
        return (value: string | number, isValid: boolean) => {
            setFormData({ ...formData, [fieldName]: value });
            setFormState({ ...formState, [fieldName]: { ...formState[fieldName], isValid } });
        };
    };

    const handleBlur = (fieldName: string) => {
        return (isDirty: boolean) => {
            setFormState({ ...formState, [fieldName]: { ...formState[fieldName], isDirty } });
        };
    };

    const renderFormGroups = () => {
        return formGroupConfigs.map((formGroup) => {
            const InputComponent = getInputComponentByType(formGroup.fieldType);
            return (
                <FromGroup label={ formGroup.label } key={ formGroup.fieldName }>
                    <InputComponent
                        intent={ getIntent(formGroup.fieldName)}
                        validators={ formGroup.validators }
                        value={ formData[formGroup.fieldName] }
                        placeholder={ formGroup.placeholder }
                        onBlur={ handleBlur(formGroup.fieldName) }
                        onChange={ handleChange(formGroup.fieldName) }
                    />
                </FromGroup>
            );
        });
    };


    return <>
        { renderFormGroups() }
        <button
            className={ `${ CSS_CLASSES.BUTTON } ${ CSS_CLASSES.BUTTON_PRIMARY }`}
            disabled={ !isFormValid() }
            onClick={ () => onNext(formData) }>
            Next
        </button>
    </>;
};

export default FlowStep;
