import {render, RenderOptions} from '@testing-library/react';
import * as React from 'react';
import Providers from './Providers';

/** Use the theme provider to render the tests. */
const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
  return render(ui, {wrapper: Providers, ...options});
};

export * from '@testing-library/react';
export {customRender as render};
