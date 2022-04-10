export interface IStickerComponentProps {
    id: string,
    description: string,
    deleteSticker: Function,
    updateStickers: Function
}

export interface IdataSticker {
    description: string,
    id: string,
    height?: number,
    left?: number,
    top?: number,
    width?: number
}

export interface IlistDescriptons {
    listDescriptions: IdataSticker[]
}

export interface IuseAsync {
    data: IdataSticker[],
    setData: Function,
    getData: Function
}