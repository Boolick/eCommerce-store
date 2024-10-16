import {FC, useState} from 'react';
import classNames from 'classnames';
import {useMediaQueries} from 'shared/hooks/useMediaQueries';
import cls from './Filter.module.scss';

interface FilterProps {
  className?: string;
}

const priceUpperLimit = 20000;

const Filter: FC<FilterProps> = ({className}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(priceUpperLimit);
  const [filtersOpened, setFiltersOpened] = useState(true);
  const {sm} = useMediaQueries();

  function handleMinChange(e: React.FormEvent<HTMLInputElement>): void {
    if (e && e.target) {
      const target = e.target as HTMLInputElement;
      setMinPrice(Number(target.value));
    }
  }

  function handleMaxChange(e: React.FormEvent<HTMLInputElement>): void {
    if (e && e.target) {
      const target = e.target as HTMLInputElement;
      setMaxPrice(Number(target.value));
    }
  }

  return (
    <div className={classNames(cls.Filter, className)}>
      <details open={filtersOpened && !sm}>
        <summary className={cls.foldBtn} onClick={() => setFiltersOpened((prev) => !prev)}>
          Filter
        </summary>
        <div className={cls.group}>
          <div>
            <p className={cls.title}>Weight block simulators</p>
            <ul className={cls.list}>
              <li className={cls.item}>
                <label>
                  <input type="checkbox" name="series-s" id="id-series-s" />
                  <span>STATUS (S) Series</span>
                </label>
              </li>
              <li className={cls.item}>
                <label>
                  <input type="checkbox" name="series-fitness" id="id-series-fitness" />
                  <span>FITNESS LEGION Series</span>
                </label>
              </li>
              <li className={cls.item}>
                <label>
                  <input type="checkbox" name="series-500" id="id-series-500" />
                  <span>Series 500</span>
                </label>
              </li>
              <li className={cls.item}>
                <label>
                  <input type="checkbox" name="series-fenix" id="id-series-fenix" />
                  <span>FENIX PREMIUM Series</span>
                </label>
              </li>
            </ul>
          </div>
          <div>
            <p className={cls.title}>Free weight</p>
            <ul className={cls.list}>
              <li className={cls.item}>
                <label>
                  <input type="checkbox" name="rubicon" id="id-rubicon" />
                  <span>RUBICON</span>
                </label>
              </li>
            </ul>
          </div>
          <div>
            <p className={cls.title}>Rehabilitation</p>
            <ul className={cls.list}>
              <li className={cls.item}>
                <label>
                  <input type="checkbox" name="block-frames" id="id-block-frames" />
                  <span>Block frames</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className={cls.group}>
          <div>
            <p className={cls.title}>Area</p>
            <ul className={cls.list}>
              <li className={cls.item}>
                <label>
                  <input type="checkbox" name="area-body" id="id-area-body" />
                  <span>Body</span>
                </label>
              </li>
              <li className={cls.item}>
                <label>
                  <input type="checkbox" name="area-legs" id="id-area-legs" />
                  <span>Legs</span>
                </label>
              </li>
              <li className={cls.item}>
                <label>
                  <input type="checkbox" name="area-arms" id="id-area-arms" />
                  <span>Arms</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className={cls.group}>
          {' '}
          <div>
            <p className={cls.title}>Price</p>
            <ul className={cls.list}>
              <li className={classNames(cls.item, cls.column)}>
                <label>
                  <span>Min price</span>
                  <input
                    type="range"
                    value={minPrice}
                    min="0"
                    max={String(priceUpperLimit)}
                    name="min-price"
                    id="id-min-price"
                    onChange={handleMinChange}
                  />
                </label>
                <label>
                  <span className="visually-hidden">Min price by number</span>
                  <input
                    type="number"
                    value={minPrice}
                    min="0"
                    max={String(priceUpperLimit)}
                    name="min-price-num"
                    id="id-min-price-num"
                    onChange={handleMinChange}
                  />
                </label>
              </li>
              <li className={classNames(cls.item, cls.column)}>
                <label>
                  <span>Max price</span>
                  <input
                    type="range"
                    value={maxPrice}
                    min="0"
                    max={String(priceUpperLimit)}
                    name="max-price"
                    id="id-max-price"
                    onChange={handleMaxChange}
                  />
                </label>
                <label>
                  <span className="visually-hidden">Max price by number</span>
                  <input
                    type="number"
                    value={maxPrice}
                    min="0"
                    max={String(priceUpperLimit)}
                    name="max-price-num"
                    id="id-max-price-num"
                    onChange={handleMaxChange}
                  />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </details>
    </div>
  );
};

export {Filter};
