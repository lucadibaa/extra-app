import { ErrorMessage, useField } from "formik"
import { ExclamationCircleIcon } from "@heroicons/react/solid"


const TextArea = ({ textareaStyle, labelClasses, label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className={`${props.inline && "flex items-center"} ${props.checkbox && 'justify-between'}`}>
        <div className="relative flex flex-col">
          <label className={labelClasses} htmlFor={field.name}>{label}</label>
          <textarea className={textareaStyle} {...field} {...props} placeholder={props.placeholder} style={{ border: meta.touched && meta.error && '1px solid var(--color-state-error-light)', WebkitAppearance: meta.touched && meta.error && 'none' }} />
          {meta.touched && meta.error && <ExclamationCircleIcon className="h-5 absolute right-2 top-6 text-state-error-light" />}
          <ErrorMessage component="span" name={field.name} className="text-state-error text-xs font-semibold ml-0.5 absolute top-full" />
        </div>
      </div>
    </>
  )
}

export default TextArea
