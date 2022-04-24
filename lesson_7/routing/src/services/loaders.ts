import { AxiosResponse } from "axios"
import { API } from "./api"

export const getApi = (uri: string) => API.get(uri)
    .then(({ data }: AxiosResponse) => JSON.parse(data))