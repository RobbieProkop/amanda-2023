import "../styles/serviceCards.scss";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ServiceCards = () => {
  const [visible, setVisible] = useState([]);

  const services = [
    {
      id: "1",
      title: "Theraputic Massage",
      value:
        "This includes a tendency to experience intense anxiety over relatively small things, as well as difficulty with emotional closeness in relationships with others.",
    },
    {
      id: "2",
      title: "Relaxation Massage",
      value:
        "Panic attacks are sudden, often unexplained episodes of severe anxiety accompanied by distressing sensations such as palpitations, choking, chest pain, dizziness, diarrhea, and nausea. Panic attacks are characterized by a rapid increase in fear and typically have a short duration. They are often accompanied by various fears such as fear of death, fear of going crazy, or fear of losing control.",
    },
    {
      id: "3",
      title: "Trauma Informed Massage",
      value:
        "This psychological process is related to the mechanisms of psychological defense. It consists in the unconscious conviction that one is able to control everything. A natural consequence of such a conviction is a person's sense of responsibility for everything around and feelings of guilt or anxiety that arise if something gets out of control. Additionally, it can cause difficulty in fully relaxing the body and a lack of internal permission to rest, relax, and let go of control.",
    },
    {
      id: "4",
      title: "Craniosacral Therapy",
      value:
        "These are disorders that manifest at the physiological level and are exacerbated by stress, as well as physiological disorders that manifest at the mental level.",
    },
    {
      id: "5",
      title: "Cupping",
      value:
        "This includes a subjective, negative evaluation of oneself, identification of errors and shortcomings, and self-criticism.",
    },
    {
      id: "6",
      title: "Reiki",
      value:
        "This involves not recognizing reality as it is and not accepting oneself for one's body, character traits, and abilities. This can lead to a lack of calm and clear attention to one's capabilities and existing limitations.",
    },
  ];

  const toggleAnswer = (id) => {
    setVisible((prev) => {
      const newVisible = [...prev];
      newVisible[id] = !newVisible[id];
      return newVisible;
    });
  };

  return (
    <section className="serviceCards">
      <div className="container">
        <TransitionGroup>
          {services.map((service) => (
            <div key={service.id} id={service.id} className="form-group">
              <div onClick={() => toggleAnswer(service.id)} className="title">
                <div className="expand">
                  {visible[service.id] ? "\u2013" : "+"}
                </div>
                <h2>{service.title}</h2>
              </div>
              <CSSTransition
                in={visible[service.id]}
                timeout={1000}
                unmountOnExit
                classNames="transition"
              >
                <p>{service.value}</p>
              </CSSTransition>
            </div>
          ))}
        </TransitionGroup>

        {/* <div class="form-group">
          <div class="title">
            <div class="expand">+</div>
            <h2>Service 1</h2>
          </div>
          <p></p>
        </div>
        <div class="form-group">
          <div class="title">
            <div class="expand">+</div>
            <h2>Service 2</h2>
          </div>
          <p></p>
        </div>
        <div class="form-group">
          <div class="title">
            <div class="expand">+</div>
            <h2>Service 3</h2>
          </div>
          <p></p>
        </div>
        <div class="form-group">
          <div class="title">
            <div class="expand">+</div>
            <h2>Service 4</h2>
          </div>
          <p></p>
        </div>
        <div class="form-group">
          <div class="title">
            <div class="expand">+</div>
            <h2>Service 5</h2>
          </div>
          <p></p>
        </div>
        <div class="form-group">
          <div class="title">
            <div class="expand">+</div>
            <h2>Service 6</h2>
          </div>
          <p></p>
        </div> */}
      </div>
    </section>
  );
};
export default ServiceCards;
