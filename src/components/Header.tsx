import { MdOutlineDashboard, MdOutlineCases } from 'react-icons/md';

interface Props {
  position: number;
  setPosition: (value: number) => void;
}

const Header = ({ position, setPosition }: Props) => {
  return (
    <div className='navigation'>
      <ul>
        <li
          onClick={() => {
            setPosition(0);
          }}
          className={`cursor-pointer ${
            position === 0 ? 'active' : ''
          }`}
        >
          <MdOutlineCases id='icon' />
          <div className='text'>My Courses</div>
        </li>
        <li
          onClick={() => {
            setPosition(1);
          }}
          className={`cursor-pointer ${
            position === 1 ? 'active' : ''
          }`}
        >
          <MdOutlineDashboard id='icon' />
          <div className='text'>Setting</div>
        </li>
        <div className='indicator'></div>
      </ul>
    </div>
  );
};

export default Header;
