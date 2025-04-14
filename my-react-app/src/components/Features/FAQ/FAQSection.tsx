import { useState } from "react";
import Collapse from "../../common/Collapse/collapse";
import faqItems from "../../../data/FAQData.json";
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
          title={item.title}
          isOpen={openId === item.id}
          onClick={() => handleToggle(item.id)}
        >
          {item.content}
        </Collapse>
      ))}
    </div>
  );
};

export default FAQSection;
