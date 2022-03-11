import React from 'react';

export class FormElemnts extends React.Component<FormElementsProps, FormElemntsState>{
    constructor (props: FormElemntsProps){
        super(props);

        this.state = {
            inputValue: 'test',
            textareaValue: 'textarea',
            selectValue: 'guava'
        }
    }

    handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {value, name} = event.currentTarget;
        
        this.setState({
            [name]: value,
        } as unknown as FormElemntsState);
    }

    render(){
        const {inputValue,textareaValue,selectValue} = this.state;
        return(
            <form onSubmit={(event) => event?.preventDefault()}>
                Input: <input defaultValue={inputValue} name="myInput" />
                <br />
                Textarea: <textarea defaultValue={textareaValue}  name = "myTextarea" />
                <br />
                Select: <select defaultValue={selectValue} name = 'mySelect'>
                    <option value="mango">Mango</option>
                    <option value="apple">Aple</option>
                    <option value="orange">Orange</option>
                    <option value="guava">Guava</option>
                </select>
                <br />
                <button>Submit</button>
            </form>
        )
    }
}