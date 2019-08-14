import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class IntegerStep extends React.Component {
  state = {
    minValue: 20,
    maxValue: 50
  };

  onChange = value => {
    this.setState({
      minValue: value
    });
  };

  onAfterChange = value => {
    this.setState({
      maxValue: value
    });
  };

  render() {
    const { minValue, maxValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof minValue === 'number' ? minValue : 0}
          />

          <Slider
            range
            defaultValue={[20, 50]}
            onChange={this.onChange}
            onAfterChange={this.onAfterChange}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={minValue}
            onChange={this.onChange}
          />
        </Col>

        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={maxValue}
            onChange={this.onAfterChange}
          />
        </Col>
      </Row>
    );
  }
}

export default IntegerStep;
