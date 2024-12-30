import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-1 py-2 rounded-xl outline-none bg-iphone-black text-center w-full ${className}`}
        >
            {options?.map((option) => (
                <option key={option} className='bg-iphone-black outline-none' value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)