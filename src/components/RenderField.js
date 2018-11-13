import React from 'react';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

export default function RenderField({
  input,
  label,
  type,
  meta: { touched, error }
}) {
  return (
    <div>
      <FormGroup
        controlId={input.id}
        bsClass={'form-group ' + ((touched && error) && 'has-danger')}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...input} type={type}>
        </FormControl>
        {
          touched && (error && <p className="text-danger">{error}</p>)
        }
      </FormGroup>
    </div>
  );
}
