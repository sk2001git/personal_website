import Google from "next-auth/providers/github"

import type { NextAuthConfig } from "next-auth"

export default {
  providers: [Google],
} satisfies NextAuthConfig