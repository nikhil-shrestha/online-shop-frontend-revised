import React from 'react';

import CollectionCard from '../../ui/collection-card/collection-card.component';

import curtain from '../../../assets/images/curtain.png';

const COLLECTIONS = [
  {
    id: 1,
    title: 'Decorative',
    subTitle: 'Painting',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
  },
  {
    id: 2,
    title: 'Interiors',
    subTitle: 'Curtain',
    imageUrl: curtain
  },
  {
    id: 3,
    title: 'Cushion',
    subTitle: 'Painting',
    imageUrl: 'http://pngimg.com/uploads/pillow/pillow_PNG14167.png'
  }
];

export default function subBanner() {
  return (
    <section className="container">
      <div className="row">
        {COLLECTIONS.map((coll, idx) => (
          <CollectionCard
            key={coll.id}
            idx={idx}
            title={coll.title}
            subTitle={coll.subTitle}
            imageUrl={coll.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
