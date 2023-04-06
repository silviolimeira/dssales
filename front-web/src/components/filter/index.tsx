import './styles.css';
import 'flatpickr/dist/themes/material_green.css';
import FlatPicker from 'react-flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import flatpickrlib from 'flatpickr';

flatpickrlib.localize(Portuguese);

function Filter() {
  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{
          mode: 'range',
          dateFormat: 'd/m/y',
          showMonths: 2
        }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Selecione um período"
      />
      <select className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="MALE"></option>
        <option value="FEMALE"></option>
        <option value="OTHER"></option>
      </select>
    </div>
  );
}

export default Filter;
