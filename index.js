const head1 = React.createElement("h1", { id: "head" }, "Head1");
const head2 = React.createElement("h1", { id: "head" }, "Head2");

const div2 = React.createElement("div", { id: "child" }, head1, head2);

const div = React.createElement("div", { id: "parent" }, div2);

const root = ReactDOM.createRoot(document.getElementById("hello"));

root.render(div);