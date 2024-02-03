"use client";

import { Button } from "@/components/ui/button";
import { LiteralUnion, signIn } from "next-auth/react";

export type OAuthProviderType =
  | "42-school"
  | "apple"
  | "atlassian"
  | "auth0"
  | "authentik"
  | "azure-ad-b2c"
  | "azure-ad"
  | "battlenet"
  | "box"
  | "boxyhq-saml"
  | "bungie"
  | "cognito"
  | "coinbase"
  | "credentials"
  | "discord"
  | "dropbox"
  | "duende-identity-server6"
  | "email"
  | "eveonline"
  | "facebook"
  | "faceit"
  | "foursquare"
  | "freshbooks"
  | "fusionauth"
  | "github"
  | "gitlab"
  | "google"
  | "hubspot"
  | "identity-server4"
  | "index"
  | "instagram"
  | "kakao"
  | "keycloak"
  | "line"
  | "linkedin"
  | "mailchimp"
  | "mailru"
  | "medium"
  | "naver"
  | "netlify"
  | "oauth-types"
  | "oauth"
  | "okta"
  | "onelogin"
  | "osso"
  | "osu"
  | "passage"
  | "patreon"
  | "pinterest"
  | "pipedrive"
  | "reddit"
  | "salesforce"
  | "slack"
  | "spotify"
  | "strava"
  | "todoist"
  | "trakt"
  | "twitch"
  | "twitter"
  | "united-effects"
  | "vk"
  | "wikimedia"
  | "wordpress"
  | "workos"
  | "yandex"
  | "zitadel"
  | "zoho"
  | "zoom";

interface SignInWithCustomProps {
  children: React.ReactNode;
  provider?: LiteralUnion<OAuthProviderType> | undefined;
}

export const SignInWithButton= ({
  children,
  provider,
}: SignInWithCustomProps) => {
  const onClick = () => {
    signIn(provider, {
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <Button onClick={onClick} variant={"ghost"} className="flex-1">
      {children}
    </Button>
  );
};
