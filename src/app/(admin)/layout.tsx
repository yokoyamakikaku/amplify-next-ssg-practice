import { PropsWithChildren } from "react";
import '@aws-amplify/ui-react/styles.css';

import { Amplify } from "aws-amplify";

import config from '@/aws-exports';
import AdminProviders from "./Providers";

Amplify.configure(config);

export default function AdminLayout ({ children }: PropsWithChildren) {
  return (
    <AdminProviders>
      {children}
    </AdminProviders>
  )
}
