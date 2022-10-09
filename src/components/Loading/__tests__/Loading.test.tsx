import { shallow } from 'enzyme';

import { describe, it, expect } from '@jest/globals';

import { Loading } from '../Loading';
import { LoadingView } from '../LoadingView';

describe('ActiveFilters', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper.find(LoadingView)).toHaveLength(1);
  });
});
