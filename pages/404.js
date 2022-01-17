import Link from 'next/link'
import React from 'react'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        console.log('Use Effect Run')
        const pathName = router.pathname
        console.log(pathName)
        setTimeout(() => {
            router.push('/')
        },3000)
    }, [])

    return (
        <div className='not-found'>
            <h1>Oooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href='/'><a>HomePage</a></Link></p>
        </div>
    )
}

export default NotFound
