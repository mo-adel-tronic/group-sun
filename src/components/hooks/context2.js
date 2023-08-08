import { useUser } from "./context"

export default function UserProfile () {
    const {user} = useUser()
    return <h1>username is: {user.username}</h1>
}