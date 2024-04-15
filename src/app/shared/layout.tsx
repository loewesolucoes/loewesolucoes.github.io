"use client";

import { AppProviders } from "../contexts";
import { Header } from "../components/header";

export function Layout({ children }: any) {
  return (
    <AppProviders>
      <Header />
      {children}
    </AppProviders>
  );
}