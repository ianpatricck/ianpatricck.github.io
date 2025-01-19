import Style from "./Menu.module.css";

export default function Menu() {
  const items = [
    {
      url: "https://www.linkedin.com/in/ianpatricck/",
      image: "/images/icon-linkedin.svg",
      alt: "LinkedIn",
    },
    {
      url: "https://github.com/ianpatricck",
      image: "/images/icon-github.svg",
      alt: "Github",
    },
    {
      url: "https://medium.com/@ianpatricck",
      image: "/images/icon-medium.svg",
      alt: "Medium",
    },
    {
      url: "https://dev.to/ianpatricck",
      image: "/images/icon-devto.svg",
      alt: "DEV",
    },
    {
      url: "https://www.npmjs.com/~ianpatrick",
      image: "/images/icon-npm.svg",
      alt: "NPM",
    },
  ];

  return (
    <div className={Style.menu}>
      {items.map((item, key) => (
        <a
          key={key}
          href={item.url}
          target="_blank"
          className={Style.menu__item}
        >
          <img src={item.image} alt={item.alt} />
        </a>
      ))}
    </div>
  );
}
