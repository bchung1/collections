import { useRouter } from 'next/router'

export default function GoogleAuth() {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)
    return (
        <div>Google Auth...</div>
    )
}