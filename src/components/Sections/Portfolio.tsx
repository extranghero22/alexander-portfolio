import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="w-full" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image 
                    alt={title} 
                    className="h-full w-full object-cover" 
                    height={500}
                    placeholder="blur" 
                    src={image}
                    width={800}
                  />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {title, description}}) => {
  return (
    <div className="absolute inset-0 h-full w-full bg-gray-900 bg-opacity-0 transition-all duration-300 hover:bg-opacity-80 group">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
});
