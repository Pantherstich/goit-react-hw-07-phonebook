// import { nanoid } from 'nanoid';
import { H2Title } from 'components/App.styled';
import { FilterField } from './Filter.styled';
import { selectFilterValue } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilterAction } from '../../redux/filterSlice';

export const Filter = () => {
  // const filterId = nanoid();

  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const changeFilter = e => {
    dispatch(setSearchFilterAction(e.target.value));
  };
  return (
    <div>
      <H2Title>Filter contacts</H2Title>
      <FilterField
        type="text"
        value={filter}
        // id={filterId}
        onChange={changeFilter}
        placeholder="Enter contact name"
      />
    </div>
  );
};
