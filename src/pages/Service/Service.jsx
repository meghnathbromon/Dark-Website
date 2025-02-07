import { useLoaderData, useNavigation } from 'react-router-dom';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import Loader from '../../Components/Loader/Loader';

const Service = () => {

    const servicesData = useLoaderData();
    console.log(servicesData);

    const navigation = useNavigation()
    if(navigation.state === 'loading') return <Loader/>
    return (
        <div>
            <h1 className='text-5xl text-center my-14 text-primary bg-green-600 p-5'>All products are here:</h1>
            <div className='grid justify-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(data =>
                        <ServiceCard
                        key = {data.id}
                        data = {data}
                        ></ServiceCard>
                     )
                }

            </div>
        </div>
    );
};

export default Service;