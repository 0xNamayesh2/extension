import React, { useState } from 'react';
import { registerRoute } from '../config/routes';
import CorePageWithTabs from '../components/Core/CorePageWithTabs';
import SharedAssetInput from '../components/Shared/SharedAssetInput';
import SharedButton from '../components/Shared/SharedButton';
import SendFeeSelectButton from '../components/Send/SendFeeSelectButton';

export default function Send() {
  const [selectedFee, setSelectedFee] = useState(0);

  return (
    <>
      <CorePageWithTabs>
        <div className="wrap">
          <div className="header">
            <div className="icon_activity_send_medium" />
            <div className="title">Send Asset</div>
          </div>
          <div className="form">
            <div className="form_input">
              <div className="label">
                Asset / Amount <div className="label_right">Max</div>
              </div>
              <SharedAssetInput />
            </div>
            <div className="form_input">
              <div className="label">Send To:</div>
              <SharedAssetInput isTypeDestination />
            </div>
            <div className="label">Network Fee/Speed</div>
            <div className="network_fee_group">
              <div className="network_fee_button">
                <SendFeeSelectButton
                  isActive={selectedFee === 0 && true}
                  onClick={() => {
                    setSelectedFee(0);
                  }}
                />
              </div>
              <div className="network_fee_button">
                <SendFeeSelectButton
                  isActive={selectedFee === 1 && true}
                  onClick={() => {
                    setSelectedFee(1);
                  }}
                />
              </div>
              <div className="network_fee_button">
                <SendFeeSelectButton
                  isActive={selectedFee === 2 && true}
                  onClick={() => {
                    setSelectedFee(2);
                  }}
                />
              </div>
            </div>
            <div className="divider" />
            <div className="total_footer standard_width">
              <div className="total_amount">
                <div className="total_label">Total</div>
                <div className="total_amount_number">0.0</div>
              </div>
              <SharedButton
                type="primary"
                size="large"
                label="Send"
                isDisabled
              />
            </div>
          </div>
        </div>
      </CorePageWithTabs>
      <style jsx>
        {`
          .wrap {
            width: 352px;
          }
          .icon_activity_send_medium {
            background: url('./images/activity_send_medium@2x.png');
            background-size: 24px 24px;
            width: 24px;
            height: 24px;
            margin-right: 8px;
          }
          .title {
            width: 113px;
            height: 32px;
            color: #ffffff;
            font-family: Segment;
            font-size: 22px;
            font-weight: 500;
            line-height: 32px;
          }
          .header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            margin-top: 17px;
          }
          .form_input {
            margin-bottom: 22px;
          }
          .network_fee_group {
            display: flex;
            margin-bottom: 29px;
          }
          .network_fee_button {
            margin-right: 16px;
          }
          .label {
            height: 17px;
            color: var(--green-60);
            font-family: Segment;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0.42px;
            line-height: 16px;
            margin-bottom: 5px;
            margin-left: 7px;
            display: flex;
            justify-content: space-between;
          }
          .label_right {
            margin-right: 6px;
          }
          .total_amount_number {
            width: 150px;
            height: 32px;
            color: #e7296d;
            font-family: Segment;
            font-size: 22px;
            font-weight: 500;
            line-height: 32px;
          }
          .total_footer {
            display: flex;
            justify-content: space-between;
            margin-top: 21px;
            padding-bottom: 20px;
          }
          .total_label {
            width: 33px;
            height: 17px;
            color: var(--green-60);
            font-family: Segment;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0.42px;
            line-height: 16px;
          }
        `}
      </style>
    </>
  );
}

registerRoute('send', Send);
