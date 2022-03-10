import React from "react";
import {Row, Col, Button, BackTop, Layout, Menu} from "antd";
import {Footer, Header} from "antd/lib/layout/layout";
import {
    InstagramOutlined,
    FacebookOutlined,
    WhatsAppOutlined,
    HomeOutlined,
    BankOutlined,
    CameraOutlined,
} from "@ant-design/icons";
import Subtitlesection from "../generics/Subtitlesection";
import Link from "next/link";

export default function Rodape() {
    const valueSubtitle = [
        {id: "0_rodape", text: "Contato"},
        {id: "1_rodape", text: "Links Especiais"},
        {id: "2_rodape", text: "Redes Sociais"},
    ];

    return (
        <Layout>
            <Footer>
                <div className="container">
                    <Row>
                        <Col flex="0 1 150px">
                            <figure>
                                <img
                                    src="./logo.png"
                                    alt="logotipo empresa construsonho engenharia"
                                    style={{width: "100%"}}
                                />
                            </figure>
                        </Col>
                        <Col flex="1 2 250px">
                            <Subtitlesection {...valueSubtitle[0]} />
                            <div className="outhertexts">
                                <p>Av. Celeste, 310, carapicuiba</p>
                                <p>Tel. (11) 4141-6556</p>
                                <p>+55 11 95071-1314</p>
                            </div>
                        </Col>
                        <Col flex="0 1 150px">
                            <Subtitlesection {...valueSubtitle[2]} />
                            <Button type="text" href="/" icon={<InstagramOutlined/>}>
                                Instagram
                            </Button>
                            <Button type="text" href="/" icon={<FacebookOutlined/>}>
                                Facebook
                            </Button>
                            <Button type="text" href="/" icon={<WhatsAppOutlined/>}>
                                WhatsApp
                            </Button>
                        </Col>
                        <Col flex="0 1 150px">
                            <Subtitlesection {...valueSubtitle[1]} />
                            <Button type="text" href="/" icon={<HomeOutlined/>}>
                                Home
                            </Button>
                            <Button type="text" href="/About" icon={<BankOutlined/>}>
                                Sobre
                            </Button>
                            <Button type="text" href="/Gallery" icon={<CameraOutlined/>}>
                                Galeria
                            </Button>
                        </Col>

                        <Col flex="1 1 100px" align={"center"}>
                            {/*<BackTop style={{bottom: "4.5em", right: "2em"}}>*/}
                            <figure style={{width: "5rem"}}>
                                <img
                                    src="./backtop.png"
                                    alt="voltar ao inicio da página"
                                    style={{width: "100%"}}
                                />
                            </figure>
                            {/*</BackTop>*/}
                        </Col>
                    </Row>
                </div>
            </Footer>
            <div className="rodape">
              <span className="spansection">
                Engenheiro Civil: Wedson dos Santos - CREA/SP: 5070620780
              </span>
            </div>
        </Layout>
    );
}
