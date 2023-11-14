import { redirect } from "react-router-dom"


export const action = async () => {
    console.log("logging in")

    return redirect('/')
}