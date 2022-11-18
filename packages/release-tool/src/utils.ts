import { existsSync } from "fs"

/**
 * file is exist
 * @param path 
 * @returns 
 */
export const isFileExist = (path: string) => {
    return existsSync(path);
}