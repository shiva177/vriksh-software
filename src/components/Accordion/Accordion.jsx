import React, { useState } from "react";
import "./Accordion.css";

const faqData = [
  {
    question: "Where can I watch?",
    answer:
      "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiminibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
  },
  {
    question: "Tempus magna risus interdum ultricies sed urna?",
    answer:
      "Ultricies integer quis auctor elit sed vulputate mi sit amet mauris. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.",
  },
  {
    question: "Augue in nibh urna volutpat mattis?",
    answer:
      "Viverra aliquet eget sit amet. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper.",
  },
  {
    question: "Eu egestas sed sed posuere ultricies?",
    answer:
      "Egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse.",
  },
  {
    question: "Elementum facilisi aliquam, nisi, orci vulputate?",
    answer:
      "Sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="accordion-container">
      <h2 className="accordion-title">Wondering How This Works</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <span className="accordion-question">{item.question}</span>
              <span className="accordion-icon">{openIndex === index ? "×" : "+"}</span>
            </div>
            {openIndex === index && <div className="accordion-content">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
