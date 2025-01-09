import { Image, Layout, Typography} from "antd";

import warning18 from '../assets/18.svg'
import React from "react";

const { Title } = Typography;

function SectionOne() {
    return (
        <Layout
            style={{
                backgroundImage: 'linear-gradient(180deg,#37b0c3 0%,#162566 100%)',
                padding: '5vh 12vw',
                marginBottom: '20vh'
            }}
        >
            <Title style={{color: 'white'}}>Section 1 Title</Title>
            <Image
                preview={false}
                style={{ width: '13vw', marginBottom: '20px' }}
                src={warning18}
            />
            <Typography.Text style={{color: 'white', fontSize: '16px'}}>
                Lorem ipsum odor amet, consectetuer adipiscing elit.
                Ante facilisis non taciti facilisi rutrum felis.
                Egestas libero accumsan vestibulum purus nostra.
                Luctus orci pharetra condimentum cursus consequat.
                Amet ullamcorper dui sit eget aliquam massa arcu.
                Curae interdum pretium dignissim tristique dolor dapibus platea sollicitudin.
                Habitant pretium etiam a tincidunt magna inceptos.
                Phasellus quisque ad hendrerit turpis suspendisse maecenas; faucibus lacinia.
                Habitasse neque donec potenti aliquet sodales inceptos suscipit senectus.
                Nulla nascetur volutpat vivamus nostra primis morbi felis lacinia?
                Hac nullam platea iaculis; accumsan porta magna.
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </Typography.Text>
        </Layout>
    )
}

export default SectionOne;
