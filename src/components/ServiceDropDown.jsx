import "../styles/serviceDropDown.scss";
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import services from "../servicesArr";

const ServiceDropDown = () => {
  console.log("s", services);
  const [visible, setVisible] = useState([]);

  const toggleAnswer = (id) => {
    setVisible((prev) => {
      const newVisible = [...prev];
      newVisible[id] = !newVisible[id];
      return newVisible;
    });
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);

    if (hash) {
      setVisible((prev) => {
        const newVisible = [...prev];
        services.forEach((item, i) => (newVisible[i + 1] = false));
        newVisible[hash] = !newVisible[hash];
        return newVisible;
      });
    }
  }, []);

  return (
    <section className="serviceDropDown">
      <div className="container">
        <TransitionGroup>
          {services.map((service) => (
            <div key={service.id} id={service.id} className="form-group">
              {console.log("serv", service.id, visible[service.id])}
              <div onClick={() => toggleAnswer(service.id)} className="title">
                <div className="expand">
                  {visible[service.id] ? "\u2013" : "+"}
                </div>
                <h2>{service.title}</h2>
              </div>
              <CSSTransition
                in={visible[service.id]}
                timeout={1000}
                classNames="transition"
              >
                <p className={visible[service.id] ? "" : "p"}>
                  {service.value}
                </p>
              </CSSTransition>
            </div>
          ))}
        </TransitionGroup>
      </div>
    </section>
  );
};
export default ServiceDropDown;
