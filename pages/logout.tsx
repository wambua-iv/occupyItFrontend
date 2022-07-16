import Router from 'next/router';
import React from 'react'
import { Loading } from '../src/components/utils';

function Logout() {
    React.useEffect(() => {
        sessionStorage.clear()
        Router.push('/')
        setInterval(() => (Router.reload()), 800)
    },[])
    return <Loading redirectUrl='/' />
}

export default Logout;