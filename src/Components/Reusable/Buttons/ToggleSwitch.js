
const ToggleSwitch = ({ text, val, action }) => {

    function updateValue(eve) {
        action(eve.target.value)
    }
    return (
        <div style={{ 'margin': '10px' }}>
            <label className="switch">
                <input type="checkbox" checked={val} onChange={updateValue} />
                <span className="slider round"></span>
            </label>
            <h3 className="toggle-text">{text || 'Toggle switch text'}</h3>
        </div>
    );
};

export default ToggleSwitch;
