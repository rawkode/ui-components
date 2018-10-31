import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import { Column } from '../src/grid/column';
import { Row } from '../src/grid/row';
import { QuadInput } from '../src/quad-input';
import { StatefulTextInput, TextInput } from '../src/text-input';

const stories = storiesOf('Text Input', module);

class QuadInputContainer extends Component<any, any> {
  
  public state = {
    values: {
      bottom: 3,
      left: 4,
      right: 2,
      top: 1,
    }
  }

  public render() {
    return (
      <QuadInput
        id="quad-input"
        onChange={this.onChange} 
        units="px"
        values={this.state.values}
      />
    )
  }

  private onChange = (e: any, v: any) => {
    const { top, right, bottom, left } = v;
    action(`Quad Input Changed, { top: ${top}, right: ${right}, bottom: ${bottom}, left: ${left} }`)();

    this.setState({ values: v });
  }
}

stories.add('Text Input Simple', () => (
  <StatefulTextInput
    type="text"
    label="Test Input"
    isRequired={true}
    isValid={true}
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
  />
));

stories.add('Text Input Simple with a value', () => (
  <StatefulTextInput
    type="text"
    label="Test Input"
    isRequired={true}
    isValid={true}
    value="omg wuuuut"
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
  />
));
stories.add('Text Input Large', () => (
  <StatefulTextInput
    type="text"
    label="Large Input"
    isLarge={true}
    isValid={true}
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
  />
));

stories.add('Text Input With Info', () => (
  <StatefulTextInput
    type="text"
    label="An Input"
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
    info="This test input is better then your test input."
  />
));

stories.add('Text Input With Error', () => (
  <StatefulTextInput
    type="text"
    label="An Input"
    isValid={false}
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
    info="This test input is wrong somehow."
  />
));

stories.add('Text Input Is Disabled', () => (
  <StatefulTextInput
    type="text"
    label="An Input"
    isDisabled={true}
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
  />
));

stories.add('Text Input With Numbers', () => (
  <StatefulTextInput
    type="number"
    label="A Number"
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
    info="This input always returns a number, not a string."
  />
));

stories.add('Text Input With Units (px)', () => (
  <Row>
    <Column width={1}>
      <StatefulTextInput
        type="number"
        id="test-input-simple"
        onChange={action('Input Changed')}
        onBlur={action('onBlur Called')}
        units="px"
      />
    </Column>
  </Row>
));

stories.add('Text Input With Icon & Units (px)', () => (
  <Row>
    <Column width={1}>
      <StatefulTextInput
        type="number"
        id="test-input-simple"
        onChange={action('Input Changed')}
        onBlur={action('onBlur Called')}
        units="px"
        icon="left"
      />
    </Column>
  </Row>
));

stories.add('Text Input With Units (%)', () => (
  <Row>
    <Column width={1}>
      <StatefulTextInput
        type="number"
        id="test-input-simple"
        onChange={action('Input Changed')}
        onBlur={action('onBlur Called')}
        units="%"
      />
    </Column>
  </Row>
));

stories.add('Quad Input', () => <QuadInputContainer />);

stories.add('Stateless Text Input with a Value Passed as a Prop', () => (
  <TextInput
    type="text"
    label="Stateless Input"
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
    value="Passed-In Value"
  />
));

stories.add('Stateless Text Input with No Value Passed In', () => (
  <TextInput
    type="text"
    label="Stateless Input"
    name="simple"
    id="test-input-simple"
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
  />
));

stories.add('Stateless Text Input with a Component Passed as Info prop', () => (
  <TextInput
    type="text"
    label="Stateless Input"
    name="simple"
    id="test-input-simple"
    info={<a href="#">Test Info Link</a>}
    onChange={action('Input Changed')}
    onBlur={action('onBlur Called')}
  />
));
