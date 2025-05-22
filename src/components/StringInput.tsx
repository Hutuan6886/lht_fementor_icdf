import type { UseFormRegister, UseFormStateReturn } from "react-hook-form"
import type { CardFormType } from "./Form"

interface StringInputProps {
    title: string
    placeholder?: string
    maxLength?: number

    name: keyof CardFormType
    register: UseFormRegister<CardFormType>
    formState: UseFormStateReturn<CardFormType>
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function StringInput({ title, placeholder, maxLength, name, register, formState, onChange }: StringInputProps) {
    const error = formState.errors[name]?.message?.toString()
    return (
        <div className="flex flex-col justify-between gap-2 
                         text-black">
            <h3 className="text-[.6rem] tracking-[.1rem]">{title}</h3>
            <input disabled={formState.isSubmitting} {...register(name)} type="text" maxLength={maxLength} placeholder={placeholder} className={`w-full px-3 py-[0.4rem]
                                        text-[.9rem] placeholder:text-[.8rem] placeholder:text-[#aaaaaa]
                                        outline-0 border-1 ${error ? 'border-red-400' : ""} rounded-[0.3rem]
                                        focus:border-[#600594]`} onChange={onChange} />
            {formState.errors && <p className="text-[0.7rem] text-red-400">{error}</p>}
        </div>
    )
}

export default StringInput
