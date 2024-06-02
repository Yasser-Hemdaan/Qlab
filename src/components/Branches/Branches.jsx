// import React from "react";

// css
import styles from "./Branches.module.css";

// Icons
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";

const Branches = () => {
  return (
    <div>
      <div className={`${styles.branchesWrapper}`}>
        <div className={`${styles.text} text-center mx-auto pt-5`}>
          <h2 className={`${styles.mainTitle} mb-5 mx-auto`}>
            عناوين جميع الفروع لدينا
          </h2>
        </div>
        <div
          className={`${styles.branchesBody} customContainer row g-4 mx-auto`}
        >
          <div className={`${styles.item} col-lg-4 col-md-6`}>
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title}`}>our address</h3>
                  <div className={styles.location}>
                    <LiaMapMarkedAltSolid />
                    <div className={`${styles.description}`}>
                      <p>183 marina avenue, miami central mall</p>
                      <p>united state of america</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title}`}>contact information</h3>

                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineMailOutline />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineAddIcCall />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title}`}>opening hour</h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      mon - sat 8:00-18:00
                    </p>
                    <p className={`${styles.close} ${styles.description}`}>
                      monday - closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.item} col-lg-4 col-md-6`}>
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title}`}>our address</h3>
                  <div className={styles.location}>
                    <LiaMapMarkedAltSolid />
                    <div className={`${styles.description}`}>
                      <p>183 marina avenue, miami central mall</p>
                      <p>united state of america</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title}`}>contact information</h3>

                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineMailOutline />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineAddIcCall />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title}`}>opening hour</h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      mon - sat 8:00-18:00
                    </p>
                    <p className={`${styles.close} ${styles.description}`}>
                      monday - closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.item} col-lg-4 col-md-6`}>
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title}`}>our address</h3>
                  <div className={styles.location}>
                    <LiaMapMarkedAltSolid />
                    <div className={`${styles.description}`}>
                      <p>183 marina avenue, miami central mall</p>
                      <p>united state of america</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title}`}>contact information</h3>

                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineMailOutline />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineAddIcCall />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title}`}>opening hour</h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      mon - sat 8:00-18:00
                    </p>
                    <p className={`${styles.close} ${styles.description}`}>
                      monday - closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.item} col-lg-4 col-md-6`}>
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title}`}>our address</h3>
                  <div className={styles.location}>
                    <LiaMapMarkedAltSolid />
                    <div className={`${styles.description}`}>
                      <p>183 marina avenue, miami central mall</p>
                      <p>united state of america</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title}`}>contact information</h3>

                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineMailOutline />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineAddIcCall />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title}`}>opening hour</h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      mon - sat 8:00-18:00
                    </p>
                    <p className={`${styles.close} ${styles.description}`}>
                      monday - closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.item} col-lg-4 col-md-6`}>
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title}`}>our address</h3>
                  <div className={styles.location}>
                    <LiaMapMarkedAltSolid />
                    <div className={`${styles.description}`}>
                      <p>183 marina avenue, miami central mall</p>
                      <p>united state of america</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title}`}>contact information</h3>

                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineMailOutline />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineAddIcCall />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title}`}>opening hour</h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      mon - sat 8:00-18:00
                    </p>
                    <p className={`${styles.close} ${styles.description}`}>
                      monday - closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.item} col-lg-4 col-md-6`}>
            <div className={`${styles.card}`}>
              <div className={`${styles.header}`}></div>
              <div className={`${styles.cardBody} p-4`}>
                <div className={`${styles.address} py-4`}>
                  <h3 className={`${styles.title}`}>our address</h3>
                  <div className={styles.location}>
                    <LiaMapMarkedAltSolid />
                    <div className={`${styles.description}`}>
                      <p>183 marina avenue, miami central mall</p>
                      <p>united state of america</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.contact} py-4`}>
                  <h3 className={`${styles.title}`}>contact information</h3>

                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineMailOutline />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                  <div className={`${styles.data} mb-2`}>
                    <MdOutlineAddIcCall />
                    <p className={`${styles.description}`}>
                      183 marina avenue, miami central mall
                    </p>
                  </div>
                </div>
                <div className={`${styles.hours} py-4`}>
                  <div className={`${styles.icon}`}>
                    <LuClock4 />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3 className={`${styles.title}`}>opening hour</h3>
                    <p className={`${styles.work} ${styles.description}`}>
                      mon - sat 8:00-18:00
                    </p>
                    <p className={`${styles.close} ${styles.description}`}>
                      monday - closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
