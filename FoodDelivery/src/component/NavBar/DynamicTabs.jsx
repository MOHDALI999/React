import { useLocation } from "react-router-dom";
import { Suspense } from "react";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";

// Component map per route
const routeConfig = [
  {
    pattern: /^\/$/,
    component: Home,
  },
  {
    pattern: /^\/about$/,
    component: About,
  },
  
];

// default fallback
const DefaultComponent = () => <div />;

const DynamicTabs = () => {
  const location = useLocation();

  const matched = routeConfig.find((item) =>
    item.pattern.test(location.pathname)
  );

  const ComponentToRender = matched ? matched.component : DefaultComponent;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentToRender />
    </Suspense>
  );
};

export default DynamicTabs;
