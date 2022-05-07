import { ChevronDownIcon, XIcon } from "@heroicons/react/outline"
import { Form, Formik } from "formik"
import SwitchField from "../../formik/SwitchField"
import TextField from "../../formik/TextField"
import SelectField from "../../formik/SelectField"
import TextArea from "../../formik/TextArea"
import { formatAmericanDate } from "../../utilities/functions"
import { useState } from "react"

const AddTransaction = ({ adding, setAdding, initialType }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    if (!adding) return null

    const handleSubmit = async values => {
        setAdding(false)
        console.log(values)
    }

    const handleClick = (setFieldValue, type) => {
        setFieldValue('type', type)
        setIsDropdownOpen(false)
    }

    const inputStyle = "text-gray-600 bg-white focus:outline-none focus:border focus:border-indigo-600 w-full p-2 border border-gray-300 rounded"
    const labelStyle = "ml-0.5 font-medium"
    const textareaStyle = "text-gray-600 bg-white focus:outline-none focus:border focus:border-indigo-600 w-full p-2 border border-gray-300 rounded resize-none"

    return (
        <Formik
            initialValues={{
                type: initialType,
                date: formatAmericanDate(new Date()),
                title: '',
                amount: '',
                description: '',
                recurring: false,
                recurringValue: 'Monthly',
            }}
            // validationSchema={}
            onSubmit={values => handleSubmit(values)}
        >
            {({ values, setFieldValue }) =>
                <div className="backdrop-filter backdrop-blur-sm bg-gray-800 bg-opacity-70 absolute inset-0 z-50 flex justify-center items-center">
                    <div className="bg-slate-100 rounded overflow-x-hidden shadow-lg transform align-middle w-5/6 max-h-[87.5%]">
                        {/* header */}
                        <div className="py-3 px-4 bg-slate-700 text-white">
                            <div className="flex justify-between mb-1">
                                <div className="relative">
                                    <div onClick={() => setIsDropdownOpen(true)} className="flex items-center font-semibold text-xl">
                                        <span>Add new {values.type}</span>
                                        <ChevronDownIcon className="h-4 ml-1" />
                                    </div>
                                    {
                                        isDropdownOpen &&
                                        <div className="absolute top-8 left-1/2 bg-white text-black font-normal text-base divide-y divide-gray-300 rounded shadow-lg">
                                            <div onClick={() => handleClick(setFieldValue, 'Earning')} className="px-3 py-1">Earning</div>
                                            <div onClick={() => handleClick(setFieldValue, 'Spending')} className="px-3 py-1">Spending</div>
                                        </div>
                                    }
                                </div>
                                <button onClick={() => setAdding(false)} className="rounded-full p-1 hover:bg-neutral active:bg-neutral-light">
                                    <XIcon className="h-5" />
                                </button>
                            </div>
                            <span className="text-sm">Insert {values.type} data</span>
                        </div>
                        {/* form */}
                        <Form className="space-y-4 px-4 flex flex-col justify-center py-3">
                            <div className="flex flex-wrap -mx-2 space-y-3 mb-2">
                                <div className="w-full px-2">
                                    <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Date" name="date" type="date" />
                                </div>
                                <div className="w-full px-2">
                                    <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Title" name="title" type="text" />
                                </div>
                                <div className="w-full px-2">
                                    <TextField inputClasses={inputStyle} labelClasses={labelStyle} label="Amount" name="amount" type="text" />
                                </div>
                                <div className="w-full px-2">
                                    <TextArea placeholder="Write the description here..." textareaStyle={textareaStyle} labelClasses={labelStyle} label="Description" rows="4" name="description" />
                                </div>
                            </div>
                            {/* recurring */}
                            <div className="w-full mb-2">
                                <SwitchField label="Recurring" name="recurring" />
                            </div>
                            {
                                values.recurring &&
                                <div className="w-full px-2">
                                    <SelectField inputClasses={inputStyle} labelClasses={labelStyle} options={[{ key: 'Select', value: '' }, { key: 'Weekly', value: 'Weekly' }, { key: 'Monthly', value: 'Monthly' }, { key: 'Yearly', value: 'Yearly' }]} label="How Often" name="recurringValue" />
                                </div>
                            }
                            <div className="flex justify-end">
                                <input type="submit" value="Add" className="cursor-pointer rounded-md mt-2 border border-gray-300 shadow-sm px-3.5 py-1.5 bg-white text-content hover:bg-gray-50 focus:outline-none transform transition-all duration-150 ease-in-out focus:scale-95 w-auto text-md" />
                            </div>
                        </Form>
                    </div>
                </div>
            }
        </Formik>
    )
}

export default AddTransaction
