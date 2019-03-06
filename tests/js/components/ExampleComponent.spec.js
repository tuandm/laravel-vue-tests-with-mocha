import { mount } from '@vue/test-utils';
import expect from 'expect';
import ExampleComponent from '../../../resources/js/components/ExampleComponent.vue';

describe('ExampleComponent.vue', () => {
  it('says that it is an example component', () => {
    const wrapper = mount(ExampleComponent);
    expect(wrapper.html()).toContain('Example Component');
  });
});
