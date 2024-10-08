export type TMainResponse<Data = any> = {
    statusCode: number;
    message: string;
    data?: Data;
}