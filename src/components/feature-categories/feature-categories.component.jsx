import React from 'react';
import Slider from 'react-slick';

import CategoryCard from '../../components/ui/category-card/category-card.component';

import './feature-categories.styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SETTINGS = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear'
};

const CATEGORIES = [
  {
    id: 1,
    title: 'Card 1',
    description: 'blue start print with cusion',
    imageUrl: 'http://pngimg.com/uploads/pillow/pillow_PNG14224.png'
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'blue start print with cusion',
    imageUrl:
      'http://www.pngmart.com/files/7/Cushion-PNG-Transparent-Image-279x279.png'
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'blue start print with cusion',
    imageUrl: 'http://www.pngmart.com/files/7/Curtains-PNG-Clipart-240x279.png'
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'blue start print with cusion',
    imageUrl: 'http://pngimg.com/uploads/pillow/pillow_PNG14179.png'
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'blue start print with cusion',
    imageUrl: 'http://www.pngmart.com/files/7/Drapes-PNG-Photos-279x279.png'
  },
  {
    id: 6,
    title: 'Card 6',
    description: 'blue start print with cusion',
    imageUrl: 'http://pngimg.com/uploads/pillow/pillow_PNG14178.png'
  },
  {
    id: 7,
    title: 'Card 7',
    description: 'blue start print with cusion',
    imageUrl: 'http://pngimg.com/uploads/pillow/pillow_PNG14167.png'
  }
];

export default function featureCategories() {
  return (
    <section className="container">
      <h2>FEATURED CATEGORIES</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown.
      </p>
      <Slider {...SETTINGS}>
        {CATEGORIES.map(category => (
          <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
          />
        ))}
      </Slider>
    </section>
  );
}
