import { Layout, Typography} from "antd";
import React from "react";

const { Title } = Typography;

function Terms() {
    return (
        <Layout
            style={{
                background: 'transparent',
                padding: '5vh 12vw',
                margin: '10vh 0'
            }}
        >
            <Title style={{margin: '0'}}>Условия использования</Title>

            <Title level={2} style={{margin: '2vh 0'}}>Lorem ipsum odor amet</Title>
            <Typography.Text>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
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
            </Typography.Text>

            <Title level={2} style={{margin: '2vh 0'}}>Lorem ipsum odor amet</Title>
            <Typography.Text>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                    Ante facilisis non taciti facilisi rutrum felis.
                    Egestas libero accumsan vestibulum purus nostra.
                    Luctus orci pharetra condimentum cursus consequat.
                    Amet ullamcorper dui sit eget aliquam massa arcu.
                    Curae interdum pretium dignissim tristique dolor dapibus platea sollicitudin.
                    Habitant pretium etiam a tincidunt magna inceptos.
                </p>
                <p>
                    Phasellus quisque ad hendrerit turpis suspendisse maecenas; faucibus lacinia.
                    Habitasse neque donec potenti aliquet sodales inceptos suscipit senectus.
                    Nulla nascetur volutpat vivamus nostra primis morbi felis lacinia?
                    Hac nullam platea iaculis; accumsan porta magna.
                    Egestas libero accumsan vestibulum purus nostra.
                    Luctus orci pharetra condimentum cursus consequat.
                    Amet ullamcorper dui sit eget aliquam massa arcu.
                </p>
            </Typography.Text>

            <Title level={2} style={{margin: '2vh 0'}}>Lorem ipsum odor amet</Title>
            <Typography.Text>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.Ante facilisis non taciti facilisi rutrum felis.
                </p>
                Lorem ipsum odor amet, consectetuer adipiscing elit.
                Ante facilisis non taciti facilisi rutrum felis.
                Egestas libero accumsan vestibulum purus nostra.
                Luctus orci pharetra condimentum cursus consequat.
                Amet ullamcorper dui sit eget aliquam massa arcu.
                Curae interdum pretium dignissim tristique dolor dapibus platea sollicitudin.
                Habitant pretium etiam a tincidunt magna inceptos.
                Phasellus quisque ad hendrerit turpis suspendisse maecenas; faucibus lacinia.
            </Typography.Text>
        </Layout>
    )
}

export default Terms;
