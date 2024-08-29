function WidthInput({ width, setWidth }: 
    { width: number, setWidth: (value: number) => void }) {
    return (
        <div>
            <label htmlFor='colorInput'>Digite uma largura: </label>
                <input
                type='text'
                id='colorInput'
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
            />
        </div>
    );
}

    export default WidthInput;