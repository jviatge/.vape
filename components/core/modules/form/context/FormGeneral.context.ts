import { TableBuilder } from "@vape/types/modules/table/table";
import { Dispatch, SetStateAction, createContext } from "react";
import { FormBuilder } from "../Form.module";

export type ModalProps = {
    open: "create" | "select" | "edit" | null;
    id?: string;
    data?: Record<string, any>;
    tableBuilder?: TableBuilder;
    formBuilder?: FormBuilder;
    name: string;
};

export type FormGeneralContext = {
    modal: ModalProps;
    setModal: Dispatch<SetStateAction<ModalProps>>;
    mode: "create" | "edit";
    authUser?: Record<string, any>;
};

export default createContext<FormGeneralContext>({} as FormGeneralContext);
