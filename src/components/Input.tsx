import * as React from 'react';

interface InputLabelProps {
    children: React.ReactNode;
}

export const InputLabel = (props: InputLabelProps) => (
    <label className='db pb2'>
        <span className='tracked ttu black-40 f6'>{props.children}</span>
    </label>
);


interface InputProps {
    label: string;
    type: string;
    value: string;
    placeholder?: string;
    onChange: (evt: any) => any;
}

interface InputState {
    value: string;
    inFocus: boolean;
}

export class Input extends React.Component<InputProps, InputState> {
    state = { value: '', inFocus: false };
    private inputRef = React.createRef<HTMLInputElement>();
    render() {
        return (
            <div onClick={this.doFocus}>
                <InputLabel>{this.props.label}</InputLabel>
                <input ref={this.inputRef}
                       className='input-reset'
                       placeholder={this.props.placeholder}
                       style={{ width: '100%', border: 'none', outline: 'none', color: 'inherit', backgroundColor: '#fff', font: 'inherit', margin: 0 }}
                       type={this.props.type}
                       value={this.props.value}
                       onFocus={this.setFocus}
                       onBlur={this.setUnFocus}
                       onPaste={this.onPaste}
                       onChange={this.props.onChange} />
            </div>
        );
    }

    setFocus = () => {
        this.setState({ inFocus: true })
    }

    setUnFocus = () => {
        this.setState({ inFocus: false })
    }

    private doFocus = () => {
        const node = this.inputRef.current;
        if (node) {
            node.focus();
        }
    }

    private onPaste(evt: any) {
        const value = evt.clipboardData.getData('text');
        console.log(value);
    }
}