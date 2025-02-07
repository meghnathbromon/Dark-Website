import React, { useEffect, useState } from 'react';
import { deleteDetail, getDetails } from '../../utils';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import EmptyState from '../../Components/EmptyState/EmptyState';

const Bookmarks = () => {
    const [servicesData, setServicesData] = useState([])
    useEffect(() => {
        const storedDetails = getDetails()
        setServicesData(storedDetails)
    }, [])

    const handleDelete = id => {
        deleteDetail(id);
        const storedDetails = getDetails()
        setServicesData(storedDetails)
    }

    if(servicesData.length < 1) return <EmptyState message={'No Bookmarks Available!'}/>

    return (
        <div className='grid px-4 sm:px-8 lg:px-12 py-8  justify-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {
                servicesData.map(data =>
                    <ServiceCard
                        handleDelete={handleDelete}
                        deletable={true}
                        key={data.id}
                        data={data}
                    ></ServiceCard>
                )
            }


        </div>
    );
};

export default Bookmarks;