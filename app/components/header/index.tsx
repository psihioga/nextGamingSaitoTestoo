import Image from "next/image";

type TNav = {
    id: number;
  title: string;
};

const List = (props: { elements: TNav[] }) => {
  const { elements } = { ...props };

  return (
    <>
     {elements.map((el: TNav) => {
        return <li key={el.id} className="">{el.title}</li>;
      })}
    </>
     

  );
};

const titles: TNav[] = [
  { title: "tournaments",
id: 1 },
  { title: "our team",
id: 2 },
  { title: "our sponsors",
id: 3 },
  { title: "about us",
id: 4 },
  { title: "shop",
id: 5 },
  { title: "contact us",
id: 6 },
];

export default function Header() {
  const Logo = () => (
    <Image src={"/one.png"} alt="dd" width={100} height={150}></Image>
  );

  return (
    <header className="flex flex-col items-center justify-between p-4 bg-slate-100 text-cyan-950">

    <ul className="flex items-center  p-4 bg-slate-500">
    <List elements={titles.slice(0, 3)} />
      <Logo />
    <List elements={titles.slice(3, 6)} />
    </ul>
      
    </header>
  );
}
