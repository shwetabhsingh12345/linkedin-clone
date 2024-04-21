const TextInput = ({label, value, onChange})=>{
    return(
        <div className="w-full">
            <div className="text-sm font-semibold">{label}</div>
            <div className="w-full">
                <input type="text"
                    className="border border-gray-800 p-3 w-full rounded-md hover:bg-gray-200 hover:border-black hover:border-2"
                    value={value}
                    onChange={onChange}
                    />
            </div>
        </div>
    )
}
export default TextInput