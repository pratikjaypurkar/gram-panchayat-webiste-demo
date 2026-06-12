import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["en", "mr"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales /* ... */ });
