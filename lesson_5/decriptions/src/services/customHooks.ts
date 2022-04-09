import {
    SetStateAction,
    useState
} from "react";
import {
    IdataDescription,
    IlistDescriptons,
    IuseAsync
} from "./interfaces";

export const useAsync = (callback: Function, defaultValue = []): IuseAsync => {
    const [data, setData] = useState(defaultValue as any | IdataDescription[]);

    const getData = (): void => {
        callback()
            .then((data: IlistDescriptons | IdataDescription) => {
                setData(data as SetStateAction<IlistDescriptons | IdataDescription>);
                return data;
            })
            .catch((error: any): Promise<never> => Promise.reject(error));
    }

    return {
        data,
        setData,
        getData,
    };
}