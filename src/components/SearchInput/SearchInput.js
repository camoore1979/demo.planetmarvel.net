import React from 'react';
import { Label, Input } from 'reactstrap';

import './SearchInput.css';

export default function SearchInput({
  classname = 'comics-search-input',
  searchString = '',
  onChange = e => e.preventDefault(),
  onKeyPress = e => e.preventDefault()
}) {
  return (
    <div className={`search-input ${classname}`}>
      <div>
        <Label for="search">Search</Label>
      </div>
      <Input
        type="text"
        name="search"
        id="search"
        placeholder="Enter Title"
        value={searchString}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}
