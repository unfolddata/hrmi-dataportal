import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

import BarHorizontal from 'components/BarHorizontal';

import formatScoreMax from 'utils/format-score-max';
import DimensionTitle from './DimensionTitle';

const DimensionScoreWrapper = props => <Box {...props} width="200px" />;
const DimensionScoreText = props => <Text weight="bold" {...props} />;
const BarWrap = props => <Box direction="row" {...props} align="center" />;

function DimensionChart({
  dimensionKey,
  column,
  refColumns,
  data,
  maxValue,
  unit = '',
  standard,
}) {
  const value =
    data && data.score && data.score[column] && parseFloat(data.score[column]);
  const refValues =
    refColumns &&
    data &&
    data.score &&
    refColumns.map(refColumn => ({
      value: refColumn.value || data.score[refColumn.column],
      style: refColumn.style,
      key: refColumn.key,
    }));
  return (
    <Box>
      <DimensionTitle dimensionKey={dimensionKey} />
      <BarWrap>
        <BarHorizontal
          color={dimensionKey}
          data={data}
          value={value}
          minValue={0}
          maxValue={maxValue}
          unit={unit}
          stripes={dimensionKey === 'esr' && standard === 'hi'}
          refValues={refValues}
        />
        <DimensionScoreWrapper>
          <DimensionScoreText color={`${dimensionKey}Dark`}>
            {value && formatScoreMax(value, maxValue)}
            {!value && 'N/A'}
          </DimensionScoreText>
        </DimensionScoreWrapper>
      </BarWrap>
    </Box>
  );
}

DimensionChart.propTypes = {
  dimensionKey: PropTypes.string,
  column: PropTypes.string,
  unit: PropTypes.string,
  standard: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  maxValue: PropTypes.number,
  refColumns: PropTypes.array,
};

export default DimensionChart;
