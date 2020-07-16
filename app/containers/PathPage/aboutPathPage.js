/**
 *
 * About Page
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import styled from 'styled-components';
import { intlShape, injectIntl } from 'react-intl';

import { loadContentIfNeeded } from 'containers/App/actions';
import { getContentByKey, getCloseTargetPage } from 'containers/App/selectors';

import Close from 'containers/Close';
import LoadingIndicator from 'components/LoadingIndicator';
import ContentWrap from 'styled/ContentWrap';
import ContentContainer from 'styled/ContentContainer';
import ContentMaxWidth from 'styled/ContentMaxWidth';
import PageTitle from 'styled/PageTitle';

import rootMessages from 'messages';

const StyledContent = styled.div`
  width: 50%;
  margin-top: 30px;
  margin-bottom: 60px;
  @media (min-width: ${({ theme }) => theme.breakpointsMin.medium}) {
    margin-top: 40px;
  }
  @media (min-width: ${({ theme }) => theme.breakpointsMin.large}) {
    margin-top: 60px;
  }
`;

const StyledContentHeader = styled.div`
  width: 100%;
  margin-top: 36px;
  margin-bottom: 48px;
  height: 260px;
  background-color: #fdf0dc;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledContentInfoBox = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #fdf0dc;
  line-height: 150%;
  font-weight: bold;
  margin-top: 100px;
`;

export function AboutPathPage({
  match,
  onLoadContent,
  // content,
  closeTarget,
  intl,
}) {
  useEffect(() => {
    // kick off loading of page content
    onLoadContent(match.params.page);
  }, [match.params.page]);
  const page = match && match.params.page;
  const pageTitle = intl.formatMessage(rootMessages.page[page]);

  // actual data
  // let bulkContent = content.content
  // dummy data
  let bulkContent =
    '<div><p>---sub-heading</p><p>The Human Rights Measurement Initiative (HRMI) is a unique collaborative venture between human rights practitioners, researchers, academics, and other human rights supporters.</p><p>---end-sub-heading</p><p>---text-section</p><p>Our goal is to produce the first comprehensive set of measurements for tracking the human rights performance of countries.</p><p>Our 2020 data set includes:</p><ul>  <li>Annual data on five economic and social rights for 197 countries (depending on the right) from 2007 to 2017, based on the award-winning <a href="https://serfindex.uconn.edu/">SERF Index</a> methodology.</li>  <li>Annual data on eight civil and political rights for 33 countries for the years 2018 - 2019, or 2017 - 2019 (depending on the country), with more countries added each year.</li></ul><p>Over time we aim to extend our civil and political rights data to the rest of the world, and expand our work to measure more human rights.</p><p>---end-text-section</p><p>---info-box</p><p>Learn more about the Human Rights Measurement Initiative:</p><p><a href="https://humanrightsmeasurement.org/about-hrmi/the-team/">Who are we?</a></p><p><a href="https://humanrightsmeasurement.org/methodology/overview/">Read about our methodology</a></p><p><a href="https://humanrightsmeasurement.org">Visit the main HRMI website</a></p><p><a href="https://humanrightsmeasurement.org/do-you-want-hrmi-human-rights-scores-for-your-country/">Work with us to produce more data for your country</a></p><p><a href="https://humanrightsmeasurement.org/get-involved/exploring-new-workstreams/">Work with us to measure more human rights</a></p><p>---end-info-box</p></div>';

  let subHeading = '';

  const sortText = () => {
    subHeading = bulkContent
      .split('sub-heading')[1]
      .replace('---end-', ' ')
      .replace(/<\W?p>/g, ' ');
    bulkContent = bulkContent.split('---');
  };
  sortText();

  return (
    <ContentWrap>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="Description of Page" />
      </Helmet>
      <ContentContainer direction="column" header>
        <StyledContentHeader>
          <Close closeTarget={closeTarget} />
          <ContentMaxWidth direction="column">
            <PageTitle level={1}>{pageTitle}</PageTitle>
            <p style={{ width: '590px', fontSize: '1.2em', lineHeight: '1.4' }}>
              {subHeading}
            </p>
          </ContentMaxWidth>
        </StyledContentHeader>

        <ContentMaxWidth>
          <StyledContent>
            {/* eslint-disable react/no-danger */}
            {bulkContent &&
              bulkContent.map(section => {
                if (
                  section.includes('text-section') &&
                  !section.includes('end-')
                ) {
                  const sectionReplaced = section.replace('text-section', ' ');
                  return (
                    <p
                      key="text-section"
                      dangerouslySetInnerHTML={{ __html: sectionReplaced }}
                    />
                  );
                }
                if (section.includes('info-box') && !section.includes('end-')) {
                  const sectionReplaced = section.replace('info-box', ' ');
                  return (
                    <StyledContentInfoBox
                      key="info-box"
                      dangerouslySetInnerHTML={{ __html: sectionReplaced }}
                    />
                  );
                }
                return null;
              })}
            {/* eslint-enable react/no-danger */}
            {!bulkContent && <LoadingIndicator />}
          </StyledContent>
        </ContentMaxWidth>
      </ContentContainer>
    </ContentWrap>
  );
}

AboutPathPage.propTypes = {
  match: PropTypes.object,
  onLoadContent: PropTypes.func,
  closeTarget: PropTypes.object,
  // content: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  intl: intlShape.isRequired,
};

const mapStateToProps = createStructuredSelector({
  content: (state, props) => getContentByKey(state, props.match.params.page),
  closeTarget: state => getCloseTargetPage(state),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadContent: page => {
      dispatch(loadContentIfNeeded(page));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(AboutPathPage));