import { z } from "zod";

export const CardFormSchema = z.object({
  nameCard: z
    .string()
    .min(1, { message: "Name is required" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Wrong format, text only" }),
  numberCard: z
    .string()
    .length(16, {
      message:
        "Card number must be 16 numbers, no spaces or special characters",
    })
    .regex(/^[\d\s]+$/, { message: "Wrong format, numbers only" }),
  date: z.object({
    month: z
      .string()
      .min(1, { message: "Can't be blank" })
      .regex(/^\d+$/, { message: "Wrong format, numbers only" })
      .refine(
        (val) => {
          const num = parseInt(val, 10);
          return num >= 1 && num <= 12;
        },
        {
          message: "Month must be from 1 to 12",
        }
      ),
    year: z
      .string()
      .min(1, { message: "Can't be blank" })
      .regex(/^\d+$/, { message: "Wrong format, numbers only" })
      .refine(
        (val) => {
          const num = parseInt(val, 10);
          return num >= 1 && num <= 99;
        },
        {
          message: "Year must be from 01 to 2100 ",
        }
      ),
  }),
  cvc: z
    .string()
    .length(3, { message: "Can't be blank, CVC must be 3 digits" })
    .regex(/^[\d\S]+$/, { message: "Wrong format, numbers only" }),
});

// export const CardFormSchema = z.object({
//   nameCard: z.string(),
//   numberCard: z.string(),
//   date: z.object({
//     month: z.string(),
//     year: z.string(),
//   }),
//   cvc: z.string(),
// });
