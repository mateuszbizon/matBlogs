import fs from "fs"

export function deleteFile(path: string) {
    fs.unlink(path, (err) => {
        if (err) {
            console.error("Can't delete file: ", err)
        } else {
            console.log("File deleted.")
        }
    })
}