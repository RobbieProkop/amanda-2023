import "../styles/serviceDropDown.scss";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import services from "../helpers/servicesArr";

const ServiceDropDown = ({ services }) => {
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
          {services.map((service) => {
            const { Content, frontmatter } = service;

            String;
            return (
              <div
                key={frontmatter.id}
                id={frontmatter.id}
                className="form-group"
              >
                <div
                  onClick={() => toggleAnswer(frontmatter.id)}
                  className="title"
                >
                  <div className="expand">
                    {visible[frontmatter.id] ? "\u2013" : "+"}
                  </div>
                  <h2>{frontmatter.title}</h2>
                </div>
                <CSSTransition
                  in={visible[frontmatter.id]}
                  timeout={1000}
                  classNames="transition"
                >
                  <p className={visible[frontmatter.id] ? "" : "p"}>
                    <ReactMarkdown source={Content} />
                  </p>
                </CSSTransition>
              </div>
            );
          })}
        </TransitionGroup>
      </div>
    </section>
  );
};
export default ServiceDropDown;
