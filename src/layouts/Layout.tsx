import { ChildProps } from "../utils/type";

function Layout({ children }: ChildProps) {
  return (
    <div className="relative m-0 max-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen scrollbar-thin scrollbar-tract-white scrollbar-thumb-slate-100">
      <div className="container">{children}</div>
    </div>
  );
}

export default Layout;
