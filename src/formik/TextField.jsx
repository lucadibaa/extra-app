import { BiEuro, BiStar } from 'react-icons/bi'
import { RiBarcodeLine, RiSearchLine } from 'react-icons/ri'
import { MdToday } from 'react-icons/md'
import { AiOutlineFieldNumber, AiOutlinePercentage } from 'react-icons/ai'
import { ExclamationCircleIcon } from "@heroicons/react/solid"
import { ErrorMessage, useField } from "formik"

const TextField = ({ label, labelClasses, inputClasses, icon, small, ...props }) => {
    const [field, meta] = useField(props)

    const iconClasses = !props.disabled && meta.touched && meta.error && props.type !== 'date' ? 'hidden' : 'h-5 w-6 absolute right-0.5 top-1/2 transform -translate-y-1/2 text-gray-400'

    return (
        <>
            <div className={`${props.inline && "flex items-center"} ${props.centralbox && 'relative top-1/2'} ${props.checkbox && 'justify-between'}`}>
                <label className={labelClasses} htmlFor={field.name}>{label}</label>
                <div className="relative flex flex-col">
                    <input autoComplete="off" className={inputClasses} {...field} {...props} placeholder={label} style={{ border: !props.disabled && meta.touched && meta.error && '1px solid var(--color-state-error-light)', WebkitAppearance: !props.disabled && meta.touched && meta.error && 'none' }} />
                    {
                        !props.disabled && meta.touched && meta.error && props.type !== 'date' &&
                        <ExclamationCircleIcon className="h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-state-error-light" />
                    }
                    <ErrorMessage component="span" name={field.name} className="text-state-error ml-0.5 text-xs font-semibold absolute top-full" />
                    {
                        icon === 'search' ?
                            <RiSearchLine className={iconClasses} /> :
                            icon === 'eur' ?
                                <BiEuro className={iconClasses} /> :
                                icon === 'calendar' ?
                                    <MdToday className={iconClasses} /> :
                                    icon === 'barcode' ?
                                        <RiBarcodeLine className={iconClasses} /> :
                                        icon === 'qty' ?
                                            <AiOutlineFieldNumber className={iconClasses} /> :
                                            icon === '%' ?
                                                <AiOutlinePercentage className={iconClasses} /> :
                                                icon === 'star' ? <BiStar className={iconClasses} /> : ''
                    }
                </div>
            </div>
        </>
    )
}

export default TextField
