import { H2Title } from 'components/App.styled';
import { FilterField } from './Filter.styled';
import { getFilter } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <H2Title>Filter contacts</H2Title>
      <FilterField type="text" value={filter} onChange={onChangeFilter} />
    </div>
  );
};
