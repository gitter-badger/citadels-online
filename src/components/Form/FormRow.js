import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './FormRow.scss'

class FormRow extends Component {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    inputOnChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    classes: PropTypes.string,
    isRequired: PropTypes.bool
  }

  render () {
    const {
      label,
      type,
      inputOnChange,
      name,
      value,
      classes,
      isRequired
    } = this.props

    return (
      <div className={`form-row ${classes}`}>
        <label className="form-label">{label}</label>
        <input
          className="form-input"
          name={name}
          type={type}
          onChange={inputOnChange}
          value={value}
          required={isRequired}
        />
      </div>
    )
  }
}

export default FormRow
