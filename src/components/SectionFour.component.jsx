import React from "react";
import { Layout, Typography} from "antd";

import './SectionFour.styles.css';

function SectionFour() {
    return (
        <Layout className={'sectionFour'}>
            <Typography.Title style={{color: 'white'}}>Section 4 Title</Typography.Title>

            <Layout className={'sectionFour-cards'} >
                <div>
                    <Typography.Title level={2}>Section 4 Subtitle 1:</Typography.Title>
                    <Typography.Text>
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Ante facilisis non taciti facilisi rutrum felis.
                        Egestas libero accumsan vestibulum purus nostra.
                        Luctus orci pharetra condimentum cursus consequat.
                    </Typography.Text>
                </div>
                <div>
                    <Typography.Title level={2}>Section 4 Subtitle 2:</Typography.Title>
                    <Typography.Text>
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Ante facilisis non taciti facilisi rutrum felis.
                        Egestas libero accumsan vestibulum purus nostra.
                        Luctus orci pharetra condimentum cursus consequat.
                    </Typography.Text>
                </div>
                <div>
                    <Typography.Title level={2}>Section 4 Subtitle 3:</Typography.Title>
                    <Typography.Text>
                        Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Ante facilisis non taciti facilisi rutrum felis.
                        Egestas libero accumsan vestibulum purus nostra.
                        Luctus orci pharetra condimentum cursus consequat.
                    </Typography.Text>
                </div>
            </Layout>
        </Layout>
    )
}

export default SectionFour;
