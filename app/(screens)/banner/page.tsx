
type TBanner = {
    Nav: () => React.JSX.Element
}




export default function Banner({Nav}: TBanner) {


    return (
        <section>
            <h1 className="text-lg">Head</h1>
            <Nav />
        </section>
    );
}