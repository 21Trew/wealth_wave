import { Image, Layout, Typography } from "antd";
import React from "react";

import fish_girl from '../assets/fish_girl.png';
import './SectionTwo.styles.css';

const { Title } = Typography;

function SectionTwo() {
    return (
        <Layout className={'sectionTwo'} >
            <Image
                className={'image'}
                preview={false}
                src={fish_girl}
            />

            <div style={{textAlign: 'right', flex: 1}}>
                <Title style={{color: 'white'}}>Section 2 Title</Title>
                <Typography.Text style={{color: 'white', fontSize: '16px'}}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Ante facilisis non taciti facilisi rutrum felis.
                    Egestas libero accumsan vestibulum purus nostra.
                    Luctus orci pharetra condimentum cursus consequat.
                    Amet ullamcorper dui sit eget aliquam massa arcu.
                    Curae interdum pretium dignissim tristique dolor dapibus platea sollicitudin.
                    Habitant pretium etiam a tincidunt magna inceptos.
                </Typography.Text>
            </div>
        </Layout>
    );
}

export default SectionTwo;