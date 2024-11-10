import "react-toastify/dist/ReactToastify.css";

import Root from "./Root";
import UpRoot from "./UpRoot";

export default function App() {
  return (
    <>
      <body className="bg-[#172227] font-[Inter] text-white">
        <UpRoot />
        <Root />
      </body>
    </>
  );
}
