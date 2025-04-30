import React from 'react';
import { Row, Col, Typography, Card, Button } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: '40px' }}>
      {/* About Us Section */}
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={14}>
          <Title level={2}>About Us</Title>
          <Paragraph>
            HubSpot’s company and culture are a lot like our product. They’re crafted, not cobbled, for a delightful experience.
          </Paragraph>
        </Col>
        <Col xs={24} md={10}>
          <img
            src="https://www.apple.com/v/education-initiative/b/images/overview/hero_santa_fe__gholm0l4w9im_xlarge.jpg"
            alt="Team"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Col>
      </Row>

      {/* Mission Section */}
      <Row gutter={[32, 32]} align="middle" style={{ marginTop: '80px' }}>
        <Col xs={24} md={10}>
          <img
            src="https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/istock-151597880.jpg?itok=zv65Onys"
            alt="Mission"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Col>
        <Col xs={24} md={14}>
          <Title level={3}>Our Mission: Helping Millions of Organizations Grow Better</Title>
          <Paragraph>
            We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers. Win-win!
          </Paragraph>
        </Col>
      </Row>

      {/* Story Section */}
      <Row gutter={[32, 32]} align="middle" style={{ marginTop: '80px' }}>
        <Col xs={24} md={14}>
          <Title level={3}>Our Story</Title>
          <Paragraph>
            In 2006, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads, they wanted helpful information.
            In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.
          </Paragraph>
          <Paragraph>
            Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today.
          </Paragraph>
        </Col>
        <Col xs={24} md={10}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMPTtv8JzQ3mKNlZrd5uXcPGfRXGtq6G4_Q&s"
            alt="Story"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Col>
      </Row>

      {/* By the Numbers Section */}
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <Title level={3}>HubSpot By the Numbers</Title>
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: '40px' }}>
          <Col xs={24} sm={8}>
            <Card bordered={false}>
              <Title level={4}>12 Global Offices</Title>
              <Button type="link">Learn more</Button>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card bordered={false}>
              <Title level={4}>7,600+ Employees</Title>
              <Button type="link">Learn more</Button>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card bordered={false}>
              <Title level={4}>205,000+ Customers</Title>
              <Button type="link">Learn more</Button>
            </Card>
          </Col>
        </Row>

        {/* Awards Section */}
        <div style={{ marginTop: '60px' }}>
          <img
            src="https://www.shutterstock.com/shutterstock/photos/767491552/display_1500/stock-vector-education-tree-of-knowledge-and-open-book-effective-modern-education-template-design-back-to-767491552.jpg"
            alt="Awards"
            style={{ width: '100%', maxWidth: '700px' }}
          />
          <div style={{ marginTop: '20px' }}>
            <Paragraph>Voted #1 in 318 categories</Paragraph>
            <Button type="link">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

