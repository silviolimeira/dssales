import './styles.css';
import 'flatpickr/dist/themes/material_green.css';
import FlatPicker from 'react-flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import flatpickrlib from 'flatpickr';
import React, { useState } from 'react';
import { Gender } from '../../types';

flatpickrlib.localize(Portuguese);

function Filter() {
  const [dates, setDates] = useState<Date[]>([]);
  const [gender, setGender] = useState<Gender>();

  const onChangeDate = (dates: Date[]) => {
    if (dates.length == 2) {
      setDates(dates);
    }
  };

  const onChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value as Gender;
    setGender(selectedGender);
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
      <select className="filter-input" value={gender} onChange={onChangeGender}>
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;
