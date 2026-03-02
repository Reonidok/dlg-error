export interface APIError {
    code?: string;          // например, "USER_NOT_FOUND"
    message: string;        // основной текст ошибки
    details?: string;       // дополнительные детали
}