import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import './DetailItems.css';

const Country = ({
  country,
  source,
  todayConfirmed,
  todayDeaths,
  todayNewConfirmed,
  todayNewDeaths,
  todayNewRecovered,
  yesterdayDeaths,
  todayRecovered,
}) => (
  <div>
    <h2>{country}</h2>
    <ul className="details-wrapper">
      <li className="country-detail">
        <span>Total Confirmed</span>
        <small>
          {todayConfirmed}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="source">
        <span>Source</span>
        <small>
          {source}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Total Deaths</span>
        <small>
          {todayDeaths}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Yesterday&apos;s Deaths</span>
        <small>
          {yesterdayDeaths}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>

      <li className="country-detail">
        <span>Today Recovered</span>
        <small>
          {todayRecovered}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Today New Confirmed</span>
        <small>
          {todayNewConfirmed}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Today New Deaths</span>
        <small>
          {todayNewDeaths}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Today New Recovered</span>
        <small>
          {todayNewRecovered}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
    </ul>
  </div>
);
Country.propTypes = {
  todayConfirmed: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  todayNewConfirmed: PropTypes.number.isRequired,
  todayNewDeaths: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  todayNewRecovered: PropTypes.number.isRequired,
  yesterdayDeaths: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};
export default Country;
