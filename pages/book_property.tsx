import  Router, {useRouter } from 'next/router';
import React from 'react';
import BookProperty from '../src/components/book-property';
import { Loading } from '../src/components/utils';
import { AuthContext } from '../utils/GlobalState';

function Booking() {
  const [property, setProperty] = React.useState<any>([])
  const router = useRouter();
  const _id = router.query || '';
  React.useEffect(() =>{
    _id._id ?
    (async() => 
      //https://occupy-it.herokuapp.com
      await fetch('https://occupy-it.herokuapp.com/properties/id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(_id)
      })
      .then((res) => res.json())
      .then((data: any) => {
        if (data?.name == 'InternalServerErrorException') {
          throw new Error()
        }
        setProperty(data)
       })
       .catch((err) => Router.push('/'))
    )() :
    setProperty(null)
  },[setProperty])

  console.log({...property})
  return property?.length > 0 ? 
    <div style={{ width: '100%', margin: 0 }}>
      <BookProperty property={property[0]} />
    </div>
    : 
    <Loading />
}
export default Booking;
