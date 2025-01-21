"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import config from "@/config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PlausibleProvider from "next-plausible";

// All the client wrappers are here (they can't be in server components)
// 1. SessionProvider: Allow the useSession from next-auth (find out if user is auth or not)
// 2. NextTopLoader: Show a progress bar at the top when navigating between pages
// 3. Toaster: Show Success/Error messages anywhere from the app with toast()
// 4. Tooltip: Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content=""
// 5. CrispChat: Set Crisp customer chat support (see above)
const ClientLayout = ({ children }) => {
  return (
    <>
      <PlausibleProvider domain="tunisian-pass.tn">
        <SessionProvider>
          {/* Show a progress bar at the top when navigating between pages */}
          <NextTopLoader  showSpinner={false} />
          {children}
          <SpeedInsights />

          {/* Show Success/Error messages anywhere from the app with toast() */}
          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />

          {/* Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content="" */}
          <Tooltip
            id="tooltip"
            className="z-[60] !opacity-100 max-w-sm shadow-lg"
          />
        </SessionProvider>
      </PlausibleProvider>
    </>
  );
};

export default ClientLayout;
