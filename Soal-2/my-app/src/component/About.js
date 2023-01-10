import { Card, Col, Row } from 'antd';

function About() {
  return (
    <>
      <div className='site-card-wrapper'>
        <div className='headerhome'>
          <h1>Welcome To Our Website!</h1>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting
          </p>
        </div>
        <Row gutter={16} justify='space-around' className='headerhome'>
          <Col span={6}>
            <Card title='Visi' bordered={false}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting
            </Card>
          </Col>
          <Col span={6}>
            <Card title='Misi' bordered={false}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting
            </Card>
          </Col>
          <Col span={6}>
            <Card title='Tujuan' bordered={false}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;
