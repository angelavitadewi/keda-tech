import { Card, Col, Row } from 'antd';

function Pricing() {
  return (
    <>
      <div className='site-card-wrapper'>
        <div className='headerhome'>
          <h1>Our Product</h1>
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
            <Card title='Basic ($50)' bordered={false}>
              <ol>
                <li>Mencatat barang masuk</li>
                <li>Mencatat barang keluar</li>
                <li>Mencatat hasil keuntungan</li>
              </ol>
            </Card>
          </Col>
          <Col span={6}>
            <Card title='Business ($150)' bordered={false}>
              <ol>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
                <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                <li>Support 7x24 Jam</li>
              </ol>
            </Card>
          </Col>
          <Col span={6}>
            <Card title='Entrepreneur ($250)' bordered={false}>
              <ol>
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
                <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                <li>Support 7x24 Jam</li>
                <li>Export data ke Excel</li>
                <li>AI Prediksi penghasilan</li>
              </ol>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Pricing;
