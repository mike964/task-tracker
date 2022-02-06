import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
  return <header className='header'>
    <h1>Task Tracker</h1>
     <Button color='orange' text='Add' />
     <Button color='orange' text='Add' />
  </header>
};


Header.defaultProps = {
  title: "Task Tracker X"
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;
