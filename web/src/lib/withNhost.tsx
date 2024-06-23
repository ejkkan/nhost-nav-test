'use client';

import { NhostClient, NhostProvider } from '@nhost/nextjs';

const nhost = new NhostClient({
  subdomain: 'local',
  region: undefined,
});

export const withNhost = (Component: React.ComponentType) => {
  return function WrappedComponent(props: any) {
    return (
      <NhostProvider nhost={nhost}>
        <Component {...props} />
      </NhostProvider>
    );
  };
};
