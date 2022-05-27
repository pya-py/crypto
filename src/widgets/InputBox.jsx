import './input-box.css';

const InputBox = ({hint, onChange}) => {
    return <input type="text" className="input-box" placeholder={hint} onChange={onChange} />;
}
 
export default InputBox;