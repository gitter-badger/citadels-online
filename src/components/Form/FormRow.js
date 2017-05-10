import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './FormRow.scss'

class FormRow extends Component {
  static propTypes = {
    label: PropTypes.string,
    inpType: PropTypes.string.isRequired,
    inpValue: PropTypes.string,
    inpOnChange: PropTypes.func,
    inpName: PropTypes.string.isRequired,
    classes: PropTypes.string,
    isRequired: PropTypes.bool
  }

  render () {
    const {
      label,
      inpType,
      inpOnChange,
      inpName,
      inpValue,
      classes,
      isRequired
    } = this.props

    return (
      <div className={`form-row ${classes}`}>
        <label className="form-label">{label}</label>
        <input
          className="form-input"
          name={inpName}
          type={inpType}
          onChange={inpOnChange}
          value={inpValue}
          required={isRequired}
        />
      </div>
    )
  }
}

export default FormRow
