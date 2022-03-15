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
} from "./InvestmentsElements";
import { Button } from "../ButtonElement";
import { Row, Col } from "antd";

const Investments = () => {
  const [plans, setPlans] = useState([
    {
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime"
    },
    {
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime"
    },
    {
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime"
    },
    {
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime",
      period: "7",
      dailyProfit: "8",
      totalProfit: "56",
      withdrawl: "Anytime"
    }
  ]);
  return (
    <ServicesContainer id="services">
      <ServicesH1>
        <u>Your Stakes</u>
      </ServicesH1>
      <Row gutter={[40, 40]}>
        {plans.map((plan, i) => (
          <Col xs={24} sm={24} md={12} lg={12} xl={12} key={i}>
            <ServicesCard>
              {/* <ServicesP>Plan {i + 1}</ServicesP> */}
              <ServicesData>
                <ServicesH2>Plan </ServicesH2>
                <ServicesH21>{plan?.period} Days</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Daily Profit </ServicesH2>
                <ServicesH21>{plan?.dailyProfit}%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Total Profit </ServicesH2>
                <ServicesH21>{plan?.totalProfit}%</ServicesH21>
              </ServicesData>
              <ServicesData>
                <ServicesH2>Withdrawal </ServicesH2>
                <ServicesH21>{plan?.withdrawl}</ServicesH21>
              </ServicesData>
            </ServicesCard>
          </Col>
        ))}
      </Row>
    </ServicesContainer>
  );
};

export default Investments;

// getUserAmountOfDeposits(address); //get total array
// getUserDepositInfo(address, index); //loop to get indidivual info
