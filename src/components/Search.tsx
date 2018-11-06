import * as React from 'react';
import { InputLabel } from './Input';
import classNames from 'classnames';
import { Key } from '../keys';
import './Search.css';


interface SuggestionProps {
    data: any;
    key: string | number;
    suggestionComponent: NodeProducer;
    onSubmit: (v: any) => any;
}

/**
 * Individual suggestion in a list of search suggestions.
 * @class Suggestion
 * @extends {React.Component<SuggestionProps, {}>}
 */
class Suggestion extends React.Component<SuggestionProps> {
    render() {
        const { key, data, suggestionComponent } = this.props;
       
        return (
            <div className='pa2 bl br bb b--light-blue hover-bg-light-blue'
                 onClick={this.handleClick}
                 key={key}>
                {suggestionComponent(data)}
            </div>
        );
    }

    private handleClick = (evt: any) => {
        this.props.onSubmit(this.props.data);
    }
};


interface SuggestionListProps {
    data: any[]
    suggestionComponent: (suggestion: any) => React.ReactNode;
    onSubmit: (v: any) => any;
}

/**
 * Build a suggestion list from an array of search suggestions.
 * @function SuggestionList
 * @param {SuggestionListProps} props
 */
export const SuggestionList = (props: SuggestionListProps) => {
    const { data, onSubmit, suggestionComponent } = props;
    return (
        <div className='suggestion-list-wrapper'>
            <div className='list pl0 mt0 center bg-white o-90 suggestion-list'>
                {data.map((el, i) => <Suggestion onSubmit={onSubmit} suggestionComponent={suggestionComponent} key={i} data={el} />)}
            </div>
        </div>
    );
};

/**
 *
 *
 * @interface SearchProps
 */
interface SearchProps {
    handleUpdate: (evt: any) => any;
    handleSubmit: (value: string) => any;
    callback: (value: string) => any;
    suggestions?: any[];
    label?: string;
    value: string;
    placeholder?: string;
    className?: string;
    suggestionComponent: NodeProducer;
}

interface SearchState {
    timeout?: NodeJS.Timeout | number;
    value: string;
    inFocus: boolean;
    typing: boolean;
}


/**
 * Search input with suggestion functionality.
 * @export
 * @class Search
 * @extends {React.Component<SearchProps, SearchState>}
 */
export default class Search extends React.Component<SearchProps, SearchState> {
    state = { typing: false, timeout: undefined, value: '', inFocus: false };
    private inputRef = React.createRef<HTMLInputElement>();

    render() {
        const { suggestions, suggestionComponent } = this.props;
        const classes = classNames({
            'b--black-40': !this.state.inFocus,
            'b--light-blue': this.state.inFocus,
        },
        this.props.className,
        'pa2 ba');
        return (
            <div onFocus={this.setFocus} onBlur={this.setUnFocus}>
                <div className={classes} >
                    <InputLabel>{this.props.label || 'Search...'}</InputLabel>
                    <input  ref={this.inputRef}
                            placeholder={this.props.placeholder}
                            className='input-reset input-plain'
                            type='search'
                            value={this.props.value}
                            onPaste={this.onPaste}
                            onChange={this.handleChange} />
                </div>
                {suggestions && this.state.inFocus ? <SuggestionList data={suggestions}
                                                                    suggestionComponent={suggestionComponent}
                                                                    onSubmit={this.props.handleSubmit} /> : null}
            </div>
        );
    }

    setFocus = () => {
        this.setState({ inFocus: true });
        this.doFocus();
    }

    setUnFocus = (event: any) => {
        setTimeout(() => {
            this.setState({ inFocus: false });
        }, 100);
    }

    private handleChange = (evt: any) => {
        this.props.handleUpdate(evt);
        if(evt.keyCode === Key.Enter) {
            this.props.handleSubmit(this.props.value);
            return;
        }
        if(this.state.timeout) {
            clearTimeout(this.state.timeout);
        }
        this.setState({
            typing: false,
            timeout: setTimeout(() => {
                this.props.callback(this.props.value);
            }, 250)
        });
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