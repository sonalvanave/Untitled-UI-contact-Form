import {
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiLinkedinBoxLine,
  RiMap2Fill,
  RiPhoneLine,
  RiChat3Line,
} from "react-icons/ri";

const contactInfo = [
  {
    id: 0,
    title: "Chat to us",
    description: "Our friendly team",
    action: "hi@untitledui.com",
    icon: RiChat3Line,
  },
  {
    id: 1,
    title: "Visit us",
    description: "Come say hello at our office HQ",
    action: "100 Smith Street Collingwood VIC 3066 AU",
    icon: RiMap2Fill,
  },
  {
    id: 2,
    title: "Call us",
    description: "Mon-Fri from 8am to 5pm.",
    action: "+1 (555) 000-0000",
    icon: RiPhoneLine,
  },
];

const Aside = () => {
  return (
    <aside className="flex min-h-screen flex-col justify-between">
      <div>
        {contactInfo.map((contact) => {
          return (
            <div key={contact.id} className="mb-6">
              <contact.icon className="text-2xl text-lime-400" />
              <h3 className="text-lg font-bold">{contact.title}</h3>
              <p className="mb-2 font-semibold text-stone-600">
                {contact.description}
              </p>
              <p>{contact.action}</p>
            </div>
          );
        })}
      </div>

      <footer className="flex gap-2 text-2xl text-lime-600">
        <a href="#">
          <RiFacebookCircleLine />
        </a>
        <a href="#">
          <RiTwitterXLine />
        </a>
        <a href="#">
          <RiLinkedinBoxLine />
        </a>
      </footer>
    </aside>
  );
};

export default Aside;