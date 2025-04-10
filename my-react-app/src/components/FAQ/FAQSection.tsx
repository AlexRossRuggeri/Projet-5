import { useState } from "react";
import Collapse from "../common/collapse/collapse";
import faqItems from "../../data/FAQ.json";
import "./FAQSection.scss";

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-section">
      {faqItems.map((item) => (
        <Collapse
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={openId === item.id}
          onClick={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default FAQSection;
