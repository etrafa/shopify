import FaqDropdown from "../components/FAQ/FaqDropdown";

const Faq = () => {
  return (
    <div className="mt-14 min-h-[50vh] text-center">
      <h1 className="text-border text-2xl font-bold text-zinc-700">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="px-8 mt-4 py-4 w-11/12 mx-auto max-w-3xl">
        <FaqDropdown
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at repellat distinctio modi libero, reiciendis a officiis tempora."
        />
        <FaqDropdown
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing.
          "
        />
        <FaqDropdown
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem?"
          answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <FaqDropdown
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam est minima dignissimos!
          "
        />
        <FaqDropdown
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis suscipit esse minus vero dolorum.
          "
        />
        <FaqDropdown
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem?"
          answer=" Lorem ipsum dolor sit armet."
        />
      </div>
    </div>
  );
};
export default Faq;
