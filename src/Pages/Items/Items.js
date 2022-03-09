import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemItems from '../../Components/ItemItems/ItemItems';
import './Items.css';

const Items = () => {
  const itemData = useSelector((state) => state.items);

  const [filterItems, setFilterItems] = useState(itemData);
  const handleChange = (e) => {
    const typedCountries = e.target.value;
    const filtered = itemData.filter((value) => value.name
      .toLowerCase().startsWith(typedCountries.toLowerCase()));
    setFilterItems(filtered);
  };
  let sum = 0;
  itemData.forEach((element) => {
    sum += element.today_confirmed;
  });

  return (
    <div className="main-container">
      <h1>Covid 19 Countries&apos;s Data</h1>
      <p>{new Intl.NumberFormat().format(sum)}</p>
      <input
        type="text"
        placeholder="Enter Country..."
        onChange={handleChange}
      />
      <ul>
        {filterItems.length > 0
          ? filterItems.slice(0, 10).map((item) => (
            <Link
              key={item.id}
              to={{
                pathname: `${item.name}`,
              }}
            >
              <ItemItems
                id={item.id}
                name={item.name}
                todayConfirmed={item.today_confirmed}
              />
            </Link>
          ))
          : itemData.slice(0, 10).map((item) => (
            <Link
              key={item.id}
              to={{
                pathname: `${item.name}`,
              }}
            >
              <ItemItems
                id={item.id}
                name={item.name}
                todayConfirmed={item.today_confirmed}
              />
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Items;
