import Layout from '../../components/layout'
import App from "../../components/app";

export default function Board() {

    return (
        <Layout page={"board"}>
            <div className="container">
                <div className="block">

                <div className="container has-text-centered">
                    <p className="title main">
                        Board
                    </p>
                </div>
                </div>
                <div className="box">
                    <App/>
                </div>

            </div>
        </Layout>
    )
}