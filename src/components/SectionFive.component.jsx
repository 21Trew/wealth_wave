import { Image, Layout, Typography } from "antd";
import React from "react";

import crab from '../assets/crab.png'
import warning18 from "../assets/18.svg";
import './SectionFive.styles.css';

const { Title } = Typography;

function SectionFive() {
    return (
        <Layout className={'sectionFive'}>
            <Title style={{color: 'white'}}>Section 5 Title</Title>
            <div className="crab-container">
                <Image
                    className="crab"
                    preview={false}
                    src={crab}
                />
            </div>
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
                <p><b>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Ante facilisis non taciti facilisi rutrum felis.
                    Egestas libero accumsan vestibulum purus nostra.
                    Luctus orci pharetra condimentum cursus consequat.
                </b></p>
                <p><b>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Ante facilisis non taciti facilisi rutrum felis.
                    Egestas libero accumsan vestibulum purus nostra.
                    Luctus orci pharetra condimentum cursus consequat.
                </b></p>
            </Typography.Text>
            <Image
                preview={false}
                style={{ width: '13vw', margin: '20px 0' }}
                src={warning18}
            />
        </Layout>
    )
}

export default SectionFive;
