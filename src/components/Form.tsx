import type React from "react"
import type { ChangeEvent } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"

import { useFormValueStore } from "../store/useFormValueStore"
import { CardFormSchema } from "../form_schema/FormSchema"
import DateInput from "./DateInput"
import StringInput from "./StringInput"

export type CardFormType = z.infer<typeof CardFormSchema>
function Form() {
    const navigate = useNavigate()
    const { formData, updatefield, resetForm } = useFormValueStore()
    const { register, handleSubmit, formState } = useForm<CardFormType>({
        defaultValues: formData,
        resolver: zodResolver(CardFormSchema),
    })

    const submitForm = async (data: CardFormType) => {
        console.log('submit', data);
        navigate("/submit-successfully")
        resetForm()
    }

    return (
        <div className="relative w-full h-full">
            <form onSubmit={handleSubmit(submitForm)} className="absolute top-0 left-0 sm:top-1/2 sm:transform sm:-translate-y-1/2
                                        w-full sm:w-[60%] h-fit p-5 sm:p-10
                                        flex flex-col gap-6 justify-start">
                <StringInput title="CARDHOLDER NAME" placeholder="e.g Le Huu Tuan" name="nameCard" register={register} formState={formState} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatefield("nameCard", e.target.value)} />
                <StringInput title="CARD NUMBER" placeholder="e.g 6666777788889999" maxLength={16} name="numberCard" register={register} formState={formState} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatefield("numberCard", e.target.value)} />
                <div className="flex flex-row items-center justify-between gap-2 sm:gap-4">
                    <DateInput register={register} formState={formState} onChangeMonth={(e: ChangeEvent<HTMLInputElement>) => updatefield("date.month", e.target.value)} onChangeYear={(e: ChangeEvent<HTMLInputElement>) => updatefield("date.year", e.target.value)} />
                    <StringInput title="CVC" placeholder="e.g 999" maxLength={3} name="cvc" register={register} formState={formState} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatefield("cvc", e.target.value)} />
                </div>
                <button type="submit" className="w-full px-3 py-[0.6rem] 
                                rounded-[0.3rem] cursor-pointer
                                 bg-[#21092F] text-white text-[0.9rem] tracking-[.05rem]">Confirm</button>
            </form>
        </div>
    )
}

export default Form
