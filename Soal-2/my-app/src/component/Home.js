import { Row, Col } from 'antd';
import person from '../asset/person.png';

function Home() {
  return (
    <>
      <Row justify='end' align='middle'>
        <Col span={16} className='headerhome'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua
        </Col>
      </Row>
      <Row justify='start' align='middle'>
        <Col span={12} className='headerhome'>
          <i>"Excepteur sint occaecat cupidatat non proident"</i>
          <img alt='person' src={person} />
        </Col>
      </Row>
    </>
  );
}

export default Home;
