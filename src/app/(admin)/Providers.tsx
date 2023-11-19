'use client';

import { PropsWithChildren } from "react";
import {
  Authenticator, Heading, View, useTheme
} from "@aws-amplify/ui-react";

export default function AdminProviders ({ children }: PropsWithChildren) {
  const theme = useTheme()
  return (
    <Authenticator
      components={{
        Header: () => (
          <View padding={theme.tokens.space.large}>
            <Heading textAlign="center" level={3}>Admin</Heading>
          </View>
        )
      }}>
      {children}
    </Authenticator>
  )
}
