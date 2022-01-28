import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: coloumn;
text-align: center;
height: 100uk;
`;

const Content = styled.div`
margin-bottom: 100vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: coloumn;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
background-image: url("/images/login-background.jpg");
z-index: -1;
top: 0;
right: 0;
left: 0;
position: absolute;
background-repeat: no-repeat;
background-size: cover;
background-position: top;
height: 100%;
`;

const CTA = styled.div`
width: 100%;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: coloumn;
`;

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
width: 100%;
margin-bottom: 12px;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 5px;

&:hover {
    background-color: #0483ee;
}
`;

const Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 14px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
margin-bottom: 20px;
max-width: 600px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`;

export default Login;