import React, { Suspense } from "react";
import Suspension from "./module/hooks/components/Suspension";
import UseDeferredValue from "./module/hooks/UseDeferredValue";
import UseSyncExternalStore from "./module/hooks/UseSyncExternalStore";
import { UseInsertionEffect } from "./module/hooks/UseInsertionEffect";
import StartTransition from "./module/hooks/useTransition";

const App = () => {

  return (
    <div>
      {/* <StartTransition /> */}
      {/* <UseDeferredValue /> */}
      {/* <Suspense fallback={"Loading..."}>
        <Suspension />
      </Suspense> */}
      {/* <UseSyncExternalStore /> */}
      <UseInsertionEffect />

    </div>
  )
};

export default App;




