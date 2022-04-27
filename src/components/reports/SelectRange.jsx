import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"

const SelectRange = () => {

    let date = new Date()
    const options = ['Last 12 Months', 'All 2022']
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [range, setRange] = useState(monthName[date.getMonth()] + ' ' + date.getFullYear())

    date.setDate(1)
    for (let i = 0; i <= 11; i++) {
        options.unshift(monthName[date.getMonth()] + ' ' + date.getFullYear())
        date.setMonth(date.getMonth() - 1)
    }

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Listbox value={range} onChange={setRange}>
            {({ open }) => (
                <>
                    <div className="relative">
                        <Listbox.Button className="relative w-40 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-8 py-1.5 text-sm text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                            <span className="flex items-center">
                                <span className="truncate">{range}</span>
                            </span>
                            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1.5 w-40 bg-white shadow-lg max-h-36 rounded-md text-sm divide-y ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                                {
                                    [...options].reverse().map(option => (
                                        <Listbox.Option
                                            key={option}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={option}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <span
                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}
                                                        >
                                                            {option}
                                                        </span>
                                                    </div>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
        // <>
        //     <select className="outline-none" onChange={e => setRange(e.target.value)} defaultValue={range}>
        //         <option className="" value="" disabled>Sort By</option>
        //         {
        //             options.reverse().map(o => (
        //                 <option className="" value={o}>{o}</option>
        //             ))
        //         }
        //     </select>
        // </>
    )
}

export default SelectRange
