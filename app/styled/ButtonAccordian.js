import React from 'react';
import PropTypes from 'prop-types';
import { FormNext } from 'grommet-icons';

function buttonContent(
  label,
  size,
  icon,
  hasIcon,
  iconSize,
  secondary,
  reverse,
  spaced,
) {
  let iSize = iconSize;
  if (!iSize) {
    if (size === 'medium') iSize = 'large';
    if (size === 'large') iSize = 'xlarge';
  }
  const textIcon =
    icon ||
    (hasIcon && (
      // todo access colour
      <FormNext color="#ffffff" size={iSize} />
    ));

  return reverse ? (
    <p
      style={{
        display: 'flex',
        justifyContent: spaced ? 'space-between' : 'initial',
      }}
    >
      {label} {textIcon}
    </p>
  ) : (
    <p
      style={{
        display: 'flex',
        justifyContent: spaced ? 'space-between' : 'initial',
      }}
    >
      {textIcon} {label}
    </p>
  );
}

export function ButtonAccordian({
  onClick,
  icon,
  hasIcon,
  label,
  secondary,
  size = 'medium',
  iconSize,
  reverse = true,
  border = '1px solid lightgrey',
  spaced = true,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        alignSelf: 'start',
        fontWeight: 400,
        backgroundColor: 'transparent',
        color: '#262064',
        fontSize: '15px',
        padding: '0',
        margin: '5px 0',
        width: '100%',
        borderRadius: '0',
        border: 'none',
        borderBottom: border,
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      {buttonContent(
        label,
        size,
        icon,
        hasIcon,
        iconSize,
        secondary,
        reverse,
        spaced,
      )}
    </button>
  );
}

ButtonAccordian.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  hasIcon: PropTypes.bool,
  secondary: PropTypes.bool,
  reverse: PropTypes.bool,
  border: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.string,
  iconSize: PropTypes.string,
  spaced: PropTypes.bool,
};

export default ButtonAccordian;
