import { Permissions } from "@vape/lib/permissions";
import { TableBuilder } from "@vape/types/modules/table/table";
import { Dispatch, SetStateAction, createContext } from "react";

export type Query = {
    get: string | null;
    search: string | null;
    sort: Record<string, "asc" | "desc">;
    select: Record<string, string>;
    contains: Record<string, string>;
    boolean: Record<string, boolean>;
    datesRange: Record<string, string>;
    equals: Record<string, string>;
    page: {
        number?: number;
        limit?: number;
        lastPage?: boolean;
    } | null;
};

export type SetQueryValue = (
    key: keyof Query,
    action: "add" | "delete",
    field: string | undefined,
    value?: string | boolean
) => void;

export type TableContext = {
    // Query filter/search
    query: Query;
    setQueryValue: SetQueryValue;
    deleteAllQuery: () => void;
    queryCount: () => number;
    // Notification search
    notification: number;
    setNotification: Dispatch<SetStateAction<number>>;
    // Select one id
    selectID: number | null;
    setSelectID: Dispatch<SetStateAction<number | null>>;
    // Select multiple ids
    selectIds: number[];
    setSelectIds: Dispatch<SetStateAction<number[]>>;
    //////////////////////////
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    tableBuilder: TableBuilder;
    permissions?: Permissions;
};

export default createContext<TableContext>({} as TableContext);
