import styled from "styled-components";
import { useState } from "react";
import { init, send } from 'emailjs-com';

export const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [company, setCompany] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');

    const sendMail = () => {
        const userID = process.env.REACT_APP_USER_ID = eD63Cw0bHcRgTBzKy;
        const serviceID = process.env.REACT_APP_SERVICE_ID = service_0t6p0aw;
        const templateID = process.env.REACT_APP_TEMPLATE_ID = template_mh2lhpf;

        if (
            userID !== undefined &&
            serviceID !== undefined &&
            templateID !== undefined
        ) {
            init(userID);
            const template_param = {
                to_name: fullName,
                company: company,
                from_email: mail,
                message: message,
            };

            send(serviceID, templateID, template_param).then(() => {
                window.alert('Thank you for your inquiry.');
                setFullName('');
                setCompany('');
                setMail('');
                setMessage('');
            });
        }
    }
    const handleClick = (e) => {
        e.preventDefault();
        sendMail();
    };

  // 必須項目
    const disableSend = fullName === '' || mail === '' || message === '';

    return (
    <SContainer>
      <STitle>Contact</STitle>
      <SForm>
          <SInput
            type="text"
            value={fullName}
            placeholder='Your name'
            onChange={(e) => setFullName(e.target.value)}
          />
          <SInput
            type="text"
            required
            value={company}
            placeholder='Company Name'
            onChange={(e) => setCompany(e.target.value)}
          />
          <SInput
            type="email"
            value={mail}
            placeholder='Email address'
            onChange={(e) => setMail(e.target.value)}
          />
          <STextarea
            type="text"
            rows="10"
            value={message}
            placeholder='Please write your message.'
            onChange={(e) => setMessage(e.target.value)}
            />
            <SButton
            onClick={handleClick}
            disabled={disableSend}
            >
            Submit
            </SButton>
        </SForm>
    </SContainer>
    );
}

const SContainer = styled.div`
  min-height: 100vh;
`

const STitle = styled.h2`
  font-family: 'Noto Serif',serif;
  text-align: center;
  font-size: 24px;
  letter-spacing: .08em;
`

const SForm = styled.form`
  min-width: 300px;
  max-width: 550px;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const SInput = styled.input`
  height: 36px;
  padding: 0 12px;
  margin: 24px 0 0 0;
`

const STextarea = styled.textarea`
  padding: 12px 12px 0;
  margin: 24px 0 0 0;
`

const SButton = styled.button`
  height: 40px;
  margin: 24px 0 0 0;
  background: #bea76f;
  :disabled {
    background: gray;
  }
`