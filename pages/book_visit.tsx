import React from 'react';
import BookPropertyVisit from '../src/components/book-visit';
import { useRouter } from "next/router";


function BookVisit () {
  const router = useRouter();
  const query = router.query;
  console.log(query)
  const details = {
    property: 'executive property',
    type: 'Rental', 
    price: 25500,
    location: 'Kitengela'
  }
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <BookPropertyVisit {...details} />
    </div>
  );
}

export default BookVisit;