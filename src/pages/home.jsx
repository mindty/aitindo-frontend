import { Image } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import SuccusLiquritia from "../assets/succus.png";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="container-base">
        <Parallax speed={-10}>
          <div className="container-content">
            <div className="content-1 d-flex justify-content-center align-items-center">
              <div className="col-6"></div>

              <div className="col-6">
                <Parallax opacity={[3, 0]}>
                  <p className="text1-1">gak semua orang tahu kalau</p>
                  <p className="text1-2">
                    batuk itu <br></br>bukan penyakit
                  </p>
                  <div className="borderline-1 mb-2"></div>
                  <p className="text1-3">
                    batuk adalah respon alami tubuh untuk melindungi tubuh
                    terhadap benda asing (kuman, bakteri, virus) yang masuk ke
                    dalam tubuh
                  </p>
                </Parallax>
              </div>
            </div>

            <Parallax opacity={[0, 3]}>
              <div className="content-2 row">
                <div className="content-2-1 col-md-4 col-sm-12 col-xs-12 d-flex justify-content-right align-items-center">
                  <div className="row d-flex justify-content-end">
                    <div className="borderline-2 mt-2"></div>
                    <p className="text2-1-1">terdapat</p>
                    <p className="text2-1-21">2 jenis</p>
                    <p className="text2-1-22">batuk</p>
                    <p className="text2-1-3">
                      yaitu batuk berdahak <br></br>dan batuk tidak berdahak
                    </p>
                    <div className="borderline-2 mb-1"></div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <p className="text2-2-1">batuk tidak berdahak</p>
                  <p className="text2-2-2">
                    disebabkan oleh terjadinya kejang pada saluran pernafasan
                    yang menjadi respon terhadap iritasi di tenggorokan.
                  </p>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <p className="text2-2-1">batuk berdahak</p>
                  <p className="text2-2-2">
                    disebabkan karena membran yang melapisi saluran pernafasan
                    menghasilkan dahak yang berlebih sehingga harus dikeluarkan
                    oleh tubuh. terkadang dahak sulit dikeluarkan oleh tubuh
                    sehingga dibutuhkan obat batuk yang bersifat ekspektoran.
                  </p>
                </div>
              </div>
            </Parallax>

            <div className="content-3 d-flex justify-content-center align-items-center">
              <div className="text3 col-md-6 col-sm-12 ">
                <div className="row justify-content-end">
                  <p className="text3-1">succus liquritiae</p>
                  <div className="borderline-3 mb-4"></div>
                  <p className="text3-2">
                    merupakan salah satu bahan alami yang telah dibudidayakan
                    sejak abad ke-13 dan dipercaya serta digunakan sebagai bahan
                    dasar obat-obatan alami maupun modern.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 ">
                <Parallax scale={[0.5, 1, "easeInQuad"]}>
                  <Image src={SuccusLiquritia} alt="Succus Liquritia" fluid />
                </Parallax>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default Home;
