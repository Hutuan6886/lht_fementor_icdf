import type { UseFormRegister, UseFormStateReturn } from "react-hook-form"
import type { CardFormType } from "./Form"
import type { ChangeEvent } from "react"

interface DateInputProps {
    register: UseFormRegister<CardFormType>
    formState: UseFormStateReturn<CardFormType>
    onChangeMonth: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeYear: (e: ChangeEvent<HTMLInputElement>) => void
}

function DateInput({ register, formState, onChangeMonth, onChangeYear }: DateInputProps) {
    const monthError = formState.errors.date?.month?.message?.toString()
    const yearError = formState.errors.date?.year?.message?.toString()
    const error = formState.errors.date?.month?.message?.toString() ? monthError : yearError
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-[.6rem] tracking-[.1rem]">EXP. DATE(MM/YY)</h3>
            <div className="flex flex-row items-center justify-between gap-2
                            text-black">
                <input {...register(`date.month`)} disabled={formState.isSubmitting} type="text" className={`w-full sm:w-18 px-3 py-[0.4rem]
                                        text-[.9rem]  
                                        outline-0 border-1 ${monthError ? 'border-red-400' : ""} rounded-[0.3rem] 
                                        focus:border-[#600594]`} onChange={onChangeMonth} />
                <input {...register(`date.year`)} disabled={formState.isSubmitting} type="text" className={`
                    w-full sm:w-18 px-3 py-[0.4rem]
                                        text-[.9rem]  
                                        outline-0 border-1  ${yearError ? 'border-red-400' : ""} rounded-[0.3rem] 
                                        focus:border-[#600594]`} onChange={onChangeYear} />
            </div>
            <p className="text-[0.7rem] text-red-400">{error}</p>
        </div>
    )
}

export default DateInput
