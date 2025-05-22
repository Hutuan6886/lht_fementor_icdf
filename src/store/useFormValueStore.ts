import { create } from "zustand";
import type { FormCardType } from "../type";
import type { CardFormType } from "../components/Form";

type FromValueStoreType = {
  formData: FormCardType;
  updatefield: (
    field: keyof CardFormType | "date.month" | "date.year",
    value: string
  ) => void;
  resetForm: () => void;
};

export const useFormValueStore = create<FromValueStoreType>((set) => ({
  formData: {
    nameCard: "",
    numberCard: "",
    date: {
      month: "",
      year: "",
    },
    cvc: "",
  },
  updatefield: (nameField: string, value: string) => {
    set((state) => {
      const parts = nameField.split(".");
      if (parts.length === 2 && parts[0] === "date") {
        return {
          formData: {
            ...state.formData,
            [parts[0]]: {
              ...state.formData.date,
              [parts[1]]: value,
            },
          },
        };
      }
      return {
        formData: {
          ...state.formData,
          [nameField]: value,
        },
      };
    });
  },
  resetForm: () => {
    set(() => ({
      formData: {
        nameCard: "",
        numberCard: "",
        date: {
          month: "",
          year: "",
        },
        cvc: "",
      },
    }));
  },
}));
