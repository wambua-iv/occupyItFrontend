import React from 'react';
import BookPropertyVisit from '../src/components/book-visit';
import { useRouter } from "next/router";


function BookVisit () {
  const router = useRouter();
  const query = router.query;
  return (
    <div style={{ width: '100%', margin: 0 }}>
      <BookPropertyVisit {...query} />
    </div>
  );
}

export default BookVisit;