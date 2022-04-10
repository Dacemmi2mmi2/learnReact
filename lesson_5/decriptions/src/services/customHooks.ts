import {
    SetStateAction,
    useState
} from "react";
import {
    IdataSticker,
    IlistDescriptons,
    IuseAsync
} from "./interfaces";

export const useAsync = (callback: Function, defaultValue = []): IuseAsync => {
    const [data, setData] = useState(defaultValue as any | IdataSticker[]);

    const getData = (): void => {
        callback()
            .then((data: IlistDescriptons | IdataSticker) => {
                setData(data as SetStateAction<IlistDescriptons | IdataSticker>);
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