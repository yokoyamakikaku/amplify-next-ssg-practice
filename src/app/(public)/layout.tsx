import { PropsWithChildren } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function PublicLayout ({ children }: PropsWithChildren) {
  return (
    <div>
      {children}
    </div>
  )
}
