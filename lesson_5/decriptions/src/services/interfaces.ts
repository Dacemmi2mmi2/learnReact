export interface IDescriptionComponentProps {
    id: string,
    description: string,
    deleteDescription: Function,
    updateDescription: Function
}

export interface IdataDescription {
    description: string,
    id: string,
    height?: number,
    left?: number,
    top?: number,
    width?: number
}

export interface IlistDescriptons {
    listDescriptions: IdataDescription[]
}

export interface IuseAsync {
    data: IdataDescription[],
    setData: Function,
    getData: Function
}