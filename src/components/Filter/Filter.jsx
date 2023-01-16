
import { LabelFilter, InputFilter } from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';
import { setFilter } from 'redux/slice';


export const Filter = () => {
const filter = useSelector(getFilter);
const dispatch = useDispatch();

return (
  <div>
    <LabelFilter>Find contacts by Name </LabelFilter>
    <InputFilter
      type="text"
      name="filter"
      placeholder="Enter filter"
      required
      value={filter}
      onChange={event => dispatch(setFilter(event.target.value))}
    />
  </div>
);

}


