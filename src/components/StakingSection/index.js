import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
  Input,
  HeroStatistics,
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesH21,
  ServicesIcon,
  ServicesData,
  ServicesP,
  ServicesWrapper,
  ServicesRef
} from "./StakingElements";
import { Row, Col } from "antd";
import { Button } from "../ButtonElement";

const StakingSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const [walletAddress, setWalletAddress] = useState(
    "0x141A8975EB3553749500891Eb4f7cd685EA2fE59"
  );

  return (
    <HeroContainer>
      {/* <HeroBg>
        <VideoBg autoPlay loop playsinline muted src={Video} type="video/mp4" />
      </HeroBg> */}
      <HeroContent>
        <ServicesH1>
          <u>Your Investments</u>
        </ServicesH1>
        <Row gutter={[20, 20]} type="flex">
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <HeroStatistics style={{ height: "100%" }}>
              <ServicesCard style={{ height: "100%" }}>
                <ServicesData>
                  <ServicesH2>Your total deposits</ServicesH2>
                  <ServicesH21>4459751.828</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Available for withdrawal</ServicesH2>
                  <ServicesH21>1000</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Withdrawn</ServicesH2>
                  <ServicesH21>435490.049</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Hold Bonus</ServicesH2>
                  <ServicesH21>0.1%</ServicesH21>
                </ServicesData>
                <Button to="signup" primary="true" dark="true">
                  Withdraw
                </Button>
              </ServicesCard>
            </HeroStatistics>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <HeroStatistics style={{ height: "100%" }}>
              <ServicesCard style={{ height: "100%" }}>
                <ServicesData>
                  <div style={{ display: "block", textAlign: "center" }}>
                    Your referral link is
                  </div>
                  <Input
                    id="Search"
                    type="search"
                    placeholder="Your referral link"
                    value={"https://bscstaker.io?ref=" + walletAddress}
                  />

                  <Button
                    style={{
                      display: "inline-block",
                      width: "calc(30% - 5px)",
                      padding: "5px",
                      marginLeft: "5px"
                    }}
                  >
                    Copy
                  </Button>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Total referral earned</ServicesH2>
                  <ServicesH21>0.1%</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Total referral count</ServicesH2>
                  <ServicesH21>10</ServicesH21>
                </ServicesData>
                <ServicesData
                  style={{ fontWeight: "bold", fontSize: "1.15rem" }}
                >
                  <div>Deposit Atleast Once To Activate Referral Rewards</div>
                </ServicesData>
              </ServicesCard>
            </HeroStatistics>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <HeroStatistics style={{ height: "100%" }}>
              <ServicesCard style={{ height: "100%" }}>
                <ServicesP>Earn BNB By Inviting People To BSCStaker</ServicesP>
                <ServicesData>
                  <ServicesH2>Level 1</ServicesH2>
                  <ServicesH21>5%</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Level 2</ServicesH2>
                  <ServicesH21>4%</ServicesH21>
                </ServicesData>
                <ServicesData>
                  <ServicesH2>Level 3</ServicesH2>
                  <ServicesH21>3%</ServicesH21>
                </ServicesData>
              </ServicesCard>
            </HeroStatistics>
          </Col>
        </Row>
      </HeroContent>
    </HeroContainer>
  );
};

export default StakingSection;

//Your total deposits
// getUserTotalDeposits(address)

//available for withdrawal
//getUserDividends(address)

//withdrawn
// getUserWithdrawn(address)

//Hold bonus
// getUserPercentRate(userAddress)

//developer wallet
// 0x141A8975EB3553749500891Eb4f7cd685EA2fE59

//total referral earned
//getUserReferralTotalBonus(address)

//total referral count
//getUserDownlineCount(address)
