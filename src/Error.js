import imageErr from "./image/image404.jpg"

export const ErrorPage = ()=>{
    return `
    <img src="${imageErr}" alt="err" class="not-found"/>
    `
}