export const useFormUserPageHook = () => {

    const createOrEditUser = (): void => {
        console.log('createOrEditUser');
    }

    const toUsersPage = (): void => {
        console.log('toUser')
    }

    return {
        createOrEditUser,
        toUsersPage
    }
}