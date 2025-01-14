import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`${className} px-3 py-2 rounded-lg bg-gray-900 text-white outline-none focus:bg-gray-700 duration-200 w-full  bg-iphone-black text-iphone-white hover:bg-iphone-white hover:text-iphone-black  hover:duration-150 `}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input