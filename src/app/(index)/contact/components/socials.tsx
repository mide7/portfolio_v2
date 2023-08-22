import React from "react";
import SocialLinkAndIcon from "@/components/SocialLinkAndIcon";
import EnvelopeSvg from "@/components/svgs/envelope";
import LinkedInSvg from "@/components/svgs/linkedIn";
import PhoneSvg from "@/components/svgs/phone";
import TwitterSvg from "@/components/svgs/twitter";
import { urls } from "@/lib/urls";

export default function ContactSocials() {
  return (
    <div className="space-y-6 h-full">
      <h1 className="text-primaryBlue font-medium text-[min(7vw,42px)]">
        Get in Touch with Me
      </h1>
      <p className="text-gray-400 text-sm">
        We appreciate each customer and we are proud that 60% of clients come
        back to work with us again.
      </p>
      <SocialLinkAndIcon
        href={urls.external.me.tel}
        title={"+234 813 054 2804"}
        iconClass={"ri-phone-fill"}
        linkStyle={"font-medium active:motion-safe:animate-ping"}
      />
      <SocialLinkAndIcon
        href={urls.external.me.email}
        title={"ayomideosunsami@gmail.com"}
        iconClass={"ri-mail-fill"}
        linkStyle={"font-medium active:motion-safe:animate-ping"}
      />
      <hr />
      <h2 className="text-primaryBlue font-medium text-xl">Am on Socials</h2>
      <div className="grid grid-cols-2 max-w-xs gap-4 items-center">
        <SocialLinkAndIcon
          href={urls.external.me.twitter}
          iconClass={"ri-twitter-fill"}
          title={"Twitter"}
          linkStyle={
            "font-medium active:motion-safe:animate-ping text-gray-500 hover:text-gray-400"
          }
        />
        <SocialLinkAndIcon
          href={urls.external.me.linkedin}
          iconClass={"ri-linkedin-fill"}
          title={"LinkedIn"}
          linkStyle={
            "font-medium active:motion-safe:animate-ping text-gray-500 hover:text-gray-400"
          }
        />
        <SocialLinkAndIcon
          href={urls.external.me.github}
          iconClass={"ri-github-fill"}
          title={"Github"}
          linkStyle={
            "font-medium active:motion-safe:animate-ping text-gray-500 hover:text-gray-400"
          }
        />
      </div>
    </div>
  );
}
