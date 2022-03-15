import React, { useState } from "react";
import Icon1 from "../../images/1.svg";
import Icon2 from "../../images/2.svg";
import Icon3 from "../../images/3.svg";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesH21,
  ServicesIcon,
  ServicesData,
  ServicesP,
  Input,
  ServicesWrapper
} from "./ServicesElements";
import { Button } from "../ButtonElement";
import { Row, Col } from "antd";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>
        <u>Our Plans</u>
      </ServicesH1>
      <ServicesWrapper>
        <Row gutter={[40, 40]}>
          <Col xs={16} sm={16} md={8} lg={8} xl={8}>
            <ServicesCard>
              <ServicesP>Plan 1</ServicesP>
              <ServicesData>
                <ServicesH2>Plan </ServicesH2>
                <ServicesH21>14 Days</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Daily Profit </ServicesH2>
                <ServicesH21>8%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Total Profit </ServicesH2>
                <ServicesH21>112%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Withdrawal </ServicesH2>
                <ServicesH21>Any Time</ServicesH21>
              </ServicesData>
              <Input id="Search" type="search" placeholder="Enter Qty" />
              <Button to="signup" primary="true" dark="true">
                Stake
              </Button>
            </ServicesCard>
          </Col>
          <Col xs={16} sm={16} md={8} lg={8} xl={8}>
            <ServicesCard>
              <ServicesP>Plan 2</ServicesP>
              <ServicesData>
                <ServicesH2>Plan </ServicesH2>
                <ServicesH21>21 Days</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Daily Profit </ServicesH2>
                <ServicesH21>9%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Total Profit </ServicesH2>
                <ServicesH21>189%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Withdrawal </ServicesH2>
                <ServicesH21>Any Time</ServicesH21>
              </ServicesData>
              <Input id="Search" type="search" placeholder="Enter Qty" />
              <Button to="signup" primary="true" dark="true">
                Stake
              </Button>
            </ServicesCard>
          </Col>
          <Col xs={16} sm={16} md={8} lg={8} xl={8}>
            <ServicesCard>
              <ServicesP>Plan 3</ServicesP>
              <ServicesData>
                <ServicesH2>Plan </ServicesH2>
                <ServicesH21>28 Days</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Daily Profit </ServicesH2>
                <ServicesH21>10%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Total Profit </ServicesH2>
                <ServicesH21>280%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Withdrawal </ServicesH2>
                <ServicesH21>Any Time</ServicesH21>
              </ServicesData>
              <Input id="Search" type="search" placeholder="Enter Qty" />
              <Button to="signup" primary="true" dark="true">
                Stake
              </Button>
            </ServicesCard>
          </Col>
          <Col xs={16} sm={16} md={8} lg={8} xl={8}>
            <ServicesCard>
              <ServicesP>Plan 4</ServicesP>
              <ServicesData>
                <ServicesH2>Plan </ServicesH2>
                <ServicesH21>14 Days</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Daily Profit </ServicesH2>
                <ServicesH21>8%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Total Profit </ServicesH2>
                <ServicesH21>293%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Withdrawal </ServicesH2>
                <ServicesH21>At the end</ServicesH21>
              </ServicesData>
              <Input id="Search" type="search" placeholder="Enter Qty" />
              <Button to="signup" primary="false" dark="false">
                Stake
              </Button>
            </ServicesCard>
          </Col>
          <Col xs={16} sm={16} md={8} lg={8} xl={8}>
            <ServicesCard>
              <ServicesP>Plan 5</ServicesP>
              <ServicesData>
                <ServicesH2>Plan </ServicesH2>
                <ServicesH21>21 Days</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Daily Profit </ServicesH2>
                <ServicesH21>8%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Total Profit </ServicesH2>
                <ServicesH21>503%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Withdrawal </ServicesH2>
                <ServicesH21>At the end</ServicesH21>
              </ServicesData>
              <Input id="Search" type="search" placeholder="Enter Qty" />
              <Button to="signup" primary="false" dark="false">
                Stake
              </Button>
            </ServicesCard>
          </Col>
          <Col xs={16} sm={16} md={8} lg={8} xl={8}>
            <ServicesCard>
              <ServicesP>Plan 6</ServicesP>
              <ServicesData>
                <ServicesH2>Plan </ServicesH2>
                <ServicesH21>28 Days</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Daily Profit </ServicesH2>
                <ServicesH21>8%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Total Profit </ServicesH2>
                <ServicesH21>862%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Withdrawal </ServicesH2>
                <ServicesH21>At the end</ServicesH21>
              </ServicesData>
              <Input id="Search" type="search" placeholder="Enter Qty" />
              <Button to="signup" primary="false" dark="false">
                Stake
              </Button>
            </ServicesCard>
          </Col>
        </Row>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

//invest:
// const options = { value: ethers.utils.parseEther("0.1") };
// const reciept = await bnbStaker.invest(
//   "0x820756c16b9117F17bB2eE190A165abD773B2545",
//   0,
//   options
// );
