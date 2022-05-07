import { useField } from "formik";

const SwitchField = (props) => {
    const [field] = useField(props)
    return (
        <label className="flex items-center justify-end cursor-pointer relative font-semibold">
            <span className="mr-3 text-content whitespace-nowrap truncate">{props.label}</span>
            <input type="checkbox" checked={field.value} {...field} {...props} className="sr-only" />
            <div className="toggle-bg bg-gray-300 border-2 border-gray-300 h-6 w-11 rounded-full disabled:opacity-60"></div>
        </label>
    )
}

export default SwitchField