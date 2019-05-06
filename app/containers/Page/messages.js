/*
 * Page Messages
 *
 * This contains all the text for the Page container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Page';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Page container!',
  },
});
