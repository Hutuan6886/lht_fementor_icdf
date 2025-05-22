import { Outlet } from 'react-router-dom'

import Card from '../components/Card'

function HomeLayout() {
    return (
        <div className='w-full h-full
                    sm:grid sm:grid-cols-2
                    fle flex-col justify-start'>
            <Card />
            <Outlet />
        </div>
    )
}

export default HomeLayout
