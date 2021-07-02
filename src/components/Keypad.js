// Code Keypad Component Here
import react, {useState} from "react"

function Keypad() {
    const [password, setPassword] = useState("")

    function enterPassword() {
        setPassword(password)
        console.log("Entering password...")
    }

    return(
        <input type="password" onChange={enterPassword} ></input>
    )
}

export default Keypad