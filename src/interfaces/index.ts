export interface IFormValue {
    [key: string]: string | undefined;
    username: string;
    password: string;
    email?: string;
}

export  interface IContextProps {
    form: IFormValue,
    handleFormChange: (e: React.FormEvent<HTMLInputElement>) => void
}