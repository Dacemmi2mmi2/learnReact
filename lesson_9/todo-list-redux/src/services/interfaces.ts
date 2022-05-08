export interface ITodoItem {
    id: number,
    notice: string,
    isDone: boolean
}

export interface IAction {
    type: string,
    payload: number 
}
